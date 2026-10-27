// Module: contact.tsx. Redirect the old demo contact path away from false details.
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
  component: () => null,
});
