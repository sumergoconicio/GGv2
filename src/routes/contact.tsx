import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button, Field, FieldLabel, FieldHint, Input, Textarea } from "@noorddev/vlak-react";
import { PageGrid } from "@/components/site/PageGrid";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jeanne Lupton" },
      { name: "description", content: "Commission Jeanne Lupton or ask about prints and licensing." },
      { property: "og:title", content: "Contact Jeanne Lupton" },
      { property: "og:description", content: "Commissions, prints and licensing enquiries." },
    ],
  }),
  component: Contact,
});

const fieldInput = "w-full bg-field";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageGrid last>
      <div className="py-12 lg:px-[var(--j-cell)] lg:py-16">
        <div className="mx-auto max-w-[68ch]">
          <h1 className="text-[2rem]">Contact</h1>
          <p className="mt-6">
            For commissions, prints and licensing, write a few lines about the project and the timeline. I
            reply within three working days. Studio: Van Nelleweg 1, Rotterdam.{" "}
            <strong>Phone:</strong> +31 10 000 0000 <strong>Email:</strong>{" "}
            <a href="mailto:hello@jeanne.studio" className="font-semibold hover:text-active">hello@jeanne.studio</a>
          </p>
          <hr className="my-10 border-t-2 border-hairline" />

          {sent ? (
            <div role="status" className="py-6">
              <p className="font-display text-xl font-semibold">Thank you — your message is ready.</p>
              <p className="mt-2 text-muted-foreground">This preview doesn't deliver messages yet.</p>
              <Button variant="ghost" className="mt-6" onClick={() => setSent(false)}>Write another</Button>
            </div>
          ) : (
            <form
              className="grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="c-name">Your name</FieldLabel>
                  <Input id="c-name" name="name" required autoComplete="name" className={fieldInput} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="c-email">Your email</FieldLabel>
                  <Input id="c-email" name="email" type="email" required autoComplete="email" className={fieldInput} />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="c-subject">Subject</FieldLabel>
                <Input id="c-subject" name="subject" className={fieldInput} />
              </Field>
              <Field>
                <FieldLabel htmlFor="c-message">Your message</FieldLabel>
                <Textarea id="c-message" name="message" rows={8} required className={fieldInput} />
                <FieldHint>Dates, location and how the images will be used help me quote.</FieldHint>
              </Field>
              <div>
                <Button type="submit" variant="primary">Send</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </PageGrid>
  );
}
