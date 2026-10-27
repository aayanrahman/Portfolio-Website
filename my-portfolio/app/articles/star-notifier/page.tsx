import Link from "next/link";
import type { Metadata } from "next";
import { STAR_NOTIFIER, Markdown, getNotes } from "@/lib/notes";

// A single post rather than a series: the note's own "# " line is the title.
const note = getNotes(STAR_NOTIFIER)[0];
const title = note.body.match(/^#\s+(.*)$/m)?.[1] ?? note.name;
const body = note.body.replace(/^#\s+.*\n/, "");

export const metadata: Metadata = {
  title: `${title} — Aayan Rahman`,
};

export default function StarNotifierPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-8">
        <Link
          href="/about-me"
          className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] text-sm transition-colors"
        >
          <span aria-hidden>←</span>
          <span>Back</span>
          <span lang="ja" className="text-neutral-400 ml-1 text-xs">戻る</span>
        </Link>
      </div>

      <article className="space-y-8">
        <header className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#D9E8F6]/60 text-[#1B3A5E]">
              PCB Design
            </span>
            <span className="text-[10px] text-neutral-400">Oct 2026</span>
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight leading-tight">{title}</h1>
        </header>

        <hr className="border-[#E6E4DF]" />

        <Markdown source={body} base={STAR_NOTIFIER.base} />

        <hr className="border-[#E6E4DF]" />

        <footer className="text-center">
          <Link
            href="/about-me"
            className="inline-flex items-center gap-2 py-2 px-6 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] transition-colors text-sm"
          >
            <span aria-hidden>←</span>
            <span>Back to about</span>
            <span lang="ja" className="text-neutral-400 ml-1 text-xs">戻る</span>
          </Link>
        </footer>
      </article>
    </main>
  );
}
