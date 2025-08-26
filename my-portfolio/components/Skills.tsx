import Section from "./Section"
import Tag from "./Tag"

export default function Skills() {
  const skillCategories = [
    {
      category: "Hardware",
      skills: [
        "Circuit Design",
        "LTspice",
        "Multimeter Use",
        "Soldering",
        "Power Systems",
        "Battery Management",
        "Digital Logic",
      ],
    },
    {
      category: "Software",
      skills: ["JavaScript", "Python", "C", "Bash", "SQL"],
    },
    {
      category: "Tools",
      skills: ["LTspice", "Onshape", "Git", "VS Code", "Visual Studio", "Notion", "Figma"],
    },
    {
      category: "Frameworks",
      skills: ["React.js", "Node.js", "Unity (C#)", "Express.js"],
    },
    {
      category: "Other",
      skills: ["Microsoft Office", "Project Coordination", "CAD Standards", "Technical Writing"],
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
