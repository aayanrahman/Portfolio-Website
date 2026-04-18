import Section from "./Section"
import Tag from "./Tag"

export default function Skills() {
  const skillCategories = [
    {
      category: "Hardware & Electrical",
      skills: [
        "Circuit Design",
        "PCB Design",
        "Altium Designer",
        "KiCad",
        "EasyEDA",
        "LTspice Simulation",
        "Power Systems",
        "Battery Management",
        "Digital Logic",
        "Oscilloscope / Bench Testing",
        "Multimeter Use",
      ],
    },
    {
      category: "Embedded & Firmware",
      skills: [
        "Embedded C",
        "ESP32",
        "BLE / Bluetooth",
        "GATT Characteristics",
        "Signal Tracing",
        "Reflashing",
      ],
    },
    {
      category: "Fabrication",
      skills: [
        "High-current Soldering",
        "Wiring Harness",
        "Plasma Cutting",
        "Welding",
        "JLCPCB Manufacturing",
      ],
    },
    {
      category: "Software",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "Bash",
        "Lua",
      ],
    },
    {
      category: "Frameworks & Mobile",
      skills: [
        "React Native",
        "React.js",
        "Next.js",
        "Node.js",
        "Unity (C#)",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Firebase",
        "Zoho",
        "Supabase",
        "Git & GitHub",
        "Onshape",
        "VS Code",
        "Notion",
        "Figma",
      ],
    },
    {
      category: "Other",
      skills: [
        "Project Coordination",
        "Technical Writing",
        "CAD Standards",
      ],
    },
  ]

  return (
    <Section id="skills" title="Skills" accent="blush">
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-serif font-semibold text-lg">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Tag key={skillIndex} variant="mint">
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
