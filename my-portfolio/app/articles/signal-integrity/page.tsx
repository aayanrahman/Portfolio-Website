import Link from "next/link";
import type { Metadata } from "next";
import { BASE, Markdown, getIndex, getNotes } from "@/lib/notes";
import { asset } from "@/lib/asset";

const PDF = asset("/notes/notes-on-signal-integrity-and-design.pdf");

export const metadata: Metadata = {
  title: "Signal and Power Integrity — Aayan Rahman",
};

export default function SignalIntegrityPage() {
  const notes = getNotes();

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
          <h1 className="font-serif text-3xl font-bold tracking-tight leading-tight">
            Signal and Power Integrity
          </h1>
        </header>

        <hr className="border-[#E6E4DF]" />

        <Markdown source={getIndex().replace(/^\s*\[\[[^\]]+\]\]\s*$/gm, "")} />

        <ol className="rounded-xl border border-[#E6E4DF] bg-white divide-y divide-[#E6E4DF] overflow-hidden">
          {notes.map((n, i) => (
            <li key={n.slug}>
              <Link href={`${BASE}/${n.slug}`} className="flex items-center gap-3 px-4 py-3 hover:bg-[#F9F8F6] transition-colors">
                <span className="text-[10px] text-neutral-300 w-4 shrink-0 text-right tabular-nums font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm text-neutral-800 font-medium">{n.name}</span>
                <span aria-hidden className="text-xs text-neutral-400">→</span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="rounded-xl border border-[#E6E4DF] bg-white flex items-center gap-3 px-4 py-3">
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F6DDE2]/60 text-[#5E1B2E] shrink-0">PDF</span>
          <a href={PDF} target="_blank" rel="noopener noreferrer" className="flex-1 text-sm text-neutral-800 font-medium hover:text-neutral-600 transition-colors">
            Notes On Signal Integrity And Design
          </a>
          <a
            href={PDF}
            download
            className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-[#E6E4DF] hover:bg-[#F5F4F1] text-xs transition-colors shrink-0"
          >
            <span aria-hidden>↓</span>
            <span>Download</span>
          </a>
        </div>

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
