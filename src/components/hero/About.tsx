import React from "react"
import Btncta from "../Btncta"

const About = () => {
  return (
    <section className="flex flex-col gap-16 py-20">
      <div className="flex flex-col items-start justify-center gap-16 lg:flex-row lg:justify-between">
        <p className="max-w-[400px] text-lg leading-[1.2] text-clr-muted">
          Never let a bad design decesions ruin your business. We are here
          Transforming brands for growth
        </p>
        <div className="flex flex-col gap-14">
          <p className="max-w-[650px] text-2xl leading-[1.2] text-clr-muted lg:text-4xl">
            We are a{" "}
            <span className="font-medium underline">creative agency</span>{" "}
            working with brands - building insightful strategy, creating unique
            designs and crafting experiences that bring positive change and
            value.
          </p>
          <Btncta className="btn-cta-outline" to="/" name="More About Us" />
        </div>
      </div>
    </section>
  )
}

export default About
