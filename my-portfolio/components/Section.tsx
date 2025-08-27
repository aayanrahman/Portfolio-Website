import type React from "react"

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  accent?: "mint" | "blush" | "blue"
}

// Japanese translations for section titles
const JP: Record<string, string> = {
  About: "自己紹介",
  Education: "学歴",
  Projects: "プロジェクト",
  Experience: "経験",
  Skills: "スキル",
  Contact: "連絡先",
  Personal: "個人的"
};

export default function Section({ id, title, children, accent = "mint" }: SectionProps) {
  const accentColors = {
    mint: "bg-[#BEE3D2]",
    blush: "bg-[#F6DDE2]",
    blue: "bg-[#D9E8F6]",
  }
  
  // Get Japanese translation if available
  const jp = JP[title];

  return (
    <section id={id} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className={`w-2 h-2 rounded-full ${accentColors[accent]}`}></div>
          <h2 className="font-serif text-3xl font-bold tracking-tight flex items-center gap-3">
            <span>{title}</span>
            {jp && (
              <>
                <span aria-hidden="true" className="h-[2px] w-6 bg-neutral-300 dark:bg-neutral-700" />
                <small
                  lang="ja"
                  className="text-base md:text-lg font-medium text-neutral-600 dark:text-neutral-300 whitespace-nowrap"
                >
                  {jp}
                </small>
              </>
            )}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}
