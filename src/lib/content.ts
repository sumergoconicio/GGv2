import whiteSpace from "@/assets/white-space.jpg";
import curves from "@/assets/curves.jpg";
import cubes from "@/assets/cubes.jpg";
import monotonal from "@/assets/monotonal.jpg";
import floatings from "@/assets/floatings.jpg";
import aboveEdge from "@/assets/above-edge.jpg";
import chair from "@/assets/chair.jpg";
import interior from "@/assets/interior.jpg";
import house from "@/assets/house.jpg";
import kitchen from "@/assets/kitchen.jpg";
import lamp from "@/assets/lamp.jpg";
import portrait from "@/assets/portrait.jpg";
import friends from "@/assets/friends.jpg";

export type Img = { src: string; w: number; h: number; alt: string };

export const site = {
  name: "Jeanne Lupton",
  tagline: "An architectural photographer",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Are.na", href: "https://are.na" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const images = {
  portrait: { src: portrait, w: 1600, h: 1072, alt: "Jeanne sitting under a concrete staircase" },
} satisfies Record<string, Img>;

export const categories = ["Buildings", "Houses", "Interiors", "Others"] as const;
export type Category = (typeof categories)[number];

export type Work = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  location: string;
  summary: string;
  cover: Img;
  gallery: Img[];
};

