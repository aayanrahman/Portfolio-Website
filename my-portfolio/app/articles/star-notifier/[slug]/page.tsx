import type { Metadata } from "next";
import PostPage, { postTitle } from "@/components/PostPage";
import { STAR_NOTIFIER, getNotes } from "@/lib/notes";

type Props = { params: Promise<{ slug: string }> };

// The first post is the series page itself.
export function generateStaticParams() {
  return getNotes(STAR_NOTIFIER).slice(1).map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNotes(STAR_NOTIFIER).find((n) => n.slug === slug);
  return { title: note ? `${postTitle(note)} — Aayan Rahman` : "Aayan Rahman" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PostPage collection={STAR_NOTIFIER} slug={slug} tag="PCB Design" date="Oct 2026" />;
}
