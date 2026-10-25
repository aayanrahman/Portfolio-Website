import type { Metadata } from "next";
import NotePage from "@/components/NotePage";
import { CPP_NOTES, getNotes } from "@/lib/notes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getNotes(CPP_NOTES).map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNotes(CPP_NOTES).find((n) => n.slug === slug);
  return { title: note ? `${note.name} — Aayan Rahman` : "Aayan Rahman" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <NotePage collection={CPP_NOTES} title="C++ Notes" slug={slug} />;
}
