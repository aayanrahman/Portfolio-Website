// components/Personal.tsx
import React from "react";
import Image from "next/image";
import Section from "./Section";

type Interest = { name: string; link?: string };
type Show = { title: string; kind: "Anime" | "K-Drama" | "Show"; status: "Watched" | "Planning"; rating?: 1|2|3|4|5 };

const interests: Interest[] = [
  { name: "Bouldering" },
  { name: "Gym" },
  { name: "Matcha" },
  { name: "MUJI design" },
  { name: "Formula 1" }, // F1 added
  { name: "Simple recipes" },
  { name: "Music", link: "https://open.spotify.com/user/s3hdzjbxy1l2yahinrrd1jp44?si=18d03fe4dfeb4772" },
];

// TO DO: Fix the shows list to reflect stuff you actually watch 
// Talk about your favorite songs maybe? drop the spotify 

const shows: Show[] = [
  // Watched
  { title: "Your Name.", kind: "Anime", status: "Watched", rating: 5 },
  { title: "A Silent Voice", kind: "Anime", status: "Watched", rating: 5 },
  { title: "Attack on Titan", kind: "Anime", status: "Watched", rating: 5 },
  { title: "Haikyuu!!", kind: "Anime", status: "Watched", rating: 4 },
  { title: "Start-Up", kind: "K-Drama", status: "Watched", rating: 4 },
  { title: "Reply 1988", kind: "K-Drama", status: "Watched", rating: 5 },

  // Planning
  { title: "Cowboy Bebop", kind: "Anime", status: "Planning" },
  { title: "Monster", kind: "Anime", status: "Planning" },
  { title: "My Mister", kind: "K-Drama", status: "Planning" },
];

function RatingDots({ value = 0 }: { value?: number }) {
  return (
    <span aria-label={`${value}/5`} className="ml-2 inline-flex gap-1 align-middle">
      {[1,2,3,4,5].map(n => (
        <span
          key={n}
          className={`inline-block h-[6px] w-[6px] rounded-full ${n <= (value ?? 0) ? "bg-neutral-900 dark:bg-neutral-200" : "bg-neutral-300 dark:bg-neutral-700"}`}
        />
      ))}
    </span>
  );
}

export default function Personal() {
  return (
    <Section id="personal" title="Personal" >
      {/* Intro */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300">
        Outside class I like to make, climb, lift, drink matcha, and keep things simple. 
        <span className="ml-2 text-neutral-400" aria-hidden>☆⋆｡𖦹°‧★ᯓ★</span>
      </p>

      {/* Interests chips */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {interests.map(({ name, link }) => (
          <li key={name}>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs rounded-full border border-[#E6E4DF] px-3 py-1.5 hover:bg-[#F5F4F1]"
              >
                {name}
              </a>
            ) : (
              <span className="text-xs rounded-full border border-[#E6E4DF] px-3 py-1.5">
                {name}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Matcha mini-gallery (MUJI style: framed, hairline borders) */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          { src: "/matcha-1.jpg", alt: "抹茶ラテ — matcha latte" },
          { src: "/matcha-2.jpg", alt: "抹茶 — quiet morning" },
          { src: "/matcha-3.jpg", alt: "抹茶 — workspace" },
        ].map((img) => (
          <figure key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6E4DF] bg-[#F5F4F1]">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
          </figure>
        ))}
      </div>

      {/* Watchlist (compact, calm) */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#E6E4DF] p-4 bg-white dark:bg-neutral-950">
          <h3 className="text-sm font-medium text-neutral-500 flex items-center gap-2">
            Watched <span aria-hidden className="h-[1px] w-4 bg-[#E6E4DF]" />
            <small lang="ja" className="text-neutral-500">観た作品</small>
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {shows.filter(s => s.status==="Watched").map((s)=>(
              <li key={s.title} className="flex items-center justify-between">
                <span className="text-neutral-800 dark:text-neutral-200">{s.title}</span>
                {s.rating ? <RatingDots value={s.rating} /> : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#E6E4DF] p-4 bg-white dark:bg-neutral-950">
          <h3 className="text-sm font-medium text-neutral-500 flex items-center gap-2">
            Planning <span aria-hidden className="h-[1px] w-4 bg-[#E6E4DF]" />
            <small lang="ja" className="text-neutral-500">これから</small>
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {shows.filter(s => s.status==="Planning").map((s)=>(
              <li key={s.title} className="flex items-center justify-between">
                <span className="text-neutral-800 dark:text-neutral-200">{s.title}</span>
                <span className="text-xs text-neutral-500">{s.kind}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Minimal photo-spot list for future aesthetic shots */}
      <div className="mt-8 rounded-2xl border border-[#E6E4DF] p-4 bg-white dark:bg-neutral-950">
        <h3 className="text-sm font-medium text-neutral-500">
          Photo spots <small lang="ja" className="ml-2 text-neutral-500">撮影メモ</small>
        </h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-neutral-700 dark:text-neutral-300">
          <li>MUJI Ginza, Tokyo — calm concrete + wood</li>
          <li>Daikanyama T-Site — book stacks & soft light</li>
          <li>Kyoto back alleys — muted signage, stone</li>
          <li>Kamakura beach — foggy mornings, film look</li>
          <li>Toronto: <span className="text-neutral-600">STACKT Market, AGO stairs, Union Station tiles</span></li>
          <li>Waterloo: E7 glass bridges, DC library nooks</li>
        </ul>
      </div>

      {/* “More about me” link */}
      <div className="mt-6">
        <a href="/about-me" className="text-sm font-medium hover:underline">
          More about me →
        </a>
      </div>
    </Section>
  );
}
