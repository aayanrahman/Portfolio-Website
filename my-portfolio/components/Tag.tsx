import type React from "react"
interface TagProps {
  children: React.ReactNode
  variant?: "mint" | "blush" | "blue"
}

export default function Tag({ children, variant = "mint" }: TagProps) {
  const variants = {
    mint: "bg-[#BEE3D2]/20 text-[#1B1B1B] border-[#BEE3D2]/30",
    blush: "bg-[#F6DDE2]/20 text-[#1B1B1B] border-[#F6DDE2]/30",
    blue: "bg-[#D9E8F6]/20 text-[#1B1B1B] border-[#D9E8F6]/30",
  }

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]}`}>
      {children}
    </span>
  )
}
