// Module: SiteFooter.tsx. Close the site with author attribution and a return-to-top link.
import { ArrowUp } from "lucide-react";
import { site } from "@/lib/content";

/** Render the closing footer and an accessible native jump to the site header. */
export function SiteFooter() {
  return (
    <footer className="j-meta j-footer">
      <div className="j-rule grid gap-8 py-10 lg:grid-cols-12 lg:py-12">
        <div className="space-y-3 lg:col-span-9">
          <p className="flex flex-wrap items-center gap-2">
            <a
              href="https://creativecommons.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Creative Commons"
              className="inline-flex shrink-0"
            >
              <img src="/images/creative-commons.svg" alt="" width="24" height="24" />
            </a>
            <span>
              {new Date().getFullYear()} {site.author}
            </span>
          </p>
          <p>Written with love from Utrecht, Netherlands.</p>
          <p>
            Built with the{" "}
            <a
              href="https://vlak.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-active"
            >
              VLAK design system
            </a>
            .
          </p>
        </div>
        <a
          href="#top"
          className="j-meta-nav inline-flex items-center gap-2 self-start justify-self-start underline underline-offset-4 hover:text-active lg:col-span-3 lg:justify-self-end"
        >
          <ArrowUp size={24} aria-hidden="true" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
