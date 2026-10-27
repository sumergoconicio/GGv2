// Module: about.tsx. Introduce Naveen and show the supplied illustrated portrait.
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageGrid } from "@/components/site/PageGrid";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Naveen — Glyphs & Graphs" },
      { name: "description", content: "About Naveen Srivatsav and Glyphs & Graphs." },
      { property: "og:title", content: "About Naveen — Glyphs & Graphs" },
    ],
  }),
  component: About,
});

/** Render the owner's introduction with the portrait supplied for this page. */
function About() {
  return (
    <PageGrid last>
      <div className="px-0 py-10 lg:px-[var(--j-cell)] lg:py-16">
        <div className="mx-auto max-w-[68ch]">
          <p className="j-caps">About me</p>
          <h1 className="mt-3 text-[clamp(2.25rem,4vw,4rem)]">Naveen Srivatsav</h1>
        </div>
        <div className="j-prose archive-prose mx-auto mt-12">
          <figure className="mb-8 w-48 sm:float-left sm:mr-8">
            <img
              src="/images/my-notion-face-transparent.png"
              alt="Illustrated portrait of Naveen Srivatsav"
              width="567"
              height="567"
            />
          </figure>
          <p>
            Hello there! <strong>I’m Naveen K Srivatsav. Thinker. Writer. Artist.</strong> Addicted
            to infornography, ultraculture &amp; noosphere non sequiturs.
          </p>
          <p>
            <strong>
              <em>Glyphs &amp; Graphs</em>
            </strong>{" "}
            is my attempt at hypertext wordplay, intentionally amorphous thought experiments
            non-committal to any specific genre or topic.
          </p>
          <p>
            Since I was young, I've had two impossible wishes: <em>1)</em> to know everything about
            everything, and <em>2)</em> to save the world. Even now, I keep trying every single day.
            Trained now as a chemical engineer and a policy analyst, I work as a
            researcher-consultant to design humane systems for a complex world - emphasis on
            "humane” and “systems". You can follow my professional adventures{" "}
            <a
              href="https://www.linkedin.com/in/naveensrivatsav/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
          <p>
            In my spare time, I dabble in creative intersections of words, images and other media. I
            also founded multiple online communities over the years across Facebook and Linkedin.
            Once in a while, when the urge wells up, I write{" "}
            <Link to="/blog">poems and essays</Link> - though not as often as I'd like to.
          </p>
          <p>
            For your convenience, I have collected a set of featured essays here that I’m
            particularly proud of. If you’re not sure where to start,{" "}
            <Link to="/blog/$slug" params={{ slug: "well-hello-there" }}>
              this is as good a place as any
            </Link>
            .
          </p>
          <p>
            If you'd like to develop new ideas together, I'm always happy to help. Feel free to
            reach out via any of the channels listed in the header.
          </p>
        </div>
      </div>
    </PageGrid>
  );
}
