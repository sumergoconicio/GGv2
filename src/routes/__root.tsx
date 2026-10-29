import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import layersCss from "../layers.css?url";
import vlakCss from "@noorddev/vlak-react/css?url";
import appCss from "../styles.css?url";
import colorThemesCss from "../color-themes.css?url";
import typographyCss from "../typography.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { DotGrid } from "@/components/site/DotGrid";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-foreground">404</h1>
        <h2 className="j-entry-title mt-4 text-foreground">Page not found</h2>
        <p className="j-meta-small mt-2 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="j-link">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="j-entry-title text-foreground">This page didn't load</h1>
        <p className="j-meta-small mt-2 text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="j-link"
          >
            Try again
          </button>
          <a href="/" className="j-link">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Glyphs & Graphs — Naveen Srivatsav" },
      { name: "description", content: "Essays, travel writing and work by Naveen Srivatsav." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: layersCss },
      { rel: "stylesheet", href: vlakCss },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: "/fonts/site/fonts.css" },
      { rel: "stylesheet", href: typographyCss },
      { rel: "stylesheet", href: colorThemesCss },
      { rel: "icon", href: "/logo-assets/favicon-32.png", type: "image/png", sizes: "32x32" },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Glyphs & Graphs RSS",
        href: "/rss.xml",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <DotGrid />
      <div className="j-frame relative z-[1]">
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
