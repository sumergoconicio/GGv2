import type { Img } from "@/lib/content";

export function Figure({
  img,
  caption,
  className = "",
  eager = false,
  ratio,
}: {
  img: Img;
  caption?: string;
  className?: string;
  eager?: boolean;
  ratio?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden bg-muted" style={ratio ? { aspectRatio: ratio } : undefined}>
        <img
          src={img.src}
          alt={img.alt}
          width={img.w}
          height={img.h}
          loading={eager ? "eager" : "lazy"}
          className={`block w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${ratio ? "h-full object-cover" : "h-auto"}`}
        />
      </div>
      {caption && <figcaption className="j-caps mt-4 text-right">{caption}</figcaption>}
    </figure>
  );
}
