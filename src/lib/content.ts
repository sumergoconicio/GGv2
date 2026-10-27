// Module: content.ts. Hold the site identity and shared image type.
export type Img = { src: string; w: number; h: number; alt: string };

export const site = {
  name: "Glyphs & Graphs",
  author: "Naveen Srivatsav",
  tagline: "Hypertext wordplay by Naveen Srivatsav",
  url: "https://glyphsandgraphs.com",
} as const;
