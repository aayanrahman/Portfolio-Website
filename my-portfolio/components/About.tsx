"use client"

import { useEffect, useRef, useState } from "react"
import Section from "./Section"

export default function About() {
  const canRef = useRef<HTMLImageElement>(null)
  const [rotate, setRotate] = useState(-8)

  useEffect(() => {
    const onScroll = () => {
      if (!canRef.current) return
      const { top, height } = canRef.current.getBoundingClientRect()
      const progress = 1 - (top + height / 2) / window.innerHeight
      const clamped = Math.max(0, Math.min(1, progress))
      setRotate(-8 + clamped * 18)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <Section id="about" title="About" accent="mint">
      <div className="flex items-center gap-8 lg:gap-16">
        <div className="flex-1 max-w-3xl">
          <p className="text-lg leading-relaxed text-[#6B6B6B]">
            I’m an Electrical Engineering student at the University of Waterloo. 
            I recently wrapped up my first co-op at <span className="text-black font-medium">Gravity RV</span>, 
            where I wrote BLE firmware in C for ESP32s, built a React Native app for wireless motor control, 
            and got hands-on with soldering, wiring harnesses, and plasma cutting.
          </p>
          <p className="text-lg leading-relaxed text-[#6B6B6B] mt-4">
            Outside of work, I design PCBs in Altium and KiCad for <span className="text-black font-medium">Waterloo Formula Electric</span> and <span className="text-black font-medium">Rocketry</span>. 
            I’m drawn to the space where software meets the physical world the stuff that can actually break in satisfying ways.
          </p>
        </div>
        
        <div className="hidden lg:flex shrink-0 items-end justify-center">
          <img
            ref={canRef}
            src="/stickers/redbull.png"
            alt=""
            aria-hidden="true"
            className="h-52 w-auto object-contain drop-shadow-md transition-transform duration-75"
            style={{ transform: `rotate(${rotate}deg)` }}
          />
        </div>
      </div>
    </Section>
  )
}