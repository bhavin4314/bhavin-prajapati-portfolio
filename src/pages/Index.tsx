import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { HowIBuild } from "@/components/HowIBuild"
import { Skills } from "@/components/Skills"
import { Education } from "@/components/Education"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="px-5 sm:px-8 lg:ml-60 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-4xl">
        <Hero />
        <About />
        <Projects />
        <HowIBuild />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  </div>
)

export default Index
