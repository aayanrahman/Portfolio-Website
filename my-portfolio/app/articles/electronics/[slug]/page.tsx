import type { Metadata } from "next";
import NotePage from "@/components/NotePage";
import { ELECTRONICS, getNotes } from "@/lib/notes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getNotes(ELECTRONICS).map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNotes(ELECTRONICS).find((n) => n.slug === slug);
  return { title: note ? `${note.name} — Aayan Rahman` : "Aayan Rahman" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <NotePage collection={ELECTRONICS} title="Electronics Notes" slug={slug} />;
}