export const works: Work[] = [
  {
    slug: "the-white-space",
    title: "The White Space",
    category: "Buildings",
    year: "2026",
    location: "Lisbon",
    summary:
      "A study of tiled facades under flat winter light. The grid of the cladding becomes the grid of the frame; one window is the only interruption.",
    cover: { src: whiteSpace, w: 1600, h: 1072, alt: "White tiled facade against a pale sky" },
    gallery: [
      { src: curves, w: 1200, h: 800, alt: "Curved white walls with a circular opening" },
      { src: cubes, w: 768, h: 1088, alt: "Stacked white balconies" },
    ],
  },
  {
    slug: "quiet-curves",
    title: "Quiet Curves",
    category: "Buildings",
    year: "2026",
    location: "Porto",
    summary: "Concrete that bends instead of breaking. Two trees for scale, a cut circle for sky.",
    cover: { src: curves, w: 1200, h: 800, alt: "Curved white walls with a circular opening" },
    gallery: [{ src: whiteSpace, w: 1600, h: 1072, alt: "White tiled facade" }],
  },
  {
    slug: "balconies",
    title: "Balconies",
    category: "Buildings",
    year: "2025",
    location: "Valencia",
    summary: "Horizontal slabs stacked like shelves, read from the street at a steep angle.",
    cover: { src: cubes, w: 768, h: 1088, alt: "Stacked white balconies against blue sky" },
    gallery: [{ src: curves, w: 1200, h: 800, alt: "Curved walls" }],
  },
  {
    slug: "monotonal",
    title: "Monotonal",
    category: "Houses",
    year: "2025",
    location: "Faroe Islands",
    summary:
      "Three gables, two in black corrugated steel and one in white. A row of houses reduced to its contrast, photographed on a day without shadows.",
    cover: { src: monotonal, w: 1200, h: 960, alt: "Black and white corrugated gabled houses" },
    gallery: [
      { src: house, w: 1600, h: 1200, alt: "Timber-clad gable over brick" },
      { src: aboveEdge, w: 768, h: 1152, alt: "Curved yellow roof edge" },
    ],
  },
  {
    slug: "the-floatings",
    title: "The Floatings",
    category: "Others",
    year: "2025",
    location: "Lake Bled",
    summary: "A diving tower in fog. Half of the structure is water, half is reflection.",
    cover: { src: floatings, w: 768, h: 1152, alt: "Diving platform in a misty lake" },
    gallery: [{ src: whiteSpace, w: 1600, h: 1072, alt: "White facade" }],
  },
  {
    slug: "above-the-edge",
    title: "Above the Edge",
    category: "Buildings",
    year: "2025",
    location: "Copenhagen",
    summary: "A golden slatted canopy cut against white sky. Most of the frame is left empty on purpose.",
    cover: { src: aboveEdge, w: 768, h: 1152, alt: "Curved yellow slatted roof edge" },
    gallery: [{ src: cubes, w: 768, h: 1088, alt: "White balconies" }],
  },
  {
    slug: "to-sit-exhibition",
    title: "To/Sit Exhibition",
    category: "Interiors",
    year: "2024",
    location: "Eindhoven",
    summary: "Catalogue images for an exhibition on the chair as architecture at human scale.",
    cover: { src: chair, w: 1200, h: 832, alt: "Black molded armchair in a white room" },
    gallery: [{ src: interior, w: 1200, h: 800, alt: "Exhibition room with shelving" }],
  },
  {
    slug: "interior-showcase",
    title: "Interior Showcase 2024",
    category: "Interiors",
    year: "2024",
    location: "Rotterdam",
    summary: "A reading room built from cardboard shelving, photographed before opening day.",
    cover: { src: interior, w: 1200, h: 800, alt: "Bright room with cardboard shelving and wooden stools" },
    gallery: [{ src: chair, w: 1200, h: 832, alt: "Black armchair" }],
  },
  {
    slug: "timber-gable",
    title: "Timber Gable",
    category: "Houses",
    year: "2024",
    location: "Utrecht",
    summary: "A family house with a timber upper volume set on a brick plinth. Symmetry as a starting point.",
    cover: { src: house, w: 1600, h: 1200, alt: "Timber-clad gable house over a red brick ground floor" },
    gallery: [{ src: monotonal, w: 1200, h: 960, alt: "Corrugated houses" }],
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  category: string;
  comments: number;
  cover: Img;
  excerpt: string;
  body: string[];
  quote?: string;
};

export const posts: Post[] = [
  {
    slug: "new-home-new-life",
    title: "New home, new life, new inspirations",
    date: "2026-09-08",
    category: "Life",
    comments: 3,
    cover: { src: kitchen, w: 864, h: 1152, alt: "Long bright galley kitchen opening onto a garden" },
    excerpt:
      "After six years in a studio flat I finally have a kitchen long enough to walk through. The light comes in from the garden end, and I have started to plan my days around it.",
    body: [
      "After six years in a studio flat I finally have a kitchen long enough to walk through. The light comes in from the garden end, and I have started to plan my days around it.",
      "Moving made me look at my own rooms the way I look at a client's building: where the light lands at nine, at noon, at four. Which wall is quiet. Which corner wants a chair.",
      "I am keeping the walls bare for now. The first photographs that go up will be ones I have not taken yet.",
    ],
    quote: "A room tells you what it wants if you stand in it long enough.",
  },
  {
    slug: "lets-take-a-break",
    title: "Let's take a break",
    date: "2026-08-28",
    category: "Studio",
    comments: 5,
    cover: { src: lamp, w: 1600, h: 1008, alt: "Black desk lamp against a sage green wall" },
    excerpt:
      "The studio is closed for two weeks in September. No shoots, no edits, no email. Just a lamp, a desk and a stack of books I bought and never opened.",
    body: [
      "The studio is closed for two weeks in September. No shoots, no edits, no email. Just a lamp, a desk and a stack of books I bought and never opened.",
      "Every year I resist this and every year it is the most productive thing I do. The ideas for next season always arrive when I stop looking for them.",
    ],
  },
  {
    slug: "its-time-to-fly",
    title: "It's time to fly",
    date: "2026-08-19",
    category: "Travel",
    comments: 2,
    cover: { src: curves, w: 1200, h: 800, alt: "Curved white walls with a circular opening" },
    excerpt:
      "Packing for Porto: two bodies, three lenses, one tripod and far too many notebooks. The brief is a museum that has not opened yet.",
    body: [
      "Packing for Porto: two bodies, three lenses, one tripod and far too many notebooks. The brief is a museum that has not opened yet.",
      "Photographing an empty building is a strange kind of portrait. There are no people to direct, only the sun, and the sun does not take notes.",
      "I will be posting the first frames here when the embargo lifts.",
    ],
    quote: "Arrive early, leave late. The middle of the day belongs to tourists.",
  },
  {
    slug: "my-good-friends",
    title: "My good friends",
    date: "2026-08-02",
    category: "People",
    comments: 8,
    cover: { src: friends, w: 1200, h: 1200, alt: "Smiling woman in a light blue shirt in a cafe" },
    excerpt:
      "I rarely photograph people. This summer I made an exception for the friends who carried tripods, held reflectors and waited in the cold with me.",
    body: [
      "I rarely photograph people. This summer I made an exception for the friends who carried tripods, held reflectors and waited in the cold with me.",
      "These are the portraits I owe them.",
    ],
  },
];

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
