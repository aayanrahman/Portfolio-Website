"use client"

import { useEffect, useRef, useState } from "react"
import Section from "./Section"
import Timeline from "./Timeline"
import Tag from "./Tag"
import { experienceImages } from "@/lib/images"

type Artifact = {
  title: string
  domain: string
  domainVariant: "mint" | "blush" | "blue"
  description: string
  stack: string[]
  imageSrc: string
  imageAlt: string
  video?: string
}

const artifacts: Artifact[] = [
  {
    title: "React Native BLE App",
    domain: "Mobile",
    domainVariant: "blue",
    description:
      "Shipped a cross-platform iOS and Android app that drives motor hardware wirelessly over BLE. Owned the entire comms layer: characteristic discovery, command framing, live status telemetry, and graceful error recovery.",
    stack: ["React Native", "BLE", "TypeScript"],
    imageSrc: experienceImages.gravity.bleApp,
    imageAlt: "React Native BLE app UI showing motor control interface",
    video: "/videos/ble.mp4",
  },
  {
    title: "ESP32 BLE Firmware",
    domain: "Firmware",
    domainVariant: "mint",
    description:
      "Wrote embedded C firmware for the ESP32 covering BLE peripheral setup, GATT callbacks, input validation, and auto reconnect. Engineered a bidirectional heartbeat so the phone and ESP32 actively watch each other and trigger a safe shutdown the instant either side drops.",
    stack: ["Embedded C", "ESP32", "BLE GATT"],
    imageSrc: experienceImages.gravity.esp32,
    imageAlt: "ESP32 development board with BLE antenna",
  },
  {
    title: "Motor Controller Reverse Engineering",
    domain: "Electrical",
    domainVariant: "blush",
    description:
      "Reverse engineered existing motor driver boards with an oscilloscope and multimeter, tracing signal paths to pinpoint faults and document the control protocol for future hardware revisions.",
    stack: ["Oscilloscope", "Signal Tracing", "Bench Testing"],
    imageSrc: experienceImages.gravity.motorDebug,
    imageAlt: "Oscilloscope probe on motor controller PCB during bench testing",
  },
  {
    title: "Soldering & Harness Work",
    domain: "Fabrication",
    domainVariant: "mint",
    description:
      "Built high current wire harnesses from scratch and soldered power connectors rated for real load. Owned prototype bring up end to end: flashing firmware, validating circuits on the bench, and iterating until the build was production ready.",
    stack: ["High-current Soldering", "Wire Harness", "Reflashing"],
    imageSrc: experienceImages.gravity.soldering,
    imageAlt: "Close-up of high-current connector being soldered during harness assembly",
  },
  {
    title: "Plasma Cutting",
    domain: "Fabrication",
    domainVariant: "blush",
    description:
      "Picked up plasma cutting on the floor and ran the machine myself to fabricate structural brackets and custom metal parts for active prototype builds.",
    stack: ["Plasma Cutter", "Metal Fabrication"],
    imageSrc: experienceImages.gravity.plasma,
    imageAlt: "Plasma cutting metal stock during prototype fabrication at Gravity RV",
    video: "/videos/plasma-cutting.mp4",
  },
  {
  title: "CAD Work",
  domain: "Design",
  domainVariant: "blue",
  description:
    "Executed mechanical CAD modeling and prepared designs for plasma cutter production. Developed precise parts and assemblies to generate accurate technical quotes for customer projects.",
  stack: ["MCAD", "Plasma Cutting", "Quoting"],
  imageSrc: experienceImages.gravity.cad,
  imageAlt: "Mechanical CAD model for plasma cutting and customer quoting at Gravity RV",
},
  {
    title: "Zoho + Firebase Integration",
    domain: "Backend",
    domainVariant: "blue",
    description:
      "Built backend sync scripts that pipe Zoho CRM data straight into Firebase in real time. Eliminated manual data entry entirely and gave the team a single source of truth for customer records.",
    stack: ["Firebase", "Zoho", "JavaScript"],
    imageSrc: experienceImages.gravity.zoho,
    imageAlt: "Dashboard or data flow diagram for Zoho and Firebase integration",
  },
]

const otherExperiences = [
  {
    title: "Code Ninjas — Instructor (Sensei)",
    location: "Oakville, ON",
    period: "Sep 2024 – Aug 2025",
    description: [
      "Taught JavaScript and C# (Unity) to 50+ students, scaling lessons from absolute beginner syntax up to full game development projects.",
      "Ran summer camps covering Roblox (Lua), Minecraft modding, and robotics, with every session built around shipping a real project by the end of the week.",
      "Introduced kids aged 4 to 7 to computational thinking and basic circuit logic through hands on activities they could actually understand and enjoy.",
      "Owned daily operations including student onboarding, equipment readiness, and live troubleshooting so classes always ran on time.",
    ],
  },
  {
    title: "Brain Stimuli Project — University of Toronto — Full Stack Developer",
    location: "Toronto, ON",
    period: "Oct 2024 – Feb 2025",
    description: [
      "Built a full stack research platform that integrated AI emotion models into a React and MongoDB dashboard used by active neuroscience researchers.",
      "Designed RESTful APIs and real time data pipelines to visualize live sentiment signals with consistent accuracy.",
      "Partnered directly with researchers to shape the UI around real experiment workflows, supporting models that hit 90%+ accuracy.",
    ],
  },
  {
    title: "HealthBot.ca — Co-Founder & Backend Engineer",
    location: "Remote",
    period: "May 2024 – May 2025",
    description: [
      "Co founded a PHIPA compliant AI health assistant on Google Cloud and grew it to 100+ active users.",
      "Engineered the backend with role based access control and full CI/CD pipelines, cutting deploy time from 30 minutes down to under 5.",
      "Earned local media coverage for the project's impact on community health access.",
    ],
  },
  {
    title: "Hackathons Canada — Logistics Director",
    location: "Remote",
    period: "Jul 2024 – Feb 2025",
    description: [
      "Directed logistics for a 330+ participant university hackathon hosted at Laurier, owning execution from venue to closing ceremony.",
      "Closed over $15,000 in sponsorships and built direct partnerships with top tier tech companies.",
      "Rebuilt team coordination in Notion, lifting task throughput by 25% across the organizing team.",
    ],
  },
]

