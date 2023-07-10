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
          <div className="flex w-full flex-col gap-20">
            <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end">
              <Hero />
              <div className="flex max-w-[400px] flex-col gap-8">
                <p className="text-xl leading-[1.2] text-clr-muted">
                  We help{" "}
                  <span className="font-medium underline">Fast Growth</span>{" "}
                  Teams Scale Their Design Roadmaps At Lightning Speeds
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Btncta name="Get a Quote" to="/contact" />
                </div>
              </div>
            </div>
            <video
              className="h-full min-h-[300px] w-full overflow-hidden rounded-[14px] bg-clr-border/20 object-cover md:min-h-[600px] lg:rounded-[40px]"
              playsInline
              autoPlay
              loop
              muted
            >
              <source src="/video/agency.mp4" type="video/mp4" />
            </video>
          </div>
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
