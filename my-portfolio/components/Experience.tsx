import Section from "./Section"
import Timeline from "./Timeline"

export default function Experience() {
  const experiences = [
    {
      title: "Code Ninjas — Instructor (Sensei)",
      location: "Oakville, ON",
      period: "Sep 2024 – Present",
      description: [
        "Taught JavaScript & C# (Unity) to 50+ students; adapted core concepts for younger learners.",
        "Introduced basic circuit logic and problem-solving frameworks (ages 4–7).",
        "Supported daily operations and equipment readiness.",
      ],
    },
    {
      title: "Brain Stimuli Project — University of Toronto — Full Stack Developer",
      location: "Toronto, ON",
      period: "Oct 2024 – Feb 2025",
      description: [
        "Engineered full-stack AI emotion recognition tool using React & MongoDB for neuroscience trials.",
        "Built data pipelines and signal visualization via JavaScript & REST APIs.",
      ],
    },
  ]

  return (
    <Section id="experience" title="Experience" accent="mint">
      <Timeline items={experiences} />
    </Section>
  )
}
