// app/about-me/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";

// Static imports for F1 media (blur + no CLS)
import LH44 from "@/public/photos/LH44.jpg";
import mclaren from "@/public/photos/mclaren.jpg";
import suzuka from "@/public/photos/suzuka.jpg";

type Polaroid = { src: string; alt: string; placeJA: string; date: string };

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-[#E6E4DF] bg-white dark:bg-neutral-950 ${className}`}>
      {children}
    </div>
  );
}

function PolaroidCard({ src, alt, placeJA, date }: Polaroid) {
  return (
    <figure className="rounded-[18px] bg-white border border-[#E6E4DF] shadow-sm p-2">
      <div className="relative rounded-[10px] overflow-hidden bg-[#F5F4F1]">
        <div className="relative aspect-[4/3]">
          <Image 
            src={src} 
            alt={alt} 
            fill 
            className="object-cover" 
            sizes="(max-width:768px) 100vw, 33vw" 
          />
        </div>
      </div>
      <figcaption className="px-1 pt-3 pb-1 text-center text-xs text-neutral-700 space-y-1">
        <span lang="ja" className="block">{placeJA}</span>
        <span className="block text-neutral-600">{alt}</span>
        <span className="text-neutral-500">{date}</span>
      </figcaption>
    </figure>
  );
}


