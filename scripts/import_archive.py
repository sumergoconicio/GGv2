#!/usr/bin/env python3
"""Module: import_archive.py. Convert Squarespace HTML into Markdown and local media."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import shutil
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime
from pathlib import Path
from urllib.parse import unquote, urlparse

from lxml import html


TRAVEL_ORDER = [
    ("iae2017-gettingthere.html", "getting-there", None),
    ("iae2017-day-4.html", "day-4", None),
    ("iae2017-day-5.html", "day-5", None),
    ("iae2017-day-6.html", "day-6", None),
    ("iae2017-day-7.html", "day-7", None),
    ("iae2017-day-8.html", "day-8", None),
    ("iae2017-return-to-reality.html", "return-to-reality", None),
    ("iae2017-antarctica-in-images.html", "antarctica-in-images", None),
]


def class_xpath(name: str) -> str:
    """Return an XPath class-token test for name; accepts a class name and returns XPath text."""
    return f'contains(concat(" ",normalize-space(@class)," ")," {name} ")'


def clean_text(value: str) -> str:
    """Collapse whitespace in value; accepts text and returns normalized text."""
    return re.sub(r"\s+", " ", value or "").strip()


def complete_teaser(value: str, limit: int = 350) -> str:
    """Keep complete sentences within the teaser limit when the source supplies them."""
    value = clean_text(value)
    if len(value) <= limit:
        return value
    boundaries = list(re.finditer(r'[.!?](?=\s|["”\)\]]|$)', value[:limit]))
    return value[:boundaries[-1].end()] if boundaries else value


def yaml_value(value: object) -> str:
    """Encode value as a YAML-compatible JSON scalar; accepts any JSON value."""
    return json.dumps(value, ensure_ascii=False)


class Importer:
    """Convert a Squarespace archive into a portable content folder."""

    def __init__(self, archive: Path, output: Path, dry_run: bool):
        """Set archive and output paths; dry_run avoids writes; missing paths fail on use."""
        self.archive = archive
        self.site = archive / "www.glyphsandgraphs.com"
        self.output = output
        self.dry_run = dry_run
        self.media: dict[str, str] = {}
        self.media_bytes = 0
        self.to_copy: list[tuple[Path, Path]] = []
        self.warnings: list[str] = []
        self.records: list[dict] = []
        self.block_types: Counter[str] = Counter()

    def media_url(self, source: str, page: Path) -> str | None:
        """Map an image source to a copied site URL; return None when unavailable."""
        if not source or "images.squarespace-cdn.com/" not in source:
            return None
        relative = "images.squarespace-cdn.com/" + source.split("images.squarespace-cdn.com/", 1)[1].split("?", 1)[0]
        if relative in self.media:
            return self.media[relative]
        file = self.archive / relative
        if not file.is_file():
            self.warnings.append(f"Missing image: {page.relative_to(self.site)} -> {relative}")
            return None
        suffix = file.suffix.lower()
        if suffix not in {".jpg", ".jpeg", ".png", ".gif", ".webp"}:
            suffix = ".jpg"
        name = hashlib.sha256(relative.encode()).hexdigest()[:20] + suffix
        url = "/archive/media/" + name
        self.media[relative] = url
        source_size = file.stat().st_size
        self.media_bytes += source_size
        if not self.dry_run:
            target = self.output / "public" / "archive" / "media" / name
            target.parent.mkdir(parents=True, exist_ok=True)
            if not target.exists() or target.stat().st_size != source_size:
                self.to_copy.append((file, target))
        return url

    def link(self, href: str) -> str:
        """Rewrite archive links to public static routes; keep unrelated links intact."""
        if not href:
            return ""
        parsed = urlparse(href)
        path = unquote(parsed.path)
        if parsed.netloc and "glyphsandgraphs.com" not in parsed.netloc:
            return href
        if "feeds.feedburner.com/glyphsandgraphs.xml" in path:
            return "/rss.xml"
        if "pure.uva.nl/ws/" in path:
            return "https://pure.uva.nl/ws/" + path.split("pure.uva.nl/ws/", 1)[1]
        if path.endswith("iae2017.html"):
            return "/works/iae2017"
        match = re.search(r"(?:^|/)(?:essais/)?(\d{4})/([^/?#]+?)(?:\.html)?$", path)
        if match:
            slug = match.group(2).split("﹖", 1)[0]
            if slug == "well-hello-there":
                return "/blog"
            return "/blog/" + slug
        match = re.search(r"(?:^|/)(iae2017-[^/?#]+?)(?:\.html)?$", path)
        if match:
            mapping = {filename.removesuffix(".html"): slug for filename, slug, _ in TRAVEL_ORDER}
            slug = mapping.get(match.group(1))
            if slug:
                return "/works/iae2017/" + slug
        return href

    def inline(self, node) -> str:
        """Convert inline HTML under node into Markdown; unsupported tags keep their text."""
        result = node.text or ""
        for child in node:
            tag = child.tag.lower() if isinstance(child.tag, str) else ""
            inner = self.inline(child)
            if tag in {"strong", "b"}:
                part = f"**{inner.strip()}**" if inner.strip() else ""
            elif tag in {"em", "i"}:
                part = f"*{inner.strip()}*" if inner.strip() else ""
            elif tag == "code":
                part = f"`{inner.strip()}`"
            elif tag == "a":
                href = self.link(child.get("href", ""))
                part = f"[{inner.strip()}]({href})" if href and inner.strip() else inner
            elif tag == "br":
                part = "  \n"
            elif tag == "img":
                part = ""
            elif tag in {"script", "style", "noscript"}:
                part = ""
            else:
                part = inner
            tail = child.tail or ""
            if tag in {"em", "i"} and tail[:1].isalpha():
                tail = " " + tail
            result += part + tail
        # Squarespace places linked hashtags directly together with no text separator.
        result = re.sub(r"(?<=\))(?=\[#)", " ", result)
        return re.sub(r"(?<=[A-Za-z0-9])(?=\[@)", " ", result)

    def blocks(self, node, indent: int = 0) -> list[str]:
        """Convert a block element to Markdown paragraphs and return their text."""
        tag = node.tag.lower() if isinstance(node.tag, str) else ""
        if tag in {"script", "style", "noscript"}:
            return []
        if tag in {"p", "h1", "h2", "h3", "h4", "h5", "h6"}:
            value = clean_text(self.inline(node))
            if not value:
                return []
            return [("#" * int(tag[1]) + " " + value) if tag.startswith("h") else value]
        if tag == "hr":
            return ["---"]
        if tag in {"ul", "ol"}:
            lines = []
            for number, item in enumerate(node.xpath("./li"), 1):
                prefix = f"{number}. " if tag == "ol" else "- "
                text = clean_text(self.inline(item))
                if text:
                    lines.append("  " * indent + prefix + text)
            return ["\n".join(lines)] if lines else []
        if tag == "blockquote":
            parts = []
            for child in node:
                parts.extend(self.blocks(child, indent))
            if not parts:
                parts = [clean_text(self.inline(node))]
            return ["\n".join("> " + line for part in parts for line in part.splitlines())]
        if tag == "pre":
            return ["```\n" + clean_text(" ".join(node.itertext())) + "\n```"]
        parts = []
        if node.text and clean_text(node.text):
            parts.append(clean_text(node.text))
        for child in node:
            parts.extend(self.blocks(child, indent))
            if child.tail and clean_text(child.tail):
                parts.append(clean_text(child.tail))
        return parts

    def images_in(self, block, page: Path, seen: set[str]) -> list[str]:
        """Convert unique images in block to Markdown and update the seen URL set."""
        lines = []
        for image in block.xpath(".//img"):
            source = image.get("data-src") or image.get("src") or ""
            url = self.media_url(source, page)
            if not url or url in seen:
                continue
            seen.add(url)
            caption = clean_text(image.get("alt") or "")
            if not caption:
                container = image.getparent()
                for _ in range(3):
                    if container is None:
                        break
                    matches = container.xpath('.//*[contains(@class,"image-caption") or self::figcaption]')
                    if matches:
                        caption = clean_text(" ".join(matches[0].itertext()))
                        break
                    container = container.getparent()
            lines.append(f"![{caption.replace(']', '')}]({url})")
        return lines

    def article_markdown(self, body, page: Path) -> tuple[str, list[str]]:
        """Convert ordered Squarespace blocks into Markdown and local image URLs."""
        parts: list[str] = []
        images: list[str] = []
        seen: set[str] = set()
        blocks = body.xpath(f'.//*[{class_xpath("sqs-block")}]')
        for block in blocks:
            classes = set((block.get("class") or "").split())
            kind = next((x for x in classes if x.endswith("-block") and x != "sqs-block"), "unknown")
            self.block_types[kind] += 1
            if kind == "html-block":
                content = block.xpath(f'.//*[{class_xpath("sqs-html-content")}]')
                for element in content:
                    for child in element:
                        parts.extend(self.blocks(child))
                    for image in element.xpath(".//img"):
                        url = self.media_url(image.get("data-src") or image.get("src") or "", page)
                        if url and url not in seen:
                            seen.add(url)
                            images.append(url)
                            parts.append(f"![{clean_text(image.get('alt') or '')}]({url})")
            elif kind in {"image-block", "gallery-block"}:
                lines = self.images_in(block, page, seen)
                parts.extend(lines)
                images.extend(line.rsplit("(", 1)[1][:-1] for line in lines)
            elif kind == "video-block":
                urls = [u for u in block.xpath(".//iframe/@src | .//a/@href") if u.startswith("http")]
                if not urls and block.get("data-block-json"):
                    try:
                        video = json.loads(block.get("data-block-json"))
                        if video.get("url"):
                            urls = [video["url"]]
                    except json.JSONDecodeError:
                        pass
                if urls:
                    parts.append(f"[Watch video]({urls[0]})")
                else:
                    self.warnings.append(f"Video without URL: {page.relative_to(self.site)}")
            elif kind == "horizontalrule-block":
                parts.append("---")
            elif kind == "summary-v2-block":
                featured = []
                seen_links = set()
                for anchor in block.xpath('.//a[@href]'):
                    href = self.link(anchor.get("href", ""))
                    title = clean_text(" ".join(anchor.itertext()))
                    if not href.startswith("/blog/") or href in seen_links or not title or title.startswith("Read More"):
                        continue
                    slug = href.rsplit("/", 1)[1]
                    if not any((self.site / "essais" / year / (slug + ".html")).is_file() for year in ("2009", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2024")):
                        continue
                    seen_links.add(href)
                    featured.append(f"- [{title}]({href})")
                if featured:
                    parts.append("## Featured essays")
                    parts.append("\n".join(featured))
            elif kind == "spacer-block":
                continue
            else:
                self.warnings.append(f"Unsupported block {kind}: {page.relative_to(self.site)}")
        markdown = "\n\n".join(p.strip() for p in parts if p.strip()).strip() + "\n"
        return markdown, images

    def save(self, relative: Path, meta: dict, markdown: str) -> None:
        """Write one Markdown post under output unless dry_run is set."""
        lines = ["---"] + [f"{key}: {yaml_value(value)}" for key, value in meta.items()] + ["---", "", markdown.rstrip(), ""]
        if not self.dry_run:
            dest = self.output / "content" / relative
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text("\n".join(lines), encoding="utf-8")
        self.records.append({**meta, "contentFile": str(relative), "wordCount": len(markdown.split())})

    def import_essays(self) -> None:
        """Read essay years and write canonical posts while skipping query copies."""
        for folder in sorted(p for p in (self.site / "essais").iterdir() if p.is_dir() and p.name.isdigit()):
            for page in sorted(p for p in folder.iterdir() if p.suffix.lower() == ".html" and "﹖" not in p.name):
                tree = html.parse(str(page))
                body = tree.xpath(f'//main//*[{class_xpath("blog-item-content")}]')
                if len(body) != 1:
                    self.warnings.append(f"Essay body count {len(body)}: {page.relative_to(self.site)}")
                    continue
                title = clean_text(tree.xpath("string(//title)")).removesuffix(" - Glyphs & Graphs")
                published = tree.xpath('string(//meta[@itemprop="datePublished"]/@content)')
                date = published[:10]
                description = clean_text(tree.xpath('string(//meta[@name="description"]/@content)'))
                categories = tree.xpath(f'//main//article[{class_xpath("entry--item")}]//*[contains(@class,"blog-category")]/text()')
                category = clean_text(categories[0]) if categories else "Essays"
                tags = [clean_text(x) for x in tree.xpath(f'//main//article[{class_xpath("entry--item")}]//*[contains(@class,"blog-item-tag")]/text()') if clean_text(x) and clean_text(x) != ","]
                markdown, images = self.article_markdown(body[0], page)
                slug = page.stem.split("﹖", 1)[0]
                pinned = folder.name == "2031" and slug == "well-hello-there"
                meta = {
                    "kind": "essay", "slug": slug, "title": title,
                    "date": None if pinned else date,
                    "sourceDate": date if pinned else None,
                    "archiveYear": None if pinned else int(folder.name),
                    "pinned": pinned, "category": category, "tags": tags,
                    "description": complete_teaser(description), "cover": images[0] if images else None,
                    "source": str(page.relative_to(self.site)),
                }
                target = Path("essais") / ("welcome.md" if pinned else folder.name + "/" + slug + ".md")
                self.save(target, meta, markdown)
                if not date:
                    self.warnings.append(f"Missing date: {page.relative_to(self.site)}")
                elif not pinned and date[:4] != folder.name:
                    self.warnings.append(f"Archive year differs from published date: {page.relative_to(self.site)} ({date})")

    def import_travel(self) -> None:
        """Read the Antarctica series in narrative order and write travel posts."""
        for order, (filename, slug, date) in enumerate(TRAVEL_ORDER):
            page = self.site / "iea2017" / filename
            tree = html.parse(str(page))
            body = tree.xpath("//main")
            if len(body) != 1:
                self.warnings.append(f"Travel body count {len(body)}: {filename}")
                continue
            title = clean_text(tree.xpath("string(//title)")).removesuffix(" - Glyphs & Graphs")
            description = clean_text(tree.xpath('string(//meta[@name="description"]/@content)'))
            if slug == "antarctica-in-images" and not description:
                description = "Photographs from the 2017 Antarctica journey."
            markdown, images = self.article_markdown(body[0], page)
            meta = {
                "kind": "travel", "slug": slug, "title": title, "date": date,
                "series": "antarctica-2017", "order": order,
                "description": complete_teaser(description), "cover": images[0] if images else None,
                "source": str(page.relative_to(self.site)),
            }
            self.save(Path("travel") / "antarctica-2017" / (slug + ".md"), meta, markdown)

    def run(self) -> dict:
        """Run both imports and return a report with records, media, and warnings."""
        self.import_essays()
        self.import_travel()
        if self.to_copy:
            with ThreadPoolExecutor(max_workers=8) as pool:
                copied = list(pool.map(lambda pair: shutil.copy2(*pair), self.to_copy))
            if len(copied) != len(self.to_copy):
                raise RuntimeError("Not all media files were copied")
            for source, target in self.to_copy:
                if target.stat().st_size != source.stat().st_size:
                    raise RuntimeError(f"Incomplete media copy: {target}")
        report = {
            "posts": len(self.records),
            "essays": sum(x["kind"] == "essay" for x in self.records),
            "travel": sum(x["kind"] == "travel" for x in self.records),
            "mediaFiles": len(self.media),
            "mediaBytes": self.media_bytes,
            "blockTypes": dict(self.block_types),
            "warnings": self.warnings,
            "postsIndex": self.records,
            "mediaSourceMap": self.media,
        }
        if not self.dry_run:
            target = self.output / "content" / "import-report.json"
            target.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        return report


def main() -> None:
    """Parse archive, output, and dry-run arguments; print a concise import summary."""
    parser = argparse.ArgumentParser()
    parser.add_argument("archive", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    report = Importer(args.archive, args.output, args.dry_run).run()
    print(json.dumps({key: report[key] for key in ("posts", "essays", "travel", "mediaFiles", "mediaBytes", "blockTypes")}, indent=2))
    print("warnings", len(report["warnings"]))
    for warning in report["warnings"][:25]:
        print("WARN", warning)


if __name__ == "__main__":
    main()
