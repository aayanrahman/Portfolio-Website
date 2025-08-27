"use client"

import Section from "./Section"
import Card from "./Card"
import Tag from "./Tag"
import { useState } from "react"

interface Project {
  title: string
  description: string[]
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  detailsUrl?: string
  date?: string
  period?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Waterloo Electrathon Competition",
      period: "Oct 2024 – May 2025",
      tags: ["LTspice", "Onshape", "Soldering", "Battery Systems"],
      description: [
        "Led electrical design of single-seat race car; authored wiring diagram, BOM, and failure-mode checklist.",
        "Selected optimal 2.5kW BLDC motor via torque-speed analysis → ~12% efficiency improvement over baseline.",
        "Designed 12V SLA battery system with 100A ANL fuse sizing based on surge current & safety margins.",
        "Simulated PWM control, fuse heating, and voltage drops in LTspice; optimized drivetrain ratio for 40 km/h target speed.",
      ],
      demoUrl: "https://github.com/aayan-rahman/electrathon-design",
    },
    {
      title: "UofT Hacks — ProteccAPI",
      period: "Jan 2025",
      tags: ["Node.js", "Git Hooks", "Regex"],
      description: [
        "Built a Git-integrated package scanner preventing secret/API key leaks pre-deployment.",
        "Integrated validation directly into developer workflows.",
      ],
      demoUrl: "https://www.npmjs.com/package/proteccapi",
      githubUrl: "https://github.com/aayanrahman/proteccapi",
    },
    {
      title: "Hack The North — Indoor Nav & Heatmap",
      period: "Sep 2024",
      tags: ["React.js", "DeckGL", "Mappedin API"],
      description: [
        "Indoor navigation + activity heatmap for event productivity tracking.",
        "Live user data fused with floorplan visualizations (DeckGL + custom UI).",
      ],
      demoUrl: "https://devpost.com/software/cooked-or-cooking",
      githubUrl: "https://github.com/ultratrikx/cooked-or-cooking",
    },
    {
      title: "Raspberry Pi Athan Player",
      period: "Personal Project",
      tags: ["Python", "systemd", "VLC", "Bash"],
      description: [
        "Plays Athan MP3 automatically at prayer times; runs fully offline.",
        "Built-in Ramadan 2025 timetable (editable), autostarts via systemd, logs events to /home/pi/athan/athan_log.txt.",
      ],
      githubUrl: "https://github.com/aayanrahman/Raspberry-Pi-Athan-Player",
    },
    {
      title: '"Skibidi Brainrot" Minecraft Mod',
      period: "Personal Project",
      tags: ["Minecraft 1.21", "Fabric"],
      description: [
        "Low Taper Fade Helmet (growth effect), Skibidi Potion (random buffs/debuffs), Ohio Mode (2x speed).",
        "Fanum Tax (inventory drain), Balkan Rage Potion (Strength III, Speed II, Blindness).",
        "1000+ Downloads on Modrinth (Minecraft mod repository).",
      ],
      demoUrl: "https://modrinth.com/mod/skibidi-brainrot-mod",
      githubUrl: "https://github.com/aayanrahman/brainrot-minecraft-mod-1.21",
    },
    {
      title: "MindFlow — AI Therapy App",
      period: "Personal Project",
      tags: ["React", "Vite", "CSS", "Gemini AI"],
      description: [
        "AI-powered empathetic chat + journaling, guided exercises (CBT/mindfulness), local prototype.",
        "Emphasis on privacy and simple UI; HMR dev experience via Vite.",
      ],
      demoUrl: "https://mymindflow.co/",
      githubUrl: "https://github.com/aayanrahman/MyMindFlow",
    },
  ]

  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <Section id="projects" title="Projects" accent="blue">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg" aria-hidden="true">
                      ⚡
                    </span>
                    <h3 className="font-serif font-semibold text-lg text-balance">{project.title}</h3>
                  </div>
                  <p className="text-sm text-[#6B6B6B] italic">{project.period}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} variant="blue">
                    {tag}
                  </Tag>
                ))}
              </div>

              <div className="space-y-2">
                {project.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-sm text-[#6B6B6B] leading-relaxed">
                    • {desc}
                  </p>
                ))}
              </div>

              {project.title === "Raspberry Pi Athan Player" && (
                <div className="border-t border-[#E8E8E8] pt-3">
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="text-sm text-[#6B6B6B] hover:text-[#4A4A4A] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#B8E6B8] focus:ring-offset-1 rounded"
                    aria-expanded={expandedProject === index}
                  >
                    {expandedProject === index ? "Hide" : "Show"} usage commands
                  </button>
                  {expandedProject === index && (
                    <div className="mt-2 p-3 bg-[#FAFAFA] rounded-lg border border-[#E8E8E8]">
                      <pre className="text-xs text-[#6B6B6B] font-mono whitespace-pre-wrap">
                        {`# Setup
sudo systemctl enable athan.service
sudo systemctl start athan.service

# Check status
systemctl status athan.service

# View logs
tail -f /home/pi/athan/athan_log.txt`}
                      </pre>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center py-1.5 px-3 text-sm border border-[#D0D0D0] rounded-xl text-[#6B6B6B] hover:text-[#4A4A4A] hover:border-[#B0B0B0] hover:bg-[#FAFAFA] transition-all duration-150 hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#B8E6B8] focus:ring-offset-1 min-h-[44px] sm:min-h-0"
                    aria-label={`View demo of ${project.title}`}
                  >
                    Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center py-1.5 px-3 text-sm border border-[#D0D0D0] rounded-xl text-[#6B6B6B] hover:text-[#4A4A4A] hover:border-[#B0B0B0] hover:bg-[#FAFAFA] transition-all duration-150 hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#B8E6B8] focus:ring-offset-1 min-h-[44px] sm:min-h-0"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    GitHub
                  </a>
                )}
                {project.detailsUrl && (
                  <a
                    href={project.detailsUrl}
                    className="inline-flex items-center justify-center py-1.5 px-3 text-sm border border-[#D0D0D0] rounded-xl text-[#6B6B6B] hover:text-[#4A4A4A] hover:border-[#B0B0B0] hover:bg-[#FAFAFA] transition-all duration-150 hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#B8E6B8] focus:ring-offset-1 min-h-[44px] sm:min-h-0"
                    aria-label={`View details for ${project.title}`}
                  >
                    Details
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
