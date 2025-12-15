"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-[#6B6B6B] text-sm font-medium">
                University of Waterloo — Electrical Engineering (Co-op)
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Aayan Rahman <span aria-hidden="true">☆⋆｡𖦹°‧ᯓ★</span>
              </h1>
              <div className="w-16 h-px bg-[#BEE3D2] mt-4"></div>
            </div>

            <div className="space-y-4">
              <p className="text-xl lg:text-2xl font-medium text-balance text-pretty">
                &ldquo;Building useful things with electrons &amp; code.&rdquo;
              </p>
              <p className="text-[#6B6B6B] text-base lg:text-lg text-pretty">
                Embedded systems, FPGAs, and web tools that actually ship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-[#1B1B1B] text-white hover:bg-[#1B1B1B]/90 px-6 py-3 rounded-lg font-medium link-hover min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#B8E6B8] focus:ring-offset-2"
                aria-label="View my projects section"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-[#E6E4DF] text-[#1B1B1B] hover:bg-[#F5F4F1] px-6 py-3 rounded-lg font-medium min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#B8E6B8] focus:ring-offset-2"
                aria-label="Go to contact section"
              >
                Contact
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('/Engineering_Resume.pdf', '_blank')}
                className="border-[#E6E4DF] text-[#1B1B1B] hover:bg-[#F5F4F1] px-6 py-3 rounded-lg font-medium min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#B8E6B8] focus:ring-offset-2"
                aria-label="View my resume"
              >
                Resume
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[4/3] bg-[#F5F4F1] border border-[#E6E4DF] rounded-lg overflow-hidden">
              <img
                src="/pcb-circuit-board-with-electronic-components-and-t.png"
                alt="PCB circuit board design showcasing electronic components and circuit traces"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
