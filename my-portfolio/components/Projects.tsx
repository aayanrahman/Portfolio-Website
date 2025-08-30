"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import Card from "./Card";
import Tag from "./Tag";

type ProjectImage = {
  src: string;      // e.g. "/projects/electrathon/wiring.jpg"
  alt: string;      // short alt
  cap?: string;     // small caption
};

interface Project {
  title: string;
  description: string[];
  tags: string[];
  period?: string;
  demoUrl?: string;
  githubUrl?: string;
  websiteURL?: string;
  detailsUrl?: string;
  images?: ProjectImage[];
}

// mention winning the award and assigning with manufacturing some of the parts like the roll bar etc
// NFC business card mention how you used the bom and shipped it to jlcpcb to manufacture

export default function Projects() {
  const projects: Project[] = [
// helped them win the major award by the way by keeping track of all the cad design changes in a log book (just include photo )
    {
      title: "Waterloo Electrathon Competition",
      period: "Oct 2024 – May 2025",
      tags: ["LTspice", "Onshape", "Welding", "Battery Systems", "Website"],
      description: [
        "Led electrical design of a single-seat race car; authored wiring diagram, BOM, and failure-mode checklist.",
        "Selected an optimal 2.5 kW BLDC motor via torque–speed analysis → ~12% efficiency improvement over baseline.",
        "Designed a 12 V SLA battery system with a 100 A ANL fuse sized by surge-current and safety margins.",
        "Documented CAD design changes in a detailed engineering logbook, contributing to the team winning the Dennis Weishar Engineering Design Award.",
        "Hands-on fabrication: learned to weld and helped rivet the chassis/frame.",
        "Coded the official team website for updates and documentation.",
      ],
      demoUrl:
        "https://drive.google.com/drive/folders/1QTOu6MFC7aJCR5dkMZQu8-X7T1synJBI?usp=sharing",
      githubUrl: "https://www.wossevc.ca/",
      images: [
        { src: "/projects/electrathon/TitleFight.jpeg",  alt: "Race car in action", cap: "War Rig — Race Day" },
        { src: "/projects/electrathon/weld.jpg", alt: "Welding the chassis", cap: "Frame welding practice" },
        { src: "/projects/electrathon/award.jpeg", alt: "Dennis Weishar Engineering Design Award", cap: "Award for Engineering Design" },
        { src: "/projects/electrathon/website.png", alt: "Team website design", cap: "Lightweight site for updates" },
        { src: "/projects/electrathon/image.png", alt: "Chassis drawing", cap: "Space frame design CAD" },
      ],
    },

    {
      title: "NFC Smart Business Card",
      period: "2025",
      tags: ["NFC", "React", "Next.js", "Tailwind CSS", "Vercel", "Domain Routing"],
      description: [
        "Built a minimalist NFC card that encodes a URL to my portfolio and social links, accessible with any NFC-enabled device.",
        "Portfolio site engineered with Next.js and Tailwind CSS, deployed on Vercel with a custom domain migration.",
        "Deployed via Vercel CLI with a custom Namecheap domain configured through Vercel DNS, automatically secured with HTTPS",
        "Demonstrates a seamless connection between a physical NFC medium and a cloud-hosted digital portfolio."
      ],
      images: [
        { src: "/projects/nfc/Card.png", alt: "NFC card front", cap: "Front (matte stock)" },
        { src: "/projects/nfc/card-scan.jpg", alt: "Phone scan", cap: "Tap → portfolio" },
      ],
    },
    {
      title: "UofT Hacks — ProteccAPI",
      period: "Jan 2025",
      tags: ["Node.js", "Git Hooks", "Regex", "Levenshtein Distance", "Cybersecurity"],
      description: [
        "Open-source CLI + VS Code extension to prevent API/secret leaks before deployment.",
        "Scans for hardcoded keys using regex patterns and Levenshtein distance similarity checks to catch obfuscated or slightly altered strings.",
        "Performs dependency audits and detects typosquatting in npm packages.",
        "Auto-generates .env files with .gitignore integration to streamline secure workflows.",
        "Integrated seamlessly into developer pipelines with Husky pre-commit hooks.",
        "Crossed 100+ downloads on npm and is actively maintained as an open-source package."
      ],
      demoUrl: "https://www.npmjs.com/package/proteccapi",
      githubUrl: "https://github.com/aayanrahman/proteccapi",
      images: [
        { src: "/projects/proteccapi/cli.jpg", alt: "CLI", cap: "CLI pre-commit scan" },
      ],
    },
     {
      title: "Raspberry Pi Athan Player",
      period: "Personal Project",
      tags: ["Python", "systemd", "VLC", "Bash"],
      description: [
        "Plays Athan MP3 automatically at prayer times; runs fully offline.",
        "Built-in Ramadan 2025 timetable (editable), autostarts via systemd, logs to /home/pi/athan/athan_log.txt.",
      ],
      githubUrl: "https://github.com/aayanrahman/Raspberry-Pi-Athan-Player",
      images: [
        { src: "/projects/athan/pi.jpg", alt: "Raspberry Pi", cap: "Pi setup" },
      ],
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
      images: [
        { src: "/projects/htn/map.png", alt: "Map view", cap: "DeckGL overlay" },
      ],
    },
    
    {
      title: "MindFlow — AI Therapy App",
      period: "Personal Project",
      tags: ["React", "Vite", "CSS", "Gemini AI"],
      description: [
        "AI-powered empathetic chat + journaling, guided exercises (CBT/mindfulness).",
        "Emphasis on privacy and simple UI; HMR dev experience via Vite.",
      ],
      demoUrl: "https://mymindflow.co/",
      githubUrl: "https://github.com/aayanrahman/MyMindFlow",
      images: [
        { src: "/projects/mindflow/image.png", alt: "MindFlow UI", cap: "Clean UI prototype" },
      ],
    },
  ];

  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [openGallery, setOpenGallery] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <Section id="projects" title="Projects" jp="プロジェクト">
      {/* Make projects the star: wider cards & extra breathing room */}
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-xl text-balance">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-sm text-neutral-500 italic mt-0.5">
                      {project.period}
                    </p>
                  )}
                </div>
              </div>

              {/* Hero image (first) */}
              {project.images?.[0] && (
                <figure className="rounded-2xl overflow-hidden border border-[#E6E4DF] bg-[#F5F4F1]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>
                  {project.images[0].cap && (
                    <figcaption className="px-3 py-2 text-xs text-neutral-500">
                      {project.images[0].cap}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} variant="blue">
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* Description */}
              <ul className="space-y-2">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-sm text-neutral-600 leading-relaxed">
                    • {desc}
                  </li>
                ))}
              </ul>

              {/* Athan player expandable usage */}
              {project.title === "Raspberry Pi Athan Player" && (
                <div className="border-t border-[#E8E8E8] pt-3">
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="text-sm text-neutral-600 hover:text-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#CFE9CF] focus:ring-offset-1 rounded"
                    aria-expanded={expandedProject === index}
                  >
                    {expandedProject === index ? "Hide" : "Show"} usage commands
                  </button>
                  {expandedProject === index && (
                    <div className="mt-2 p-3 bg-[#FAFAFA] rounded-lg border border-[#E8E8E8]">
                      <pre className="text-xs text-neutral-600 font-mono whitespace-pre-wrap">
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

              {/* Gallery toggle */}
              {project.images && project.images.length > 1 && (
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() =>
                      setOpenGallery(openGallery === index ? null : index)
                    }
                    className="text-sm text-neutral-600 hover:text-neutral-900 underline-offset-4 hover:underline"
                  >
                    {openGallery === index
                      ? "Hide photos"
                      : `View photos (${project.images.length - 1})`}
                  </button>
                </div>
              )}

              {/* Gallery grid (excluding the first hero image) */}
              {openGallery === index && project.images && project.images.length > 1 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.images.slice(1).map((img, gi) => (
                    <figure
                      key={img.src + gi}
                      className="rounded-2xl overflow-hidden border border-[#E6E4DF] bg-[#F5F4F1]"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width:768px) 100vw, 25vw"
                        />
                      </div>
                      {img.cap && (
                        <figcaption className="px-3 py-2 text-xs text-neutral-500">
                          {img.cap}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center py-1.5 px-3 text-sm border border-[#D0D0D0] rounded-xl text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 hover:bg-[#FAFAFA] transition-all min-h-[40px]"
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
                    className="inline-flex items-center justify-center py-1.5 px-3 text-sm border border-[#D0D0D0] rounded-xl text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 hover:bg-[#FAFAFA] transition-all min-h-[40px]"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    GitHub
                  </a>
                )}
                {project.detailsUrl && (
                  <a
                    href={project.detailsUrl}
                    className="inline-flex items-center justify-center py-1.5 px-3 text-sm border border-[#D0D0D0] rounded-xl text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 hover:bg-[#FAFAFA] transition-all min-h-[40px]"
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
  );
}
