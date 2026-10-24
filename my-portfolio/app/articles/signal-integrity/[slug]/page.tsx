import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BASE, Markdown, getNotes } from "@/lib/notes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNotes().find((n) => n.slug === slug);
  return { title: note ? `${note.name} — Aayan Rahman` : "Aayan Rahman" };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const notes = getNotes();
  const i = notes.findIndex((n) => n.slug === slug);
  if (i === -1) notFound();

  const note = notes[i];
  const prev = notes[i - 1];
  const next = notes[i + 1];

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-8">
        <Link
          href={BASE}
          className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] text-sm transition-colors"
        >
          <span aria-hidden>←</span>
          <span>Back</span>
          <span lang="ja" className="text-neutral-400 ml-1 text-xs">戻る</span>
        </Link>
      </div>

      <article className="space-y-8">
        <header className="space-y-3">
          <span className="text-[10px] text-neutral-400 tabular-nums font-mono">
            {String(i + 1).padStart(2, "0")} / {String(notes.length).padStart(2, "0")}
          </span>
          <h1 className="font-serif text-3xl font-bold tracking-tight leading-tight">{note.name}</h1>
        </header>

        <hr className="border-[#E6E4DF]" />

        <Markdown source={note.body} />

        <hr className="border-[#E6E4DF]" />

        <nav className="grid grid-cols-2 gap-3 text-sm">
          {prev ? (
            <Link href={`${BASE}/${prev.slug}`} className="rounded-xl border border-[#E6E4DF] bg-white p-4 hover:border-neutral-300 transition-colors">
              <span className="block text-xs text-neutral-400">← Previous</span>
              <span className="block mt-1 font-medium text-neutral-800">{prev.name}</span>
            </Link>
          ) : (
            <Link href={BASE} className="rounded-xl border border-[#E6E4DF] bg-white p-4 hover:border-neutral-300 transition-colors">
              <span className="block text-xs text-neutral-400">← Previous</span>
              <span className="block mt-1 font-medium text-neutral-800">Signal and Power Integrity</span>
            </Link>
          )}
          {next && (
            <Link href={`${BASE}/${next.slug}`} className="col-start-2 rounded-xl border border-[#E6E4DF] bg-white p-4 text-right hover:border-neutral-300 transition-colors">
              <span className="block text-xs text-neutral-400">Next →</span>
              <span className="block mt-1 font-medium text-neutral-800">{next.name}</span>
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}
