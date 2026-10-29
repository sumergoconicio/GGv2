// Module: works.index.tsx. Present selected work by year.
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { PageGrid } from "@/components/site/PageGrid";
import { publications } from "@/lib/publications";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: [
      { title: "Work — Glyphs & Graphs" },
      {
        name: "description",
        content:
          "Projects and publications by Naveen Srivatsav, including AskClaire and the BII Climate Risk Management Toolkit.",
      },
      { property: "og:title", content: "Work — Glyphs & Graphs" },
    ],
  }),
  component: Work,
});

const projects = [
  { year: 2026, kind: "askclaire" },
  { year: 2025, kind: "bii" },
  { year: 2019, kind: "state-of-tech" },
  { year: 2019, kind: "bxt-bootcamp" },
  {
    year: 2017,
    kind: "antarctica",
    title: "International Antarctic Expedition",
    description: "A photographic record and eight-part journal from the expedition.",
    image: "/images/antarctica-splash.webp",
    imageAlt: "A small expedition boat beneath Antarctic cliffs and glaciers",
    slug: "iae2017",
    readSlug: "getting-there",
  },
] as const;
const years = [
  ...new Set([
    ...projects.map((project) => project.year),
    ...publications.map((publication) => publication.year),
  ]),
].sort((a, b) => b - a);

const isPdf = (href: string) => href.toLowerCase().endsWith(".pdf");

