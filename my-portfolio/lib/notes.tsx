import fs from "fs";
import path from "path";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Obsidian notes copied verbatim into content/signal-integrity/.
 *
 * The index note is the main page. The [[wikilinks]] in it set the order of
 * the linked pages, so adding a new note is: copy the .md file in, and link it
 * from the index note in Obsidian. Links to notes not copied in yet are skipped.
 */
const DIR = path.join(process.cwd(), "content", "signal-integrity");
const INDEX = "Proper draft for personal website";
export const BASE = "/articles/signal-integrity";

export type Note = { name: string; slug: string; body: string };

const toSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function read(name: string): string {
  return fs.readFileSync(path.join(DIR, `${name}.md`), "utf8");
}

export function getIndex(): string {
  return read(INDEX);
}

export function getNotes(): Note[] {
  const links = [...getIndex().matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((m) => m[1].trim());
  return links
    .filter((name) => fs.existsSync(path.join(DIR, `${name}.md`)))
    .map((name) => ({ name, slug: toSlug(name), body: read(name) }));
}

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g);
  return parts.map((part, i) => {
    if (part.startsWith("[[")) {
      const [target, alias] = part.slice(2, -2).split("|");
      return (
        <Link key={i} href={`${BASE}/${toSlug(target.trim())}`} className="underline underline-offset-2 hover:text-neutral-900">
          {(alias ?? target).trim()}
        </Link>
      );
    }
    if (part.startsWith("**")) return <strong key={i} className="font-semibold text-neutral-800">{part.slice(2, -2)}</strong>;
    if ((part.startsWith("*") || part.startsWith("_")) && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export function Markdown({ source }: { source: string }) {
  const out: ReactNode[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flush = () => {
    if (!list) return;
    const Tag = list.ordered ? "ol" : "ul";
    out.push(
      <Tag
        key={out.length}
        className={`${list.ordered ? "list-decimal" : "list-disc"} pl-5 space-y-2 text-neutral-600 leading-relaxed marker:text-neutral-400`}
      >
        {list.items.map((item, i) => <li key={i}>{inline(item)}</li>)}
      </Tag>
    );
    list = null;
  };

  for (const raw of source.split("\n")) {
    const line = raw.trimEnd();
    const ordered = line.match(/^\s*\d+\.\s+(.*)$/);
    const bullet = line.match(/^\s*[-*]\s+(.*)$/);
    const item = ordered ?? bullet;

    if (item) {
      if (list && list.ordered !== !!ordered) flush();
      list ??= { ordered: !!ordered, items: [] };
      list.items.push(item[1]);
    } else {
      flush();
      if (line.trim()) {
        out.push(<p key={out.length} className="text-neutral-600 leading-relaxed">{inline(line.trim())}</p>);
      }
    }
  }
  flush();

  return <div className="space-y-4">{out}</div>;
}
