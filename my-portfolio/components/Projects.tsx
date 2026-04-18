"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import Card from "./Card";
import Tag from "./Tag";
import { projectImages } from "@/lib/images";

type ProjectImage = {
  src: string;
  alt: string;
  cap?: string;
};

interface Project {
  title: string;
  period?: string;
  tags: string[];
  what: string;
  how: string[];
  results: string[];
  demoUrl?: string;
  githubUrl?: string;
  images?: ProjectImage[];
  video?: string;
  videoAlt?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Waterloo Electrathon — Electric Race Car Power Systems",
      period: "Oct 2024 – May 2025",
      tags: ["LTspice", "BLDC Motor Analysis", "Battery Systems", "Welding"],
      what:
        "Led electrical design for a single-seat electric race car competing in the Waterloo Electrathon; owned motor selection, battery pack design, wiring diagram, and engineering documentation.",
      how: [
        "Torque–speed analysis to select optimal 2.5 kW BLDC motor",
        "Designed 12 V / 35 Ah SLA battery pack with 100 A ANL fuse sized to surge-current margins",
        "Authored full wiring diagram, BOM, and failure-mode checklist",
        "Maintained detailed CAD design-change logbook for the team",
        "Learned to weld; hands-on chassis fabrication and riveting",
      ],
      results: [
        "+15 min endurance per charge over baseline motor selection",
        "50 A peak current margin maintained across all operating conditions",
        "Team won the Dennis Weishar Engineering Design Award",
      ],
      demoUrl:
        "https://drive.google.com/drive/folders/1QTOu6MFC7aJCR5dkMZQu8-X7T1synJBI?usp=sharing",
      githubUrl: "https://www.wossevc.ca/",
      images: [
        {
          src: projectImages.electrathon.raceDay,
          alt: "Race car on track at competition",
          cap: "War Rig — Race Day",
        },
        {
          src: projectImages.electrathon.welding,
          alt: "Welding the chassis frame",
          cap: "Frame welding practice",
        },
        {
          src: projectImages.electrathon.award,
          alt: "Dennis Weishar Engineering Design Award",
          cap: "Award for Engineering Design",
        },
        {
          src: projectImages.electrathon.cad,
          alt: "Space frame CAD drawing",
          cap: "Space frame design CAD",
        },
      ],
    },
    {
      title: "Waterloo Rocketry — EGSE Redesign",
      period: "2025 – Present",
      tags: ["KiCad", "Power Systems", "ECAD", "BOM Optimization"],
      what:
        "Redesigned the Electrical Ground Support Equipment power supply to cut cost without sacrificing output, replacing a single expensive converter with dual off-the-shelf modules delivering 12 V / 30 A.",
      how: [
        "Built custom KiCad component footprints for both replacement modules",
        "Resized CB1 and selected a 30 A master fuse matched to the new current budget",
        "Updated full ECAD schematic and layout; changes currently under team review",
      ],
      results: [
        "65% BOM cost reduction on the power supply subsystem",
        "Maintained original 12 V / 30 A output spec with improved thermal headroom",
      ],
      images: [
        {
          src: projectImages.rocketry.schematic,
          alt: "KiCad schematic showing dual converter redesign for EGSE",
          cap: "EGSE power supply redesign — KiCad schematic",
        }
      ],
    },
    {
      title: "Waterloo Formula Electric — 12 V → 16 V Boost Converter PCB",
      period: "2025",
      tags: ["Altium Designer", "Power Electronics", "TI TPS43061", "EMI"],
      what:
        "Designed a two-layer synchronous boost converter PCB in Altium 365 to step up the 12 V low-voltage bus to 16 V for the Formula SAE-E car's auxiliary systems.",
      how: [
        "Selected TI TPS43061 synchronous boost controller; sized inductors and caps for 16 V output",
        "Added current sensing with overcurrent protection and 85 °C thermal shutdown via NTC",
        "PMOS/NMOS surge safeguards on input and output rails",
        "Hot-loop routing minimized switching node area for reduced EMI",
      ],
      results: [
        "~25% EMI reduction vs. initial layout iteration",
        "Full two-layer Altium 365 layout complete; undergoing design review",
      ],
      images: [
        {
          src: projectImages.formulaElectric.layout,
          alt: "Altium 365 two-layer boost converter PCB layout",
          cap: "Boost converter layout — Altium 365",
        }
      ],
    },
    {
      title: "NFC Business Card — Manufactured PCB",
      period: "2025",
      tags: ["EasyEDA", "NFC Antenna", "JLCPCB", "PCB Manufacturing"],
      what:
        "Designed and manufactured a two-layer PCB business card with an onboard NFC antenna trace that launches my portfolio on any NFC-enabled phone — no app required.",
      how: [
        "Laid out two-layer board in EasyEDA with tuned NFC antenna trace geometry",
        "Sent Gerbers to JLCPCB; received and tested manufactured boards",
        "Programmed NFC data records with NFC Tools app",
      ],
      results: [
        "Works on iOS and Android out of the box",
        "Used at networking events as a physical-to-digital handoff",
      ],
      githubUrl: "https://github.com/aayanrahman/Portfolio-Website",
      images: [
        {
          src: projectImages.nfc.card,
          alt: "NFC business card PCB front face",
          cap: "Manufactured PCB (matte finish)",
        },
        {
          src: projectImages.nfc.scan,
          alt: "Phone scanning NFC card to open portfolio",
          cap: "Tap → portfolio opens instantly",
        },
      ],
    },
  ];

  const [openGallery, setOpenGallery] = useState<number | null>(null);

  return (
    <Section id="projects" title="Projects" jp="プロジェクト">
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={project.video ? "sm:col-span-2" : ""}
          >
            <div className="space-y-4">
              {/* Header */}
              <div>
                <h3 className="font-serif font-semibold text-xl text-balance">
                  {project.title}
                </h3>
                {project.period && (
                  <p className="text-sm text-neutral-500 italic mt-0.5">
                    {project.period}
                  </p>
                )}
              </div>

              {/* Hero media — video or image */}
              {(project.video || project.images?.[0]) && (
                <figure className="rounded-2xl overflow-hidden border border-[#E6E4DF] bg-[#111]">
                  {project.video ? (
                    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label={project.videoAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <>
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={project.images![0].src}
                          alt={project.images![0].alt}
                          fill
                          className="object-cover"
                          sizes="(max-width:768px) 100vw, 50vw"
                          priority={index < 2}
                          onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            img.style.display = "none";
                            const parent = img.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-[#F5F4F1]"><span class="text-xs text-neutral-400 px-4 text-center">${project.images![0].alt}</span></div>`;
                            }
                          }}
                        />
                      </div>
                      {project.images![0].cap && (
                        <figcaption className="px-3 py-2 text-xs text-neutral-500 bg-[#F5F4F1]">
                          {project.images![0].cap}
                        </figcaption>
                      )}
                    </>
                  )}
                </figure>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Tag key={i} variant="blue">
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* What / How / Results */}
              <div className={`space-y-3 ${project.video ? "sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0" : ""}`}>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 block mb-1">
                    What
                  </span>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {project.what}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 block mb-1">
                    How
                  </span>
                  <ul className="space-y-1">
                    {project.how.map((item, i) => (
                      <li key={i} className="text-sm text-neutral-600 leading-relaxed flex gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 block mb-1">
                    Results
                  </span>
                  <ul className="space-y-1">
                    {project.results.map((item, i) => (
                      <li key={i} className="text-sm text-neutral-600 leading-relaxed flex gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#BEE3D2]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Gallery toggle (image-only projects) */}
              {!project.video && project.images && project.images.length > 1 && (
                <div className="pt-1">
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

              {/* Gallery toggle (video projects with additional images) */}
              {project.video && project.images && project.images.length > 0 && (
                <div className="pt-1">
                  <button
                    onClick={() =>
                      setOpenGallery(openGallery === index ? null : index)
                    }
                    className="text-sm text-neutral-600 hover:text-neutral-900 underline-offset-4 hover:underline"
                  >
                    {openGallery === index
                      ? "Hide photos"
                      : `View photos (${project.images.length})`}
                  </button>
                </div>
              )}

              {/* Gallery grid */}
              {openGallery === index && project.images && project.images.length > 0 && (
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                  {(project.video ? project.images : project.images.slice(1)).map((img, gi) => (
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
                          sizes="(max-width:768px) 50vw, 25vw"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            el.style.display = "none";
                            const parent = el.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-xs text-neutral-400 px-4 text-center">${img.alt}</span></div>`;
                            }
                          }}
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
                    aria-label={`View GitHub for ${project.title}`}
                  >
                    GitHub
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
