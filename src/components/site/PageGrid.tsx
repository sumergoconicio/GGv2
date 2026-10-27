import type { ReactNode } from "react";

/**
 * The 12-column Swiss frame used by every page:
 *   rail (3) | main (7) | aside (2)   at xl
 *   rail (3) | main (9)               at lg (aside folds under main)
 *   stacked                            below lg
 * Hairlines sit on the column edges, Jeanne-style.
 */
export function PageGrid({
  rail,
  children,
  aside,
  wide = false,
  last = false,
}: {
  rail?: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
  wide?: boolean;
  last?: boolean;
}) {
  const mainSpan = wide ? "lg:col-span-9" : "lg:col-span-9 xl:col-span-7";
  return (
    <section className={`grid lg:grid-cols-12 ${last ? "" : "border-b border-hairline"}`}>
      <div className="lg:col-span-3 lg:pr-[var(--j-cell)]">{rail}</div>
      <div className={`min-w-0 lg:border-l lg:border-hairline ${mainSpan} ${!wide ? "xl:border-r" : ""}`}>{children}</div>
      {!wide && <div className="lg:col-span-9 lg:col-start-4 xl:col-span-2 xl:col-start-auto">{aside}</div>}
    </section>
  );
}
