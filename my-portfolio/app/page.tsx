import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
