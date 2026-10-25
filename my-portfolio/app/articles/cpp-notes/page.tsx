import Link from "next/link";
import type { Metadata } from "next";
import { CPP_NOTES, getNotes } from "@/lib/notes";
import { asset } from "@/lib/asset";

const PDF = asset("/notes/cpp-notes.pdf");
const BASE = CPP_NOTES.base;

export const metadata: Metadata = {
  title: "C++ Notes — Aayan Rahman",
};

export default function CppNotesPage() {
  const notes = getNotes(CPP_NOTES);

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
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#BEE3D2]/40 text-[#1B5E40]">
              C++
            </span>
            <span className="text-[10px] text-neutral-400">Oct 2026</span>
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight leading-tight">
            C++ Notes
          </h1>
        </header>

        <hr className="border-[#E6E4DF]" />

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

        <a
          href={PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[#E6E4DF] bg-white flex items-center gap-3 px-4 py-3 hover:bg-[#F9F8F6] transition-colors"
        >
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F6DDE2]/60 text-[#5E1B2E] shrink-0">PDF</span>
          <span className="flex-1 text-sm text-neutral-800 font-medium">C++</span>
          <span className="text-xs text-neutral-400 shrink-0">Open ↗</span>
        </a>

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
