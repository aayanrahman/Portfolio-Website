"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FCFCFA]/90 backdrop-blur-sm border-b border-[#E6E4DF]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="font-serif font-semibold text-lg tracking-tight">Aayan Rahman</div>

        <div className="hidden md:flex items-center space-x-8">
          {["About", "Education", "Projects", "Experience", "Skills", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-[#6B6B6B] hover:text-[#1B1B1B] link-hover text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B8E6B8] focus:ring-offset-1 rounded"
              aria-label={`Navigate to ${item} section`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="text-[#6B6B6B] text-sm" aria-hidden="true">
          ☆⋆｡𖦹°‧★ᯓ★
        </div>
      </div>
    </nav>
  )
}