export default function Experience() {
  const matchaRef = useRef<HTMLImageElement>(null)
  const [rotate, setRotate] = useState(-8)

  useEffect(() => {
    const onScroll = () => {
      if (!matchaRef.current) return
      const { top, height } = matchaRef.current.getBoundingClientRect()
      const progress = 1 - (top + height / 2) / window.innerHeight
      const clamped = Math.max(0, Math.min(1, progress))
      setRotate(-8 + clamped * 18)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Section id="experience" title="Experience" accent="mint">
      {/* Gravity RV Featured Co-op */}
      <div className="mb-16">
        <div className="bg-[#F5F4F1] border border-[#E6E4DF] rounded-2xl overflow-hidden mb-8">
          {/* Hero video */}
          <div className="relative w-full bg-[#111]" style={{ aspectRatio: "16/9" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-label="Gravity RV — R&D co-op work"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/gravity.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#BEE3D2]/40 border border-[#BEE3D2]/50 text-[#1B1B1B]">
                    Co-op · Current
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-2xl">Gravity RV</h3>
                <p className="text-neutral-500 text-sm mt-0.5">R&amp;D Software &amp; Electrical Engineering Intern · Ontario, CA</p>
              </div>
              <p className="text-sm text-neutral-500 italic whitespace-nowrap">Jan 2026 – Present</p>
            </div>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Shipping production embedded firmware, BLE wireless control, React Native mobile apps, and hands on
              electrical fabrication for an active recreation vehicle R&amp;D program. Moving fluently across the
              full stack, from ESP32 C firmware to mobile UI to high current harness work on the bench, and owning
              real artifacts in every layer.
            </p>
          </div>
        </div>

        {/* Artifact grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artifacts.slice(0, 4).map((artifact) => (
            <div
              key={artifact.title}
              className={`bg-[#F5F4F1] border border-[#E6E4DF] rounded-xl p-5 flex flex-col gap-3 card-hover ${artifact.video ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className="rounded-lg overflow-hidden border border-[#E6E4DF] bg-[#111] aspect-[16/9] relative">
                {artifact.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={artifact.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={artifact.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={artifact.imageSrc}
                    alt={artifact.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.className = "absolute inset-0 w-full h-full flex items-center justify-center bg-[#EEECE8]"
                        parent.innerHTML = `<span class="text-xs text-neutral-400 px-4 text-center">${artifact.imageAlt}</span>`
                      }
                    }}
                  />
                )}
              </div>

              <div className="flex items-center justify-between gap-2">
                <h4 className="font-serif font-semibold text-base leading-snug">{artifact.title}</h4>
                <Tag variant={artifact.domainVariant}>{artifact.domain}</Tag>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed flex-1">{artifact.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {artifact.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-200/60 text-neutral-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Sticker — no card, just floats in the empty 3rd column */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              ref={matchaRef}
              src="/stickers/star.png"
              alt=""
              aria-hidden="true"
              className="h-92 w-auto object-contain drop-shadow-md transition-transform duration-75"
              style={{ transform: `rotate(${rotate}deg)` }}
            />
          </div>

          {artifacts.slice(4).map((artifact) => (
            <div
              key={artifact.title}
              className={`bg-[#F5F4F1] border border-[#E6E4DF] rounded-xl p-5 flex flex-col gap-3 card-hover ${artifact.video ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className="rounded-lg overflow-hidden border border-[#E6E4DF] bg-[#111] aspect-[16/9] relative">
                {artifact.video ? (
                  <video autoPlay muted loop playsInline aria-label={artifact.imageAlt} className="absolute inset-0 w-full h-full object-cover">
                    <source src={artifact.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={artifact.imageSrc}
                    alt={artifact.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.className = "absolute inset-0 w-full h-full flex items-center justify-center bg-[#EEECE8]"
                        parent.innerHTML = `<span class="text-xs text-neutral-400 px-4 text-center">${artifact.imageAlt}</span>`
                      }
                    }}
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-serif font-semibold text-base leading-snug">{artifact.title}</h4>
                <Tag variant={artifact.domainVariant}>{artifact.domain}</Tag>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed flex-1">{artifact.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {artifact.stack.map((s) => (
                  <span key={s} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-200/60 text-neutral-600">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-10">
        <div className="h-px flex-1 bg-[#E6E4DF]" />
        <span className="text-xs text-neutral-400 tracking-wide uppercase">Previously</span>
        <div className="h-px flex-1 bg-[#E6E4DF]" />
      </div>

      <Timeline items={otherExperiences} />
    </Section>
  )
}