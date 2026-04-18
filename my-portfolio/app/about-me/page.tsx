// app/about-me/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

import LH44 from "@/public/photos/LH44.jpg";
import mclaren from "@/public/photos/mclaren.jpg";
import suzuka from "@/public/photos/suzuka.jpg";

type Polaroid = { src: string; alt: string; placeJA: string; date: string };

function SectionHeader({ title, jp }: { title: string; jp: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1.5 h-1.5 rounded-full bg-[#BEE3D2] shrink-0" />
      <h2 className="font-serif text-xl font-bold tracking-tight flex items-center gap-2">
        {title}
        <span aria-hidden className="h-[2px] w-4 bg-neutral-300" />
        <small lang="ja" className="text-sm font-medium text-neutral-500">{jp}</small>
      </h2>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-[#E6E4DF] bg-white ${className}`}>
      {children}
    </div>
  );
}

function PolaroidCard({ src, alt, placeJA, date }: Polaroid) {
  return (
    <figure className="rounded-[18px] bg-white border border-[#E6E4DF] shadow-sm p-2">
      <div className="relative rounded-[10px] overflow-hidden bg-[#F5F4F1] aspect-[4/3]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
      </div>
      <figcaption className="px-1 pt-2 pb-1 text-center text-xs text-neutral-600 space-y-0.5">
        <span lang="ja" className="block text-neutral-400">{placeJA}</span>
        <span className="block">{alt}</span>
        <span className="text-neutral-400">{date}</span>
      </figcaption>
    </figure>
  );
}

export default function AboutMePage() {
  const polaroids: Polaroid[] = [
    { src: "/cappadocia-balloon.jpg", alt: "Cappadocia balloons at sunrise", placeJA: "カッパドキア（トルコ）", date: "2025-08-10" },
    { src: "/hagia-sofia.jpg", alt: "Hagia Sophia", placeJA: "アヤソフィア（イスタンブール）", date: "2025-08-05" },
    { src: "/banff-lake.jpg", alt: "Spirit Island", placeJA: "スピリットアイランド（カナダ）", date: "2023-07-03" },
  ];

  const foods = ["Coffee", "Matcha latte", "Butter chicken", "Pasta", "Biryani", "Sushi", "Ramen", "Garlic butter noodles"];
  const cafes = ["Dineen Coffee", "Tsujiri Waterloo", "Neo Coffee Bar"];

  const readBooks = [
    "Atomic Habits — James Clear",
    "Deep Work — Cal Newport",
    "The Bell Jar — Sylvia Plath",
    "Frankenstein — Mary Shelley",
    "Meditations — Marcus Aurelius",
    "The Catcher in the Rye — J.D. Salinger",
  ];
  const planBooks = [
    "The Myth of Sisyphus — Albert Camus",
    "The Pragmatic Programmer — Hunt & Thomas",
    "Clean Architecture — Robert C. Martin",
    "A Room of One's Own — Virginia Woolf",
    "Crime and Punishment — Fyodor Dostoevsky",
  ];

  const articles = [
    {
      title: "The Waterloo Protocol: A Guide to Focused Engineering",
      date: "Apr 2026",
      tag: "Productivity",
      summary: "A spatial and digital system for high-output learning as an EE student — matching environment to cognitive load, digital hygiene, and the anti-group-study manifesto.",
      href: "/articles/waterloo-study-spots",
    }
  ];

  const tagColor: Record<string, string> = {
    Firmware: "bg-[#BEE3D2]/40 text-[#1B5E40]",
    "PCB Design": "bg-[#D9E8F6]/60 text-[#1B3A5E]",
    Manufacturing: "bg-[#F6DDE2]/60 text-[#5E1B2E]",
    Productivity: "bg-[#F6F0DE]/80 text-[#5E4A1B]",
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] text-sm">
          <span aria-hidden>←</span>
          <span>Back</span>
          <span lang="ja" className="text-neutral-400 ml-1 text-xs">戻る</span>
        </Link>
      </div>

      <div className="space-y-8">

        {/* Intro */}
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight mb-1">More about me</h1>
          <p className="text-sm text-neutral-500">Music, food, books, F1, climbing, setup, and places I've been.</p>
        </div>

        {/* Music */}
        <section>
          <SectionHeader title="Songs I'm looping" jp="音楽" />
          <div className="grid gap-4 lg:grid-cols-2 items-stretch">
            {/* Tracklist */}
            <Card className="p-4 flex flex-col justify-between">
              <ul className="divide-y divide-[#F0EEE9]">
                {[
                  { artist: "Wave to Earth", song: "Love." },
                  { artist: "Keshi",         song: "Touch" },
                  { artist: "Jung Kook",      song: "Still With You" },
                  { artist: "New Jeans",      song: "Zero" },
                  { artist: "Faye Webster",   song: "She Won't Go Away" },
                  { artist: "Beabadoobee",    song: "Tired" },
                  { artist: "LE SSERAFIM",    song: "Crazy" },
                  { artist: "Joji",           song: "Afterthought" },
                ].map(({ artist, song }, i) => (
                  <li key={song} className="flex items-center gap-3 py-2.5">
                    <span className="text-[10px] text-neutral-300 w-4 shrink-0 text-right tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-sm text-neutral-800 font-medium">{song}</span>
                    <span className="text-xs text-neutral-400 shrink-0">{artist}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-neutral-400 mt-3 pt-3 border-t border-[#F0EEE9]">
                What's been on repeat lately
              </p>
            </Card>

            {/* Spotify embed — no extra padding, iframe fills the card */}
            <Card className="overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-4 pt-3 pb-2 shrink-0">
                <div className="text-xs text-neutral-500 flex items-center gap-2">
                  <span lang="ja">プレイリスト</span>
                  <span aria-hidden className="inline-block h-[1px] w-4 bg-[#E6E4DF]" />
                  <span>Matcha.cs</span>
                </div>
                <span className="text-[10px] text-neutral-400 tracking-wide">Spotify</span>
              </div>
              <div aria-hidden className="h-[1px] w-full bg-[#E6E4DF] shrink-0" />
              <iframe
                title="Aayan playlist"
                className="block w-full flex-1 min-h-[352px]"
                src="https://open.spotify.com/embed/playlist/6iB4dIWUIPsPdUvIII4FJu"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ border: 0 }}
              />
            </Card>
          </div>
        </section>

        {/* Articles */}
        <section>
          <SectionHeader title="Articles" jp="記事" />
          <div className="grid gap-3 sm:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.title} href={a.href} className="group block">
                <Card className="p-4 h-full flex flex-col gap-2 hover:border-neutral-300 transition-colors">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tagColor[a.tag]}`}>{a.tag}</span>
                    <span className="text-[10px] text-neutral-400">{a.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-neutral-600 transition-colors">{a.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed flex-1">{a.summary}</p>
                  <span className="text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors">Read →</span>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Books + Food + Setup — dense 3-col bento */}
        <div className="grid gap-4 lg:grid-cols-3">

          {/* Books */}
          <section className="lg:col-span-1">
            <SectionHeader title="Books" jp="本" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Card className="p-4">
                <h3 className="text-neutral-400 text-[10px] uppercase tracking-widest mb-2">Read <span lang="ja" className="normal-case">読了</span></h3>
                <ul className="space-y-1 text-xs text-neutral-700">
                  {readBooks.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </Card>
              <Card className="p-4">
                <h3 className="text-neutral-400 text-[10px] uppercase tracking-widest mb-2">Want to read <span lang="ja" className="normal-case">読みたい</span></h3>
                <ul className="space-y-1 text-xs text-neutral-700">
                  {planBooks.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </Card>
            </div>
          </section>

          {/* Food + stickers */}
          <section className="lg:col-span-1">
            <SectionHeader title="Food & cafés" jp="食べ物" />
            <div className="space-y-3">
              <Card className="p-4">
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Always coming back to</p>
                <ul className="flex flex-wrap gap-1.5">
                  {foods.map((f) => <li key={f} className="text-[11px] rounded-full border border-[#E6E4DF] px-2.5 py-1">{f}</li>)}
                </ul>
              </Card>
              <Card className="p-4">
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Cafés</p>
                <ul className="space-y-1">
                  {cafes.map((c) => <li key={c} className="text-sm text-neutral-700">{c}</li>)}
                </ul>
              </Card>
              <div className="flex items-end justify-center gap-4 py-1">
                <img src="/stickers/matcha.png" alt="" aria-hidden className="h-28 w-auto object-contain drop-shadow-sm" />
                <img src="/stickers/redbull.png" alt="" aria-hidden className="h-24 w-auto object-contain drop-shadow-sm" />
              </div>
            </div>
          </section>

          {/* Setup + Colors */}
          <section className="lg:col-span-1">
            <SectionHeader title="Setup" jp="ツール" />
            <Card className="overflow-hidden mb-4">
              <dl className="divide-y divide-[#E6E4DF]">
                {[
                  ["Laptop", "ThinkPad T14s — i7 / 32 GB"],
                  ["Keyboard", "Womier WK61"],
                  ["Mouse", "Logitech MX Master 3S"],
                  ["Phone", "iPhone 15"],
                  ["Headphones", "Sony WH-1000XM4"],
                  ["Monitor", "Samsung S24F350"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center px-4 py-2 gap-4">
                    <dt className="text-[10px] uppercase tracking-widest text-neutral-400 shrink-0">{k}</dt>
                    <dd className="text-xs text-neutral-700 text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <SectionHeader title="Colors" jp="色" />
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: "Vanilla", hex: "#F0E7D5" },
                { name: "Sage",    hex: "#B8C4BB" },
                { name: "Warm Gray", hex: "#D3CFC7" },
              ].map(({ name, hex }) => (
                <div key={hex} className="rounded-lg overflow-hidden border border-[#E6E4DF]">
                  <div className="h-14" style={{ backgroundColor: hex }} />
                  <div className="p-1.5 text-center">
                    <div className="text-[10px] text-neutral-600 font-medium">{name}</div>
                    <div className="text-[9px] text-neutral-400">{hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* F1 */}
        <section>
          <SectionHeader title="Formula 1" jp="F1" />
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="overflow-hidden">
              <figure>
                <div className="relative aspect-[3/2]">
                  <Image src={LH44} alt="Ferrari — Lewis Hamilton #44" fill placeholder="blur" className="object-cover" sizes="33vw" />
                </div>
                <figcaption className="p-3">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">Current favourite</p>
                  <p className="text-sm font-medium mt-0.5">Ferrari — LH44</p>
                </figcaption>
              </figure>
            </Card>
            <Card className="overflow-hidden">
              <figure>
                <div className="relative aspect-[3/2]">
                  <Image src={mclaren} alt="McLaren MP4/4 — Prost/Senna era" fill placeholder="blur" className="object-cover object-center" sizes="33vw" />
                </div>
                <figcaption className="p-3">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">Historical favourite</p>
                  <p className="text-sm font-medium mt-0.5">McLaren (Prost/Senna era)</p>
                </figcaption>
              </figure>
            </Card>
            <Card className="overflow-hidden">
              <figure>
                <div className="relative aspect-[3/2]">
                  <Image src={suzuka} alt="Suzuka Circuit under cherry blossoms" fill placeholder="blur" className="object-cover" sizes="33vw" />
                </div>
                <figcaption className="p-3">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">Favourite track</p>
                  <p className="text-sm font-medium mt-0.5">Suzuka — Japan</p>
                  <p className="text-xs text-neutral-400 mt-0.5">Fast esses, 130R, spring blossoms.</p>
                </figcaption>
              </figure>
            </Card>
          </div>
        </section>

        {/* Climbing + Photo album side by side */}
        <div className="grid gap-4 lg:grid-cols-2">
          <section>
            <SectionHeader title="Climbing & gym" jp="クライミング" />
            <div className="grid gap-3 sm:grid-cols-2">
              <Card className="p-4 space-y-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">Bouldering</p>
                  <p className="text-sm font-medium mt-0.5">Grand River Rocks — Kitchener</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">Level</p>
                  <p className="text-sm mt-0.5">V3–V4, projecting V5</p>
                </div>
                <p className="text-xs text-neutral-500">Every route is a puzzle you solve with your body.</p>
              </Card>
              <Card className="p-4 space-y-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">Gym</p>
                  <p className="text-sm font-medium mt-0.5">PAC — UW Athletics</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">Split</p>
                  <p className="text-sm mt-0.5">Push / Pull / Legs · 4–5× weekly</p>
                </div>
                <p className="text-xs text-neutral-500">Keeps my head clear when school and projects stack up.</p>
              </Card>
            </div>
          </section>

          <section>
            <SectionHeader title="Photo album" jp="アルバム" />
            <div className="grid gap-3 grid-cols-3">
              {polaroids.map((p) => <PolaroidCard key={p.src} {...p} />)}
            </div>
          </section>
        </div>

        {/* Calendar */}
        <section>
          <SectionHeader title="Weekly plan" jp="スケジュール" />
          <Card className="overflow-hidden">
            <iframe
              title="Weekly calendar"
              src="https://calendar.google.com/calendar/embed?src=72c3cf2d94c9f70145ad832708050e49a29ce393ac5eaa30e86e0c8f3ce2dbd1%40group.calendar.google.com&ctz=America%2FToronto"
              width="100%"
              height="480"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Card>
        </section>

        <div className="pt-1 text-center">
          <Link href="/" className="inline-flex items-center gap-2 py-2 px-6 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] transition-colors text-sm">
            <span aria-hidden>←</span>
            <span>Return to main page</span>
            <span lang="ja" className="text-neutral-400 ml-1 text-xs">ホームページへ</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
