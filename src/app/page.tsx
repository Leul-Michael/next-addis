import Btncta from "@/components/Btncta"
import About from "@/components/hero/About"
import Blog from "@/components/hero/Blog"
import Contact from "@/components/hero/Contact"
import Footer from "@/components/hero/Footer"
import Project from "@/components/hero/Project"
import Services from "@/components/hero/Services"
import Technology from "@/components/hero/Technology"

export default function Home() {
  return (
    <>
      <video
        className="hero__video"
        width="100%"
        height="100%"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="main-container flex flex-col rounded-[0px_0px_50px_50px]">
        <section className="hero flex flex-col items-start justify-end pb-32 md:justify-center md:py-16">
          <div className="flex w-full max-w-[650px] flex-col gap-8">
            <h1 className="font-title font-serif font-bold leading-none">
              Digital Innovation You Need to Build, Scale & Grow.
            </h1>
            <p className="hero-text text-xl leading-[1.2] text-clr-muted">
              We help <span className="font-medium underline">Fast Growth</span>{" "}
              Teams Scale Their Design Roadmaps At Lightning Speeds
            </p>
            <Btncta name="Get a quote" to="/" />
          </div>
        </section>
        {/* About section */}
        <About />
        {/* Projects Section */}
        <Project />
        {/* Technology Section */}
        <Technology />
        {/* Services Section */}
        <Services />
        {/* Blog Section */}
        <Blog />
        {/* Contact section */}
        <Contact />
      </div>
      {/* Footer Section */}
      <Footer />
    </>
  )
}
