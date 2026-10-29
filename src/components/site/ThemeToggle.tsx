import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const set = document.documentElement.dataset["theme"];
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Show both VLAK themes and cross out the inactive choice. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  useEffect(() => setTheme(currentTheme()), []);

  function choose(next: Theme) {
    document.documentElement.dataset["theme"] = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // The theme still changes when browser storage is unavailable.
    }
    setTheme(next);
  }

  function optionClass(option: Theme) {
    const base = "j-meta-small font-semibold transition-colors hover:text-active";
    return theme && theme !== option
      ? `${base} text-muted-foreground line-through decoration-current`
      : `${base} text-foreground`;
  }

  return (
    <div role="group" aria-label="Color theme" className="j-theme-toggle flex items-baseline gap-3">
      <button
        type="button"
        onClick={() => choose("light")}
        aria-pressed={theme === "light"}
        className={optionClass("light")}
      >
        paper
      </button>
      <span aria-hidden="true" className="text-muted-foreground">
        //
      </span>
      <button
        type="button"
        onClick={() => choose("dark")}
        aria-pressed={theme === "dark"}
        className={optionClass("dark")}
      >
        ink
      </button>
    </div>
  );
}
