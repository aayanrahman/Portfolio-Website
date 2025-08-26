import type React from "react"
interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-[#F5F4F1] border border-[#E6E4DF] rounded-lg p-6 card-hover ${className}`}>{children}</div>
}
