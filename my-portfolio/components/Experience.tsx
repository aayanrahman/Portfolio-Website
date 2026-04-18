"use client"

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
      "Built a cross-platform iOS + Android app for wireless motor control over Bluetooth Low Energy. Handles RX/TX characteristic discovery, command framing, and real-time error feedback.",
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
      "Wrote embedded C firmware for the ESP32 handling BLE peripheral advertisement, characteristic callbacks, input validation, and automatic reconnection logic. Implemented safety-critical bidirectional heartbeat monitoring — ESP32 and phone exchange heartbeats on separate BLE characteristics, triggering a controlled shutdown if either side goes silent.",
    stack: ["Embedded C", "ESP32", "BLE GATT"],
    imageSrc: experienceImages.gravity.esp32,
    imageAlt: "ESP32 development board with BLE antenna",
  },
  {
    title: "Motor Controller Reverse Engineering",
    domain: "Electrical",
    domainVariant: "blush",
    description:
      "Debugged actuator control systems by tracing signal paths, probing with an oscilloscope, and diagnosing faults in existing motor driver hardware.",
    stack: ["Oscilloscope", "Signal Tracing", "Bench Testing"],
    imageSrc: experienceImages.gravity.motorDebug,
    imageAlt: "Oscilloscope probe on motor controller PCB during bench testing",
  },
  {
    title: "Soldering & Harness Work",
    domain: "Fabrication",
    domainVariant: "mint",
    description:
      "Soldered high-current connectors, reworked wiring harnesses, and handled prototype bring-up and reflashing on embedded targets.",
    stack: ["High-current Soldering", "Wire Harness", "Reflashing"],
    imageSrc: experienceImages.gravity.soldering,
    imageAlt: "Close-up of high-current connector being soldered during harness assembly",
  },
  {
    title: "Plasma Cutting",
    domain: "Fabrication",
    domainVariant: "blush",
    description:
      "Hands-on fabrication work cutting metal stock using a plasma cutter for structural and bracket components during prototype builds.",
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
      "Produced mechanical and electrical CAD for prototype components and enclosures, supporting the hardware design process.",
    stack: ["ECAD", "MCAD"],
    imageSrc: experienceImages.gravity.cad,
    imageAlt: "CAD model of mechanical or electrical component produced at Gravity RV",
  },
  {
    title: "Zoho + Firebase Integration",
    domain: "Backend",
    domainVariant: "blue",
    description:
      "Built backend tooling to connect Zoho CRM data flows with Firebase, automating data sync and reducing manual operational overhead.",
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
      "Instructed 50+ students in JavaScript and C# (Unity), adapting lessons from beginner basics to advanced game development concepts.",
      "Led summer camps on Roblox (Lua), Minecraft modding, and robotics — hands-on, project-based learning throughout.",
      "Introduced younger learners (ages 4–7) to computational thinking and circuit logic using age-appropriate activities.",
      "Handled onboarding, troubleshooting, and equipment readiness to keep daily operations running smoothly.",
    ],
  },
  {
    title: "Brain Stimuli Project — University of Toronto — Full Stack Developer",
    location: "Toronto, ON",
    period: "Oct 2024 – Feb 2025",
    description: [
      "Built a full-stack platform integrating AI emotion models into a React + MongoDB dashboard for neuroscience research.",
      "Implemented RESTful APIs and real-time data pipelines to visualize sentiment signals reliably.",
      "Worked closely with researchers to align the UI with experiment workflows and support 90%+ model accuracy.",
    ],
  },
  {
    title: "HealthBot.ca — Co-Founder & Backend Engineer",
    location: "Remote",
    period: "May 2024 – May 2025",
    description: [
      "Co-founded a PHIPA-compliant AI health-assistant chatbot on Google Cloud; reached 100+ active users.",
      "Built backend services with role-based access control and CI/CD pipelines, cutting deploy time from 30 min to under 5 min.",
      "Project gained local media coverage for its impact.",
    ],
  },
  {
    title: "Hackathons Canada — Logistics Director",
    location: "Remote",
    period: "Jul 2024 – Feb 2025",
    description: [
      "Directed logistics for a 330+ participant university hackathon hosted at Laurier.",
      "Raised over $15,000 in sponsorships and built partnerships with top-tier tech companies.",
      "Streamlined project coordination using Notion, improving team task management by 25%.",
    ],
  },
]

export default function Experience() {
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
              Embedded firmware, BLE wireless control, mobile app development, and hands-on electrical fabrication
              for a recreation vehicle company. Worked across the full stack from ESP32 C firmware to React Native UI
              to high-current harness work on the bench.
            </p>
          </div>
        </div>

        {/* Artifact grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact) => (
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