/** Render projects and research in a consistent year-grouped portfolio. */
function Work() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const [pdf, setPdf] = useState<{ href: string; title: string } | null>(null);

  function openPdf(
    event: MouseEvent<HTMLAnchorElement>,
    publication: { href: string; title: string },
  ) {
    if (!isPdf(publication.href)) return;
    event.preventDefault();
    triggerRef.current = event.currentTarget;
    setPdf({ href: publication.href, title: publication.title });
  }

  function closePdf() {
    dialogRef.current?.close();
    setPdf(null);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (pdf && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }, [pdf]);

  return (
    <>
      <PageGrid
        wide
        last
        rail={
          <div className="py-10 lg:py-16">
            <h1 className="j-caps">Work</h1>
            <p className="mt-5 max-w-[30ch] text-muted-foreground">
              Selected projects, research, and writing.
            </p>
            <nav aria-label="Work years" className="mt-8">
              <p className="j-caps mb-3">Years</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:block lg:space-y-2">
                {years.map((year) => (
                  <li key={year}>
                    <a className="j-link j-meta-nav" href={`#year-${year}`}>
                      {year}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        }
      >
        {years.map((year) => (
          <section key={year} id={`year-${year}`} aria-labelledby={`heading-${year}`}>
            <div className="border-b border-hairline px-0 py-5 lg:px-[var(--j-cell)]">
              <h2 id={`heading-${year}`} className="j-year">
                {year}
              </h2>
            </div>
            {projects
              .filter((project) => project.year === year)
              .map((project) => (
                <article
                  key={project.kind}
                  className="border-b border-hairline px-0 py-10 lg:px-[var(--j-cell)] lg:py-14"
                >
                  {project.kind === "askclaire" ? (
                    <>
                      <p className="j-caps text-muted-foreground">UtrechtInc</p>
                      <h3 className="work-entry-title">AskClaire</h3>
                      <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:items-center md:gap-10">
                        <img
                          src="/images/askclaire-origami.webp"
                          alt="Abstract folded-paper portrait of a curly-haired reader in green"
                          width="2048"
                          height="2048"
                          loading="eager"
                          className="mx-auto h-auto w-full max-w-[30rem] md:mx-0"
                        />
                        <div className="max-w-[50ch]">
                          <p className="work-entry-lead">AskClaire helps you get to the source.</p>
                          <p className="mt-4">
                            An AI workspace that brings sources, notes, conversations, and ideas
                            together for long-term knowledge work.
                          </p>
                          <p className="mt-4">
                            Capture, map, read, distill, verify, and write while staying in control
                            of the thinking.
                          </p>
                          <p className="mt-5 font-semibold">Watch this space for updates!</p>
                        </div>
                      </div>
                    </>
                  ) : project.kind === "bii" ? (
                    <>
                      <p className="j-caps text-muted-foreground">
                        British International Investment
                      </p>
                      <h3 className="work-entry-title">Climate Risk Management Toolkit</h3>
                      <p className="work-entry-lead">
                        Practical guidance for financial institutions integrating climate risk into
                        governance, strategy, lending, and reporting.
                      </p>
                      <p className="mt-4 max-w-[65ch]">
                        Eleven sections organise the guidance by role and stage of the credit cycle.
                      </p>
                      <a
                        href="https://fintoolkit.bii.co.uk/climate-risk-management-toolkit/section-0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="j-link mt-6 inline-block"
                      >
                        Explore toolkit ↗
                      </a>
                    </>
                  ) : project.kind === "state-of-tech" ? (
                    <>
                      <p className="j-caps text-muted-foreground">
                        PricewaterhouseCoopers Netherlands
                      </p>
                      <h3 className="work-entry-title">State of Tech</h3>
                      <p className="work-entry-lead">
                        A PwC and Startupbootcamp tour of emerging technologies and their
                        implications across more than 25 sectors, from supply chains to
                        neuroscience.
                      </p>
                      <p className="mt-4 max-w-[65ch]">
                        I researched the trends and presented the outlook to international
                        audiences, including executives and industry associations.
                      </p>
                    </>
                  ) : project.kind === "bxt-bootcamp" ? (
                    <>
                      <p className="j-caps text-muted-foreground">
                        PricewaterhouseCoopers Netherlands
                      </p>
                      <h3 className="work-entry-title">BXT Bootcamp</h3>
                      <p className="work-entry-lead">
                        A digital upskilling programme introducing PwC colleagues across lines of
                        service to the Google Sprint process.
                      </p>
                      <p className="mt-4 max-w-[65ch]">
                        I helped design and deliver the curriculum, wrote its copy, and contributed
                        to the digital learning platform.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="j-caps text-muted-foreground">Antarctica</p>
                      <h3 className="work-entry-title">
                        <Link
                          to="/works/$slug"
                          params={{ slug: project.slug }}
                          className="hover:text-active"
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <Link
                        to="/works/$slug"
                        params={{ slug: project.slug }}
                        className="mb-7 block"
                      >
                        <img src={project.image} alt={project.imageAlt} className="h-auto w-full" />
                      </Link>
                      <p className="work-entry-lead">{project.description}</p>
                      <Link
                        to="/works/iae2017/$slug"
                        params={{ slug: project.readSlug }}
                        className="j-link mt-6 inline-block"
                      >
                        Read photoblog →
                      </Link>
                    </>
                  )}
                </article>
              ))}
            {publications
              .filter((publication) => publication.year === year)
              .map((publication) => (
                <article
                  key={publication.title}
                  className="border-b border-hairline px-0 py-10 lg:px-[var(--j-cell)] lg:py-14"
                >
                  <p className="j-caps text-muted-foreground">{publication.publisher}</p>
                  <h3 className="work-entry-title">
                    <a
                      href={publication.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-active"
                      onClick={(event) => openPdf(event, publication)}
                    >
                      {"displayTitle" in publication ? publication.displayTitle : publication.title}
                    </a>
                  </h3>
                  {"image" in publication && (
                    <img
                      src={publication.image}
                      alt={publication.imageAlt}
                      width="651"
                      height="325"
                      loading="lazy"
                      className="mb-7 h-auto w-full"
                    />
                  )}
                  <p className="work-entry-lead">{publication.description}</p>
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="j-link mt-6 inline-block"
                    onClick={(event) => openPdf(event, publication)}
                  >
                    {publication.action}
                    <span className="ml-1" aria-hidden="true">
                      {isPdf(publication.href) ? "→" : "↗"}
                    </span>
                  </a>
                </article>
              ))}
          </section>
        ))}
      </PageGrid>
      <dialog
        ref={dialogRef}
        className="pdf-reader"
        aria-labelledby="pdf-reader-title"
        onCancel={(event) => {
          event.preventDefault();
          closePdf();
        }}
      >
        {pdf && (
          <>
            <div className="pdf-reader-bar">
              <span id="pdf-reader-title" className="pdf-reader-title">
                {pdf.title}
              </span>
              <div className="pdf-reader-actions">
                <a href={pdf.href} target="_blank" rel="noopener noreferrer">
                  Open PDF ↗
                </a>
                <button type="button" onClick={closePdf} aria-label="Close PDF reader">
                  Close ×
                </button>
              </div>
            </div>
            <iframe title={pdf.title} src={pdf.href} className="pdf-reader-frame" />
          </>
        )}
      </dialog>
    </>
  );
}
