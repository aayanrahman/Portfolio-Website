import Link from "next/link";
import { notFound } from "next/navigation";
import { type Collection, type Note, Markdown, getNotes } from "@/lib/notes";

/**
 * A run of posts that read on their own, each with its own "# " title. The
 * first post lives at the collection's base URL, later ones at base/slug.
 */
export const postTitle = (note: Note) => note.body.match(/^#\s+(.*)$/m)?.[1] ?? note.name;

export default function PostPage({ collection, slug, tag, date }: { collection: Collection; slug?: string; tag: string; date: string }) {
  const { base } = collection;
  const notes = getNotes(collection);
  const i = slug ? notes.findIndex((n) => n.slug === slug) : 0;
  if (i < 0 || (slug && i === 0)) notFound();

  const href = (k: number) => (k === 0 ? base : `${base}/${notes[k].slug}`);
  const note = notes[i];
  const prev = i > 0 ? i - 1 : null;
  const next = i < notes.length - 1 ? i + 1 : null;

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
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#D9E8F6]/60 text-[#1B3A5E]">{tag}</span>
            <span className="text-[10px] text-neutral-400">{date}</span>
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight leading-tight">{postTitle(note)}</h1>
        </header>

        <hr className="border-[#E6E4DF]" />

        <Markdown source={note.body.replace(/^#\s+.*\n/, "")} base={base} />

        <hr className="border-[#E6E4DF]" />

        {(prev !== null || next !== null) && (
          <nav className="grid grid-cols-2 gap-3 text-sm">
            {prev !== null && (
              <Link href={href(prev)} className="rounded-xl border border-[#E6E4DF] bg-white p-4 hover:border-neutral-300 transition-colors">
                <span className="block text-xs text-neutral-400">← Previous</span>
                <span className="block mt-1 font-medium text-neutral-800">{postTitle(notes[prev])}</span>
              </Link>
            )}
            {next !== null && (
              <Link href={href(next)} className="col-start-2 rounded-xl border border-[#E6E4DF] bg-white p-4 text-right hover:border-neutral-300 transition-colors">
                <span className="block text-xs text-neutral-400">Next →</span>
                <span className="block mt-1 font-medium text-neutral-800">{postTitle(notes[next])}</span>
              </Link>
            )}
          </nav>
        )}

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
