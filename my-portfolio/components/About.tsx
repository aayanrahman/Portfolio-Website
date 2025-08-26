import Section from "./Section"

export default function About() {
  return (
    <Section id="about" title="About" accent="mint">
      <div className="max-w-3xl">
        <p className="text-lg leading-relaxed text-[#6B6B6B]">
          I'm a first-year Electrical Engineering student at the University of Waterloo, passionate about building
          systems that bridge the digital and physical worlds. My interests span high-speed digital design, embedded
          systems, RF/FPGA development, and PCB design using tools like KiCad and LTspice. When I'm not debugging
          circuits or writing code, you'll find me working on projects that solve real problems—from race car electrical
          systems to AI-powered applications.
        </p>
      </div>
    </Section>
  )
}
