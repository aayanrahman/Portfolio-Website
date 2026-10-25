import type { Metadata } from "next";
import NotePage from "@/components/NotePage";
import { SIGNAL_INTEGRITY, getNotes } from "@/lib/notes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getNotes(SIGNAL_INTEGRITY).map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNotes(SIGNAL_INTEGRITY).find((n) => n.slug === slug);
  return { title: note ? `${note.name} — Aayan Rahman` : "Aayan Rahman" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <NotePage collection={SIGNAL_INTEGRITY} title="Signal and Power Integrity" slug={slug} />;
}
