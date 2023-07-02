import React from "react"
import Btncta from "../Btncta"

const About = () => {
  return (
    <section className="flex flex-col gap-16 py-20">
      <div className="flex items-start justify-between gap-16">
        <p className="max-w-[400px] text-lg leading-[1.2] text-clr-muted">
          Never let a bad design decesions ruin your business. We are here
          Transforming brands for growth
        </p>
        <div className="flex flex-col gap-14">
          <p className="max-w-[650px] text-4xl leading-[1.2] text-clr-muted">
            We are a{" "}
            <span className="font-medium underline">creative agency</span>{" "}
            working with brands - building insightful strategy, creating unique
            designs and crafting experiences that bring positive change and
            value.
          </p>
          <Btncta to="/" name="More about us" />
        </div>
      </div>
    </section>
  )
}

export default About