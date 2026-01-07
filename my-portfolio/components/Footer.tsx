import WebringEmbed from "@/components/WebringEmbed";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E6E4DF] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#6B6B6B]">© {currentYear} Aayan Rahman</p>

        {/* Stays nicely in the row now */}
        <WebringEmbed />

        <p className="text-sm text-[#6B6B6B] flex items-center gap-2">
          Built with Next.js • Minimal MUJI vibes <span>☆</span>
        </p>
      </div>
    </footer>
  );
}
