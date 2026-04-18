import Section from "./Section"

export default function About() {
  return (
    <Section id="about" title="About" accent="mint">
      <div className="max-w-3xl">
        <p className="text-lg leading-relaxed text-[#6B6B6B]">
          I&apos;m an Electrical Engineering student at the University of Waterloo. I just finished my first co-op at
          Gravity RV — wrote BLE firmware in C for an ESP32, built a React Native app for wireless motor control,
          and got hands-on with soldering, wiring harnesses, and plasma cutting on the bench.
          Outside of co-op I&apos;m doing hardware project work: PCB design in Altium and KiCad for Waterloo Formula
          Electric and Rocketry, and anything else where software meets something physical. The stuff that can
          actually break in satisfying ways.
        </p>
      </div>
    </Section>
  )
}