export default function AboutMePage() {
  // Album images (use your real files)
    const polaroids: Polaroid[] = [
    { 
        src: "/cappadocia-balloon.jpg", 
        alt: "Cappadocia balloons at sunrise", 
        placeJA: "カッパドキア（トルコ）", 
        date: "2025-08-10" 
    },
    { 
        src: "/hagia-sofia.jpg", 
        alt: "Hagia Sophia", 
        placeJA: "アヤソフィア（イスタンブール）", 
        date: "2025-08-5" 
    },
    { 
        src: "/banff-lake.jpg", 
        alt: "Spirit Island", 
        placeJA: "スピリットアイランド（カナダ・アルバータ州）", 
        date: "2023-07-03" 
    },
    ];

  const foods = [
    "Coffee", "Matcha latte", "Butter chicken", "Pasta",
    "Biryani", "Sushi", "Ramen", "Garlic butter noodles",
  ];

  const cafes = ["Dineen Coffee", "Tsujiri Waterloo", "Neo Coffee Bar"];

  const readBooks = [
    "Atomic Habits — James Clear",
    "Deep Work — Cal Newport",
    "The Bell Jar — Sylvia Plath",
    "Frankenstein — Mary Shelley",
    "Meditations — Marcus Aurelius",
    "The Catcher in the Rye - J.D. Salinger"
  ];
  const planBooks = [
    "The Myth of Sisyphus — Albert Camus",
    "The Pragmatic Programmer — Hunt & Thomas",
    "Clean Architecture — Robert C. Martin",
    "A Room of One’s Own — Virginia Woolf",
    "Crime and Punishment — Fyodor Dostoevsky",
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Back to home */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 py-2 px-4 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] text-sm"
        >
          <span aria-hidden>←</span>
          <span>Back</span>
          <span lang="ja" className="text-neutral-500 ml-1 text-xs">戻る</span>
        </Link>
      </div>

      {/* MAIN — single column, purposeful spacing */}
      <div className="space-y-10">
        <Section id="aboutme-intro" title="More about me" jp="詳しく">
          <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-2xl">
            Quiet favourites and notes—music, food, books, F1, climbing, setup, and photos from places I’ve been.
          </p>
        </Section>

        {/* Music */}
        <Section id="music" title="Songs I'm looping" jp="音楽">
        <div className="grid gap-8 lg:grid-cols-2">
            {/* LEFT: flat MUJI list (no bubbles) */}
            <ul className="grid grid-cols-2 gap-y-2 content-start text-sm text-neutral-800 dark:text-neutral-200">
            {[
                "Wave To Earth — Love.",
                "Keshi — Touch",
                "Jung Kook — Still With You",
                "New Jeans — Zero",
                "Faye Webster — She Won’t Go Away",
                "Beabadoobee — Tired",
                "LE SSERAFIM — Crazy",
                "Joji — Afterthought",
            ].map((t) => (
                <li key={t}>{t}</li>
            ))}
            </ul>

            {/* RIGHT: framed Spotify embed */}
            <div className="rounded-xl border border-[#E6E4DF] bg-white dark:bg-neutral-950 overflow-hidden w-full lg:w-auto mx-auto max-w-[520px] lg:max-w-none">
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
                <div className="text-xs text-neutral-500">
                <span lang="ja" className="align-middle">プレイリスト</span>
                <span aria-hidden className="mx-2 inline-block h-[1px] w-4 bg-[#E6E4DF]" />
                <span className="align-middle">Matcha.cs</span>
                </div>
                <span className="text-[10px] text-neutral-400 tracking-wide">Spotify</span>
            </div>

            <div aria-hidden className="h-[1px] w-full bg-[#E6E4DF]" />

            <iframe
                title="Aayan playlist"
                className="block w-full h-[352px]"
                src="https://open.spotify.com/embed/playlist/6iB4dIWUIPsPdUvIII4FJu"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ border: 0 }}
            />

            <div className="px-4 py-3">
                <p className="text-xs text-neutral-500">
                Quiet, mellow, and a little dreamy — for late study sessions.
                </p>
            </div>
            </div>
        </div>
        </Section>


        {/* Foods / Cafés (chips) */}
        <Section id="food" title=" Favorite Food & cafés" jp="食べ物・カフェ">
          <Card className="p-4">
            <p className="text-xs text-neutral-500 mb-2">Foods</p>
            <ul className="flex flex-wrap gap-2">
              {foods.map((f) => (
                <li key={f} className="text-[11px] rounded-full border border-[#E6E4DF] px-2.5 py-1">{f}</li>
              ))}
            </ul>
            <p className="text-xs text-neutral-500 mt-4 mb-2">Cafés</p>
            <ul className="flex flex-wrap gap-2">
              {cafes.map((c) => (
                <li key={c} className="text-[11px] rounded-full border border-[#E6E4DF] px-2.5 py-1">{c}</li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* Books — Read vs Plan */}
        <Section id="books" title="Books" jp="本">
          <div className="grid gap-4 sm:grid-cols-2 text-sm">
            <Card className="p-4">
              <h3 className="text-neutral-500 text-xs">Read <span lang="ja" className="ml-1">読了</span></h3>
              <ul className="mt-2 space-y-2">
                {readBooks.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </Card>
            <Card className="p-4">
              <h3 className="text-neutral-500 text-xs">Plan to read <span lang="ja" className="ml-1">読みたい</span></h3>
              <ul className="mt-2 space-y-2">
                {planBooks.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </Card>
          </div>
        </Section>

        {/* F1 */}
        <Section id="f1" title="Formula 1" jp="F1">
          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2 text-sm">
              <Card className="overflow-hidden">
                <figure>
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={LH44}
                      alt="Ferrari — Lewis Hamilton #44"
                      fill
                      placeholder="blur"
                      className="object-cover"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-4">
                    <h3 className="text-neutral-500 text-xs">Favorite Team (current)</h3>
                    <p className="mt-1 font-medium">Ferrari — LH44</p>
                  </figcaption>
                </figure>
              </Card>

              <Card className="overflow-hidden">
                <figure>
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={mclaren}
                      alt="McLaren MP4/4 — Prost/Senna era"
                      fill
                      placeholder="blur"
                      className="object-cover object-center"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-4">
                    <h3 className="text-neutral-500 text-xs">Favorite Team (historical)</h3>
                    <p className="mt-1 font-medium">McLaren (Prost/Senna era)</p>
                  </figcaption>
                </figure>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <figure>
                <div className="relative aspect-video">
                  <Image
                    src={suzuka}
                    alt="Suzuka Circuit under cherry blossoms"
                    fill
                    placeholder="blur"
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <figcaption className="p-4">
                  <h3 className="text-neutral-500 text-xs">Favorite Track</h3>
                  <p className="mt-1 font-medium">Suzuka Circuit (Japan)</p>
                  <p className="mt-2 text-xs text-neutral-500">Fast esses, 130R, and spring blossoms—perfect.</p>
                </figcaption>
              </figure>
            </Card>
          </div>
        </Section>

        {/* Lifestyle */}
        <Section id="lifestyle" title="Climbing & gym" jp="クライミング・ジム">
          <div className="grid gap-4 sm:grid-cols-2 text-sm">
            <Card className="p-4">
              <h3 className="text-neutral-500 text-xs">Go-to bouldering spot</h3>
              <p className="mt-1 font-medium">Grand River Rocks (Kitchener)</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-neutral-500 text-xs">Gym</h3>
              <p className="mt-1 font-medium">PAC UW Athletics</p>
            </Card>
          </div>
        </Section>

        
        {/* Setup */}
        <Section id="setup" title="Setup" jp="ツール">
        <div className="rounded-xl border border-[#E6E4DF] bg-white dark:bg-neutral-950">
            <div className="px-4 py-3 text-xs text-neutral-500">
            <span lang="ja">仕様書</span>
            <span aria-hidden className="mx-2 inline-block h-[1px] w-4 bg-[#E6E4DF]" />
            <span>Spec sheet</span>
            </div>
            <div aria-hidden className="h-[1px] w-full bg-[#E6E4DF]" />

            {/* rows */}
            <dl className="divide-y divide-[#E6E4DF]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3">
                <dt className="text-xs text-neutral-500">Laptop</dt>
                <dd className="sm:col-span-2 text-sm">
                ThinkPad T14s Gen 4 — i7 / 32 GB
                </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3">
                <dt className="text-xs text-neutral-500">Keyboard</dt>
                <dd className="sm:col-span-2 text-sm">Womier WK61</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3">
                <dt className="text-xs text-neutral-500">Mouse</dt>
                <dd className="sm:col-span-2 text-sm">Logitech MX Master 3S</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3">
                <dt className="text-xs text-neutral-500">Phone</dt>
                <dd className="sm:col-span-2 text-sm">iPhone 15</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3">
                <dt className="text-xs text-neutral-500">Headphones</dt>
                <dd className="sm:col-span-2 text-sm">Sony WH-1000XM4</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3">
                <dt className="text-xs text-neutral-500">Monitor</dt>
                <dd className="sm:col-span-2 text-sm">Samsung S24F350</dd>
            </div>
            </dl>
        </div>
        </Section>


        {/* Color swatches - multiple favorites */}
        <Section id="color" title="Favorite colors" jp="色">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Color 1: Vanilla Cream */}
            <div className="flex items-center gap-4">
              <div
                className="h-16 w-24 rounded-lg border border-[#E6E4DF]"
                style={{ backgroundColor: "#F0E7D5" }}
                aria-label="Vanilla Cream color swatch"
                title="#F0E7D5"
              />
              <div className="text-sm">
                <div className="font-medium">Vanilla Cream</div>
                <div className="text-neutral-500">HEX: #F0E7D5</div>
              </div>
            </div>

            {/* Color 2: Sage Green */}
            <div className="flex items-center gap-4">
              <div
                className="h-16 w-24 rounded-lg border border-[#E6E4DF]"
                style={{ backgroundColor: "#B8C4BB" }}
                aria-label="Sage Green color swatch"
                title="#B8C4BB"
              />
              <div className="text-sm">
                <div className="font-medium">Sage Green</div>
                <div className="text-neutral-500">HEX: #B8C4BB</div>
              </div>
            </div>

            {/* Color 3: Warm Gray */}
            <div className="flex items-center gap-4">
              <div
                className="h-16 w-24 rounded-lg border border-[#E6E4DF]"
                style={{ backgroundColor: "#D3CFC7" }}
                aria-label="Warm Gray color swatch"
                title="#D3CFC7"
              />
              <div className="text-sm">
                <div className="font-medium">Warm Gray</div>
                <div className="text-neutral-500">HEX: #D3CFC7</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Album */}
        <Section id="album" title="Photo album" jp="アルバム">
          <div className="grid gap-4 sm:grid-cols-3">
            {polaroids.map((p) => (
              <PolaroidCard key={p.src} {...p} />
            ))}
          </div>
        </Section>

        {/* Schedule */}
        <Section id="schedule" title="Weekly plan" jp="スケジュール">
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
            Here’s my weekly schedule:
          </p>
          <Card className="overflow-hidden">
            <iframe
              title="Weekly calendar"
              src="https://calendar.google.com/calendar/embed?src=72c3cf2d94c9f70145ad832708050e49a29ce393ac5eaa30e86e0c8f3ce2dbd1%40group.calendar.google.com&ctz=America%2FToronto"
              width="100%"
              height="520"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Card>
        </Section>

        {/* Footer back */}
        <div className="pt-2 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-2 px-6 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] transition-colors"
          >
            <span aria-hidden>←</span>
            <span>Return to main page</span>
            <span lang="ja" className="text-neutral-500 ml-1 text-xs">ホームページへ</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
