import type { Metadata } from "next";
import PostPage, { postTitle } from "@/components/PostPage";
import { STAR_NOTIFIER, getNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: `${postTitle(getNotes(STAR_NOTIFIER)[0])} — Aayan Rahman`,
};

export default function StarNotifierPage() {
  return <PostPage collection={STAR_NOTIFIER} tag="PCB Design" date="Oct 2026" />;
}
