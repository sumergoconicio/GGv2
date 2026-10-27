// Module: PostBody.tsx. Render trusted archive Markdown within the VLAK editorial layout.
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type GalleryImage = { src: string; alt: string };
type Gallery = { images: GalleryImage[]; selected: number };

/** Render one post body with responsive local images and accessible links. */
export function PostBody({ body }: { body: string }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [gallery, setGallery] = useState<Gallery | null>(null);

  function openGallery(trigger: HTMLButtonElement) {
    const buttons = Array.from(
      bodyRef.current?.querySelectorAll<HTMLButtonElement>("[data-article-image]") ?? [],
    );
    const images = buttons.map((button) => {
      const image = button.querySelector("img");
      return { src: image?.getAttribute("src") ?? "", alt: image?.getAttribute("alt") ?? "" };
    });
    if (!images.length) return;
    triggerRef.current = trigger;
    setGallery({ images, selected: buttons.indexOf(trigger) });
  }

  function selectImage(index: number) {
    setGallery((current) =>
      current
        ? { ...current, selected: Math.max(0, Math.min(index, current.images.length - 1)) }
        : null,
    );
  }

  function closeGallery() {
    dialogRef.current?.close();
    setGallery(null);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!gallery) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const frame = requestAnimationFrame(() => {
      dialog
        .querySelectorAll<HTMLElement>("[data-gallery-thumb]")
        [gallery.selected]?.scrollIntoView({ block: "nearest", inline: "center" });
    });
    return () => cancelAnimationFrame(frame);
  }, [gallery]);

  return (
    <>
      <div ref={bodyRef} className="j-prose archive-prose mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ alt, src }) => (
              <button
                type="button"
                data-article-image
                className="article-image-trigger"
                aria-label={alt ? `Open image gallery: ${alt}` : "Open image gallery"}
                onClick={(event) => openGallery(event.currentTarget)}
              >
                <img src={src} alt={alt || ""} loading="lazy" className="h-auto max-w-full" />
              </button>
            ),
            a: ({ href, children }) => {
              const external = href?.startsWith("http");
              return (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {children}
                </a>
              );
            },
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
      <dialog
        ref={dialogRef}
        className="article-lightbox"
        aria-label="Article image gallery"
        onCancel={(event) => {
          event.preventDefault();
          closeGallery();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeGallery();
        }}
        onKeyDown={(event) => {
          if (!gallery) return;
          if (event.key === "ArrowRight") {
            event.preventDefault();
            selectImage(gallery.selected + 1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            selectImage(gallery.selected - 1);
          }
        }}
      >
        {gallery && (
          <>
            <div className="article-lightbox-bar">
              <span>
                {gallery.images.length} {gallery.images.length === 1 ? "image" : "images"}
              </span>
              <button type="button" onClick={closeGallery} aria-label="Close image gallery">
                Close ×
              </button>
            </div>
            <div className="article-lightbox-viewer">
              <div className="article-lightbox-main">
                <button
                  type="button"
                  className="article-lightbox-nav"
                  onClick={() => selectImage(gallery.selected - 1)}
                  disabled={gallery.selected === 0}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <figure>
                  <img
                    src={gallery.images[gallery.selected]?.src}
                    alt={gallery.images[gallery.selected]?.alt}
                  />
                  <figcaption>
                    {gallery.selected + 1} / {gallery.images.length}
                    {gallery.images[gallery.selected]?.alt
                      ? ` · ${gallery.images[gallery.selected]?.alt}`
                      : ""}
                  </figcaption>
                </figure>
                <button
                  type="button"
                  className="article-lightbox-nav"
                  onClick={() => selectImage(gallery.selected + 1)}
                  disabled={gallery.selected === gallery.images.length - 1}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
              {gallery.images.length > 1 && (
                <div className="article-lightbox-thumbs" aria-label="Images in this article">
                  {gallery.images.map((image, index) => (
                    <button
                      key={`${image.src}-${index}`}
                      type="button"
                      data-gallery-thumb
                      aria-label={`Show image ${index + 1} of ${gallery.images.length}${image.alt ? `: ${image.alt}` : ""}`}
                      aria-current={index === gallery.selected ? "true" : undefined}
                      onClick={() => selectImage(index)}
                    >
                      <img src={image.src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
