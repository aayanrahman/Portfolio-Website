import type React from "react"
interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  accent?: "mint" | "blush" | "blue"
}

export default function Section({ id, title, children, accent = "mint" }: SectionProps) {
  const accentColors = {
    mint: "bg-[#BEE3D2]",
    blush: "bg-[#F6DDE2]",
    blue: "bg-[#D9E8F6]",
  }

  return (
    <section id={id} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className={`w-2 h-2 rounded-full ${accentColors[accent]}`}></div>
          <h2 className="font-serif text-3xl font-bold tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
