import Btncta from "@/components/Btncta"
import ParallaxText from "@/components/ParallaxText"
import About from "@/components/hero/About"
import Blog from "@/components/hero/Blog"
import Contact from "@/components/hero/Contact"
import Hero from "@/components/hero/Hero"
import Pricing from "@/components/hero/Pricing"
import Process from "@/components/hero/Process"
import Project from "@/components/hero/Project"
import Services from "@/components/hero/Services"
import Technology from "@/components/hero/Technology"
import Testimonials from "@/components/hero/Testimonials"

export default function Home() {
  return (
    <>
      <div
        id="hero"
        className="main-container flex flex-col rounded-[0px_0px_50px_50px]"
      >
        <section className="hero flex flex-col items-start justify-end pb-20 pt-40 md:justify-center md:py-16">
          <Hero />
        </section>
        {/* About section */}
        <About />
        {/* Services Section */}
        <Services />
        {/* Process Section */}
        <Process />
        {/* Projects Section */}
        <Project />
        {/* Technology Section */}
        <Technology />
        {/* Testimonials Section */}
        <Testimonials />
        {/* Pricing Section */}
        <Pricing />
        {/* Blog Section */}
        <Blog />
      </div>
      <ParallaxText baseVelocity={5} clone={6}>
        Next Addis
      </ParallaxText>
      <ParallaxText baseVelocity={-5}>Let&apos;s work together</ParallaxText>
      {/* Contact section */}
      <Contact />
    </>
  )
}
