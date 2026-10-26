import fs from "fs";
import path from "path";
import Link from "next/link";
import type { ReactNode } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

/**
 * Obsidian notes copied verbatim into content/<collection>/.
 *
 * A collection either has an index note, whose [[wikilinks]] set the order of
 * the linked pages, or a fixed list of note names. Adding a new note is: copy
 * the .md file in, and link it from the index (or add it to `order`). Notes
 * not copied in yet are skipped.
 */
export type Collection = { dir: string; base: string; index?: string; order?: string[] };

export const SIGNAL_INTEGRITY: Collection = {
  dir: "signal-integrity",
  base: "/articles/signal-integrity",
  index: "Proper draft for personal website",
};

export const CPP_NOTES: Collection = {
  dir: "cpp-notes",
  base: "/articles/cpp-notes",
  order: ["Pointers"],
};

export const ELECTRONICS: Collection = {
  dir: "electronics",
  base: "/articles/electronics",
  order: ["Impedance"],
};

export type Note = { name: string; slug: string; body: string };

const toSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const file = (c: Collection, name: string) => path.join(process.cwd(), "content", c.dir, `${name}.md`);

function read(c: Collection, name: string): string {
  return fs.readFileSync(file(c, name), "utf8");
}

export function getIndex(c: Collection): string {
  return c.index ? read(c, c.index) : "";
}

export function getNotes(c: Collection): Note[] {
  const names = c.index
    ? [...getIndex(c).matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((m) => m[1].trim())
    : (c.order ?? []);
  return names
    .filter((name) => fs.existsSync(file(c, name)))
    .map((name) => ({ name, slug: toSlug(name), body: read(c, name) }));
}

function inline(text: string, base: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`|\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.length > 2) {
      return <code key={i} className="font-mono text-[0.85em] text-neutral-800 bg-[#F5F4F1] px-1 py-0.5 rounded">{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("[[")) {
      const [target, alias] = part.slice(2, -2).split("|");
      return (
        <Link key={i} href={`${base}/${toSlug(target.trim())}`} className="underline underline-offset-2 hover:text-neutral-900">
          {(alias ?? target).trim()}
        </Link>
      );
    }
    if (part.startsWith("**")) return <strong key={i} className="font-semibold text-neutral-800">{inline(part.slice(2, -2), base)}</strong>;
    if ((part.startsWith("*") || part.startsWith("_")) && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

const cells = (row: string) => row.trim().replace(/^\||\|$/g, "").split("|").map((s) => s.trim());

export function Markdown({ source, base }: { source: string; base: string }) {
  const out: ReactNode[] = [];
  const lines = source.split("\n").map((l) => l.trimEnd());
  let list: { ordered: boolean; items: string[] } | null = null;

  const flush = () => {
    if (!list) return;
    const Tag = list.ordered ? "ol" : "ul";
    out.push(
      <Tag
        key={out.length}
        className={`${list.ordered ? "list-decimal" : "list-disc"} pl-5 space-y-2 text-neutral-600 leading-relaxed marker:text-neutral-400`}
      >
        {list.items.map((item, i) => <li key={i}>{inline(item, base)}</li>)}
      </Tag>
    );
    list = null;
  };

  for (let n = 0; n < lines.length; n++) {
    const line = lines[n];

    // Obsidian keeps the language name on its own line above pasted code; show it as the block's label.
    const label = /^[a-z+#]+$/.test(line.trim()) && lines[n + 1] === "" && lines[n + 2]?.startsWith("```") ? line.trim() : null;
    if (label) n += 2;

    if (lines[n].startsWith("```")) {
      flush();
      const code: string[] = [];
      while (++n < lines.length && !lines[n].startsWith("```")) code.push(lines[n]);
      out.push(
        <figure key={out.length} className="rounded-xl border border-[#E6E4DF] bg-[#F9F8F6] overflow-hidden">
          {label && <figcaption className="px-4 pt-2 text-[10px] font-mono text-neutral-400">{label}</figcaption>}
          <pre className="px-4 py-3 text-xs leading-relaxed text-neutral-800 overflow-x-auto"><code>{code.join("\n")}</code></pre>
        </figure>
      );
      continue;
    }

    if (line.trim() === "$$") {
      flush();
      const tex: string[] = [];
      while (++n < lines.length && lines[n].trim() !== "$$") tex.push(lines[n]);
      out.push(
        <div
          key={out.length}
          className="overflow-x-auto text-neutral-800"
          dangerouslySetInnerHTML={{ __html: katex.renderToString(tex.join("\n"), { displayMode: true, throwOnError: false }) }}
        />
      );
      continue;
    }

    if (line.startsWith("|")) {
      flush();
      const rows: string[][] = [];
      for (; n < lines.length && lines[n].startsWith("|"); n++) {
        if (!/^\|?[\s:|-]+\|?$/.test(lines[n])) rows.push(cells(lines[n]));
      }
      n--;
      const [head, ...body] = rows;
      out.push(
        <div key={out.length} className="rounded-xl border border-[#E6E4DF] bg-white overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#F9F8F6] text-neutral-800">
              <tr>{head.map((h, i) => <th key={i} className="px-4 py-2 font-medium">{inline(h, base)}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-[#E6E4DF] text-neutral-600">
              {body.map((r, i) => <tr key={i}>{r.map((d, j) => <td key={j} className="px-4 py-2">{inline(d, base)}</td>)}</tr>)}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    const heading = line.match(/^#{1,6}\s+(.*)$/);
    if (heading) {
      flush();
      out.push(<h2 key={out.length} className="font-serif text-xl font-semibold text-neutral-900 pt-4">{inline(heading[1], base)}</h2>);
      continue;
    }

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
        out.push(<p key={out.length} className="text-neutral-600 leading-relaxed">{inline(line.trim(), base)}</p>);
      }
    }
  }
  flush();

  return <div className="space-y-4">{out}</div>;
}
