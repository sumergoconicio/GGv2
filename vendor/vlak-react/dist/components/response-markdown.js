"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { Streamdown, defaultRehypePlugins, useIsCodeFenceIncomplete } from "streamdown";
import { createMathPlugin } from "@streamdown/math";
import { cjk } from "@streamdown/cjk";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { HighlightedCode } from "./highlighted-code.js";
import { Button } from "./button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const mathPlugin = createMathPlugin({
  errorColor: "currentColor"
});
// Keep sanitization, omit raw HTML parsing, and validate links/images separately below.
const rehypePlugins = [defaultRehypePlugins.sanitize];
const noImages = [];
const noLinkModal = {
  enabled: false
};
function safeUrl(value, kind, origins, baseUrl) {
  if (!value || Array.from(value).some(character => character.charCodeAt(0) <= 32 || character.charCodeAt(0) === 127)) return undefined;
  try {
    const parsed = new URL(value, baseUrl ?? "https://vlak.invalid");
    if (kind === "link") return ["https:", "http:", "mailto:"].includes(parsed.protocol) ? value : undefined;
    // Emit the address whose origin was checked, rather than letting the page resolve it again.
    return ["https:", "http:"].includes(parsed.protocol) && origins.includes(parsed.origin) ? parsed.href : undefined;
  } catch {
    return undefined;
  }
}
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMwMTN: "x1gney9c",
    kGuDYH: "x6u19be",
    kLWn49: "xfrs9s4",
    kHjlTd: "xj0a0fe",
    khDVqt: "xeaf4i8",
    $$css: true
  },
  paragraph: {
    kogj98: "x17l89ck",
    $$css: true
  },
  h1: {
    kGuDYH: "xngnso2",
    kLWn49: "x132q4wb",
    k63SB2: "x1s688f",
    kogj98: "xur0t1",
    $$css: true
  },
  h2: {
    kGuDYH: "x1603h9y",
    kLWn49: "xwn7fz2",
    k63SB2: "x1s688f",
    kogj98: "xur0t1",
    $$css: true
  },
  h3: {
    kGuDYH: "x1lkfr7t",
    kLWn49: "x1xfvgam",
    k63SB2: "x1s688f",
    kogj98: "xzkfq7m",
    $$css: true
  },
  h4: {
    kGuDYH: "x1jchvi3",
    kLWn49: "x1xfvgam",
    k63SB2: "x1s688f",
    kogj98: "xzkfq7m",
    $$css: true
  },
  h5: {
    kGuDYH: "x6u19be",
    kLWn49: "x37zpob",
    k63SB2: "x1s688f",
    kogj98: "xzkfq7m",
    $$css: true
  },
  h6: {
    kGuDYH: "x6u19be",
    kLWn49: "x37zpob",
    k63SB2: "x1s688f",
    kogj98: "xzkfq7m",
    $$css: true
  },
  strong: {
    k63SB2: "x1s688f",
    $$css: true
  },
  list: {
    kogj98: "x17l89ck",
    kZCmMZ: "x1is3n31",
    $$css: true
  },
  item: {
    kogj98: "xwdno20",
    kZCmMZ: "x7flpkw",
    $$css: true
  },
  quote: {
    kogj98: "xbkgn1r",
    kmVPX3: "xq3cggq",
    k2ei4v: "xyumdvf",
    kVhnKS: "x1t7ytsu",
    kGJrpR: "xvzgzbh",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  inline: {
    kMv6JI: "x1mb2qyg",
    kGuDYH: "x1s8wshw",
    kWkggS: "x1nzd1wa",
    kMwMTN: "x1gney9c",
    kaIpWk: "xkrxur",
    kmVPX3: "xo8u9x4",
    $$css: true
  },
  link: {
    kMwMTN: "x1ixqp2s xcfh57o x1k15hi6",
    kybGjl: "x1bvjpef",
    kcSHmL: "x1ohr1zr",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  image: {
    k1xSpc: "x1lliihq",
    ks0D6T: "x193iq5w",
    kZKoxP: "xt7dq6l",
    kogj98: "x17l89ck",
    kaIpWk: "xkrxur",
    $$css: true
  },
  imageDescription: {
    kMwMTN: "x1ixqp2s",
    kKX8nH: "x1k4tb9n",
    $$css: true
  },
  tableRegion: {
    kogj98: "xbkgn1r",
    ks0D6T: "x193iq5w",
    kVQacm: "xysyzu8",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  table: {
    kLvRdT: "x1mwwwfo",
    kzqmXN: "xh8yej3",
    kGuDYH: "xkpwil5",
    $$css: true
  },
  th: {
    k9WMMc: "x1yc453h",
    k63SB2: "x1s688f",
    kWkggS: "x1nzd1wa",
    kmVPX3: "x79iv2k",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  td: {
    kmVPX3: "x79iv2k",
    kXLuUW: "x16dsc37",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  rule: {
    kMzoRj: "xc342km",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kogj98: "x1fy0nhw",
    $$css: true
  },
  diagram: {
    kogj98: "xbkgn1r",
    k7Eaqz: "xeuugli",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kVQacm: "xb3r6kr",
    $$css: true
  },
  diagramViewport: {
    kskxy: "x14eurpq",
    kVQacm: "xysyzu8",
    kmVPX3: "x1uz70x1",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  diagramArt: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    $$css: true
  },
  diagramHeader: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    kmVPX3: "x1hluc2t",
    kAzted: "x1gg8mnh",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  diagramTitle: {
    kUk6DE: "x12lumcd",
    kGuDYH: "x1dcheo9",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  diagramAction: {
    kzqmXN: "x187nhsf",
    k7Eaqz: "x1nb6za0",
    ks0D6T: "x1k2d6hx",
    kZKoxP: "xn3w4p2",
    kmVPX3: "x1717udv",
    kmuXW: "x2lah0s",
    $$css: true
  },
  diagramIcon: {
    k1xSpc: "x1lliihq",
    kzqmXN: "x1kky2od",
    kZKoxP: "xlup9mm",
    $$css: true
  },
  summary: {
    kkrTdU: "x1ypdohk",
    kAzted: "x1gg8mnh",
    kB7OPa: "x9f619",
    kmVPX3: "x79iv2k",
    kMwMTN: "x1ixqp2s xcfh57o",
    kGuDYH: "x1dcheo9",
    kMeerF: "x1k57tk5 x784prv",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x2ssjo2",
    $$css: true
  },
  feedback: {
    kmVPX3: "x79iv2k",
    kogj98: "x1ghz6dp",
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    $$css: true
  }
};
const paragraph = rs(["rs-response-markdown-paragraph"], styles.paragraph);
const h1 = rs(["rs-response-markdown-h1"], styles.h1);
const h2 = rs(["rs-response-markdown-h2"], styles.h2);
const h3 = rs(["rs-response-markdown-h3"], styles.h3);
const h4 = rs(["rs-response-markdown-h4"], styles.h4);
const h5 = rs(["rs-response-markdown-h5"], styles.h5);
const h6 = rs(["rs-response-markdown-h6"], styles.h6);
const strong = rs(["rs-response-markdown-strong"], styles.strong);
const list = rs(["rs-response-markdown-list"], styles.list);
const item = rs(["rs-response-markdown-item"], styles.item);
const quote = rs(["rs-response-markdown-quote"], styles.quote);
const inline = rs(["rs-response-markdown-inline"], styles.inline);
const link = rs(["rs-response-markdown-link"], styles.link);
const image = rs(["rs-response-markdown-image"], styles.image);
const imageDescription = rs(["rs-response-markdown-image-description"], styles.imageDescription);
const tableRegion = rs(["rs-response-markdown-table-region"], styles.tableRegion);
const table = rs(["rs-response-markdown-table"], styles.table);
const th = rs(["rs-response-markdown-th"], styles.th);
const td = rs(["rs-response-markdown-td"], styles.td);
const rule = rs(["rs-response-markdown-rule"], styles.rule);
let mermaidQueue = Promise.resolve();
async function renderDiagram(source, id, dark) {
  let result = "";
  const pending = mermaidQueue.then(async () => {
    const {
      default: mermaid
    } = await import("mermaid");
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      suppressErrorRendering: true,
      maxTextSize: 30_000,
      maxEdges: 500,
      theme: "base",
      htmlLabels: false,
      themeVariables: {
        darkMode: dark,
        background: dark ? "#111111" : "#ffffff",
        fontFamily: "sans-serif",
        primaryColor: dark ? "#222222" : "#f5f5f5",
        primaryTextColor: dark ? "#f5f5f5" : "#111111",
        primaryBorderColor: dark ? "#999999" : "#777777",
        lineColor: dark ? "#999999" : "#777777",
        secondaryColor: dark ? "#1a1a1a" : "#eeeeee",
        tertiaryColor: dark ? "#2a2a2a" : "#ffffff",
        textColor: dark ? "#f5f5f5" : "#111111",
        actorTextColor: dark ? "#f5f5f5" : "#111111",
        signalTextColor: dark ? "#f5f5f5" : "#111111",
        labelTextColor: dark ? "#f5f5f5" : "#111111",
        noteTextColor: dark ? "#f5f5f5" : "#111111",
        noteBkgColor: dark ? "#222222" : "#eeeeee",
        edgeLabelBackground: dark ? "#222222" : "#eeeeee"
      },
      flowchart: {
        htmlLabels: false
      },
      secure: ["securityLevel", "startOnLoad", "maxTextSize", "maxEdges", "htmlLabels", "flowchart", "theme", "themeVariables", "themeCSS"]
    });
    result = (await mermaid.render(id, source)).svg;
  });
  mermaidQueue = pending.catch(() => undefined);
  await pending;
  return result;
}
function Diagram({
  source,
  incomplete
}) {
  const id = `vlak-diagram-${React.useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const figureRef = React.useRef(null);
  const [dark, setDark] = React.useState(null);
  const [rendered, setRendered] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  // biome-ignore lint/correctness/useExhaustiveDependencies: Completing a fence mounts the figure and changes its theme ancestors.
  React.useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const read = () => {
      const explicit = (figureRef.current?.closest("[data-theme]") ?? document.documentElement).getAttribute("data-theme");
      setDark(explicit === "dark" || explicit !== "light" && !!media?.matches);
    };
    read();
    const observer = new MutationObserver(read);
    for (let element = figureRef.current ?? document.documentElement; element; element = element.parentElement) observer.observe(element, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    media?.addEventListener("change", read);
    return () => {
      observer.disconnect();
      media?.removeEventListener("change", read);
    };
  }, [incomplete]);
  React.useEffect(() => {
    let cancelled = false;
    if (dark !== null && !incomplete && source.length <= 30_000) void renderDiagram(source, id, dark).then(svg => {
      if (!cancelled) setRendered({
        source,
        dark,
        svg
      });
    }).catch(() => {
      if (!cancelled && dark !== null) setRendered({
        source,
        dark,
        error: "The diagram could not be rendered. Its source is available below."
      });
    });
    return () => {
      cancelled = true;
    };
  }, [source, id, incomplete, dark]);
  const root = rs(["rs-response-markdown-diagram"], styles.diagram);
  const viewport = rs(["rs-response-markdown-diagram-viewport"], styles.diagramViewport);
  const art = rs(["rs-response-markdown-diagram-art"], styles.diagramArt);
  const header = rs(["rs-response-markdown-diagram-header"], styles.diagramHeader);
  const title = rs(["rs-response-markdown-diagram-title"], styles.diagramTitle);
  const action = rs(["rs-response-markdown-diagram-action"], styles.diagramAction);
  const icon = rs(["rs-response-markdown-diagram-icon"], styles.diagramIcon);
  const summary = rs(["rs-response-markdown-summary"], styles.summary);
  const feedback = rs(["rs-response-markdown-feedback"], styles.feedback);
  if (incomplete) return /*#__PURE__*/_jsx(HighlightedCode, {
    code: source,
    language: "mermaid",
    streaming: true
  });
  const current = rendered?.source === source && rendered.dark === dark ? rendered : null;
  return /*#__PURE__*/_jsxs("figure", {
    ...root,
    ref: figureRef,
    children: [/*#__PURE__*/_jsxs("figcaption", {
      ...header,
      children: [/*#__PURE__*/_jsx("span", {
        ...title,
        children: "Diagram"
      }), /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "subtle",
        "aria-label": "Zoom out diagram",
        title: "Zoom out diagram",
        disabled: !current?.svg || scale <= 0.5,
        onClick: () => setScale(value => Math.max(0.5, value - 0.25)),
        children: /*#__PURE__*/_jsx("svg", {
          ...icon,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          "aria-hidden": "true",
          children: /*#__PURE__*/_jsx("path", {
            d: "M5 12h14"
          })
        })
      }), /*#__PURE__*/_jsx(Button, {
        ...action,
        variant: "subtle",
        "aria-label": "Zoom in diagram",
        title: "Zoom in diagram",
        disabled: !current?.svg || scale >= 2,
        onClick: () => setScale(value => Math.min(2, value + 0.25)),
        children: /*#__PURE__*/_jsx("svg", {
          ...icon,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          "aria-hidden": "true",
          children: /*#__PURE__*/_jsx("path", {
            d: "M5 12h14M12 5v14"
          })
        })
      }), /*#__PURE__*/_jsxs(Button, {
        variant: "subtle",
        disabled: scale === 1,
        onClick: () => setScale(1),
        "aria-label": "Reset diagram zoom",
        children: [Math.round(scale * 100), "%"]
      })]
    }), current?.svg ? /*#__PURE__*/_jsx("div", {
      ...viewport,
      tabIndex: 0,
      role: "group",
      "aria-label": "Diagram preview",
      children: /*#__PURE__*/_jsx("div", {
        ...art,
        style: {
          ...art.style,
          width: `${scale * 100}%`
        }
        // Mermaid's strict renderer supplies sanitized SVG; model-authored HTML is never injected.
        ,

        dangerouslySetInnerHTML: {
          __html: current.svg
        }
      })
    }) : /*#__PURE__*/_jsx("p", {
      ...feedback,
      role: "status",
      children: source.length > 30_000 ? "The diagram is too large to preview. Its source is available below." : current?.error ?? "Rendering diagram…"
    }), /*#__PURE__*/_jsxs("details", {
      children: [/*#__PURE__*/_jsx("summary", {
        ...summary,
        children: "Diagram source"
      }), /*#__PURE__*/_jsx(HighlightedCode, {
        code: source,
        language: "mermaid",
        filename: "diagram.mmd"
      })]
    })]
  });
}
function MarkdownCode({
  children,
  className,
  diagrams,
  lineNumbers
}) {
  const incomplete = useIsCodeFenceIncomplete();
  const source = typeof children === "string" ? children : "";
  const language = /(?:^|\s)language-([^\s]+)/.exec(className ?? "")?.[1] ?? "text";
  if (diagrams && language.toLowerCase() === "mermaid") return /*#__PURE__*/_jsx(Diagram, {
    source: source,
    incomplete: incomplete
  });
  return /*#__PURE__*/_jsx(HighlightedCode, {
    code: source,
    language: language,
    streaming: incomplete,
    lineNumbers: lineNumbers
  });
}

/** Optional streaming Markdown, math, code, and diagrams with Vlak paint and safe default URLs. */
export const ResponseMarkdown = /*#__PURE__*/React.forwardRef(function ResponseMarkdown({
  children,
  streaming = false,
  math = true,
  diagrams = true,
  lineNumbers = false,
  imageOrigins = noImages,
  baseUrl,
  components,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-response-markdown", className], styles.root);
  const renderers = React.useMemo(() => ({
    p: ({
      children
    }) => /*#__PURE__*/_jsx("p", {
      ...paragraph,
      children: children
    }),
    h1: ({
      children,
      id
    }) => /*#__PURE__*/_jsx("h1", {
      ...h1,
      id: id,
      children: children
    }),
    h2: ({
      children,
      id
    }) => /*#__PURE__*/_jsx("h2", {
      ...h2,
      id: id,
      children: children
    }),
    h3: ({
      children,
      id
    }) => /*#__PURE__*/_jsx("h3", {
      ...h3,
      id: id,
      children: children
    }),
    h4: ({
      children,
      id
    }) => /*#__PURE__*/_jsx("h4", {
      ...h4,
      id: id,
      children: children
    }),
    h5: ({
      children,
      id
    }) => /*#__PURE__*/_jsx("h5", {
      ...h5,
      id: id,
      children: children
    }),
    h6: ({
      children,
      id
    }) => /*#__PURE__*/_jsx("h6", {
      ...h6,
      id: id,
      children: children
    }),
    strong: ({
      children
    }) => /*#__PURE__*/_jsx("strong", {
      ...strong,
      children: children
    }),
    em: ({
      children
    }) => /*#__PURE__*/_jsx("em", {
      children: children
    }),
    del: ({
      children
    }) => /*#__PURE__*/_jsx("del", {
      children: children
    }),
    ul: ({
      children
    }) => /*#__PURE__*/_jsx("ul", {
      ...list,
      children: children
    }),
    ol: ({
      children,
      start
    }) => /*#__PURE__*/_jsx("ol", {
      ...list,
      start: start,
      children: children
    }),
    li: ({
      children,
      id
    }) => /*#__PURE__*/_jsx("li", {
      ...item,
      id: id,
      children: children
    }),
    blockquote: ({
      children
    }) => /*#__PURE__*/_jsx("blockquote", {
      ...quote,
      children: children
    }),
    inlineCode: ({
      children
    }) => /*#__PURE__*/_jsx("code", {
      ...inline,
      children: children
    }),
    code: ({
      children,
      className
    }) => /*#__PURE__*/_jsx(MarkdownCode, {
      diagrams: diagrams,
      lineNumbers: lineNumbers,
      className: className,
      children: children
    }),
    a: ({
      children,
      href,
      title,
      id,
      ...native
    }) => {
      const safe = safeUrl(href, "link", imageOrigins, baseUrl);
      if (!safe) return /*#__PURE__*/_jsx("span", {
        children: children
      });
      return /*#__PURE__*/_jsx("a", {
        ...link,
        href: safe,
        title: title ?? safe,
        id: id,
        "aria-label": native["aria-label"],
        "data-footnote-ref": native["data-footnote-ref"],
        children: children
      });
    },
    img: ({
      src,
      alt,
      title
    }) => {
      const safe = typeof src === "string" ? safeUrl(src, "image", imageOrigins, baseUrl) : undefined;
      return safe ? /*#__PURE__*/_jsx("img", {
        ...image,
        src: safe,
        alt: alt ?? "",
        title: title,
        loading: "lazy",
        referrerPolicy: "no-referrer"
      }) : /*#__PURE__*/_jsx("span", {
        ...imageDescription,
        children: alt ? `Image: ${alt}` : "Image"
      });
    },
    table: ({
      children
    }) => /*#__PURE__*/_jsx("div", {
      ...tableRegion,
      role: "group",
      "aria-label": "Response table",
      tabIndex: 0,
      children: /*#__PURE__*/_jsx("table", {
        ...table,
        children: children
      })
    }),
    thead: ({
      children
    }) => /*#__PURE__*/_jsx("thead", {
      children: children
    }),
    tbody: ({
      children
    }) => /*#__PURE__*/_jsx("tbody", {
      children: children
    }),
    tr: ({
      children
    }) => /*#__PURE__*/_jsx("tr", {
      children: children
    }),
    th: ({
      children,
      align
    }) => /*#__PURE__*/_jsx("th", {
      ...th,
      style: {
        ...th.style,
        textAlign: align === "char" ? "start" : align ?? "start"
      },
      children: children
    }),
    td: ({
      children,
      align
    }) => /*#__PURE__*/_jsx("td", {
      ...td,
      style: {
        ...td.style,
        textAlign: align === "char" ? "start" : align ?? "start"
      },
      children: children
    }),
    hr: () => /*#__PURE__*/_jsx("hr", {
      ...rule
    }),
    input: ({
      checked
    }) => /*#__PURE__*/_jsx("input", {
      type: "checkbox",
      checked: checked,
      disabled: true,
      "aria-label": checked ? "Completed task" : "Incomplete task"
    }),
    section: ({
      children,
      id
    }) => /*#__PURE__*/_jsx("section", {
      id: id,
      children: children
    }),
    sup: ({
      children
    }) => /*#__PURE__*/_jsx("sup", {
      children: children
    }),
    sub: ({
      children
    }) => /*#__PURE__*/_jsx("sub", {
      children: children
    }),
    ...components
    // Style objects contain stable compiled values; renderer identity follows configuration only.
  }), [diagrams, lineNumbers, imageOrigins, baseUrl, components]);
  const plugins = React.useMemo(() => ({
    cjk,
    ...(math ? {
      math: mathPlugin
    } : {})
  }), [math]);
  const urlTransform = React.useCallback((url, key) => safeUrl(url, key === "src" ? "image" : "link", imageOrigins, baseUrl) ?? "", [imageOrigins, baseUrl]);
  return /*#__PURE__*/_jsx("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: /*#__PURE__*/_jsx(Streamdown, {
      mode: streaming ? "streaming" : "static",
      isAnimating: streaming,
      parseIncompleteMarkdown: streaming,
      components: renderers,
      plugins: plugins,
      rehypePlugins: rehypePlugins,
      skipHtml: true,
      urlTransform: urlTransform,
      linkSafety: noLinkModal,
      controls: false,
      children: children
    })
  });
});
//# sourceMappingURL=response-markdown.js.map
