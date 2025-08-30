import Section from "./Section"
import Timeline from "./Timeline"

// Edit the expreinces to sound more human also include hackahtons canada also AI Health 
export default function Experience() {
  // can we say boasted enrollement here? 
  const experiences = [
   {
      title: "Code Ninjas — Instructor (Sensei)",
      location: "Oakville, ON",
      period: "Sep 2024 – Aug 2025",
      description: [
        "Instructed 50+ students in JavaScript and C# (Unity), adapting lessons from beginner basics to advanced game development concepts.",
        "Completed and taught curriculum through the Unity Belts, mentoring higher-level projects and debugging complex issues.",
        "Led summer camps on Roblox (Lua), Minecraft modding, and robotics, fostering hands-on, project-based learning experiences.",
        "Introduced younger learners (ages 4–7) to computational thinking and circuit logic using age-appropriate problem-solving activities.",
        "Handled onboarding, troubleshooting, and equipment readiness to ensure smooth daily operations in the dojo."
      ],
    },

    {
      title: "Brain Stimuli Project — University of Toronto — Full Stack Developer",
      location: "Toronto, ON",
      period: "Oct 2024 – Feb 2025",
      description: [
        "Developed a full-stack web platform integrating existing AI emotion models into an interactive React + MongoDB dashboard for neuroscience research.",
        "Implemented RESTful APIs and real-time data pipelines to visualize sentiment signals with clarity and reliability.",
        "Collaborated with researchers to refine UI/UX, ensuring dashboards aligned with experiment workflows and supported 90%+ model accuracy.",
      ],
    },
      {
      title: "HealthBot.ca — Co-Founder & Backend Engineer",
      location: "Remote",
      period: "May 2024 – May 2025",
      description: [
        "Co-founded a PHIPA-compliant AI health-assistant chatbot deployed on Google Cloud, reaching 100+ active users.",
        "Implemented backend services with role-based access control and CI/CD pipelines, reducing deployment time from 30 minutes to under 5 minutes.",
        "Fixed a critical frontend integration issue with ImageKit by restructuring React components and configuring environment variables, enabling secure image uploads.",
        "Project gained local media coverage and was featured in a news article highlighting its impact and potential."
      ],
    },
    {
      title: "Hackathons Canada — Logistics Director",
      location: "Remote",
      period: "Jul 2024 – Feb 2025",
      description: [
        "Directed logistics and operations for a 330+ participant university hackathon hosted at Laurier.",
        "Raised over $15,000 in sponsorships and built partnerships with top-tier tech companies.",
        "Streamlined project coordination using Notion, improving task management and team efficiency by 25%.",
        "Designed and managed the official Discord server, enabling smooth communication between sponsors, mentors, teams, and hackers throughout the event.",
      ],
    },


  ]

  return (
    <Section id="experience" title="Experience" accent="mint">
      <Timeline items={experiences} />
    </Section>
  )
}
