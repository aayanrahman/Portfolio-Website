import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Personal from "@/components/Personal"
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
      <Personal /> {/* Added the Personal component here */}
      <Contact />
      <Footer />
    </main>
  )
}
