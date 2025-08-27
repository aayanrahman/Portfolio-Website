import Section from "./Section"

export default function Contact() {
  const contactInfo = [
    
    { label: "Email", value: "aayan.s.rahman@gmail.com", href: "mailto:aayan.s.rahman@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/aayanrahman", href: "https://www.linkedin.com/in/aayan-rahman/" },
    { label: "GitHub", value: "github.com/aayanrahman", href: "https://github.com/aayanrahman" },
  ]

  return (
    <Section id="contact" title="Contact" accent="mint">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <p className="text-lg text-[#6B6B6B]">Say hello</p>
          <span className="text-[#BEE3D2]">☆⋆｡𖦹°‧★ᯓ★</span>
          <div className="w-2 h-2 rounded-full bg-[#BEE3D2]"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => (
            <div key={index} className="space-y-2">
              <p className="text-sm font-medium text-[#6B6B6B]">{contact.label}</p>
              <a
                href={contact.href}
                className="text-[#1B1B1B] link-hover font-medium block"
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
