import React from "react"
import Btncta from "../Btncta"
import ServiceExcerpt from "../excerpts/ServiceExcerpt"

const Services = () => {
  return (
    <section className="flex flex-col gap-24 py-20">
      <div className="flex items-start justify-between gap-16">
        <p className="max-w-[400px] text-lg leading-[1.2] text-clr-muted">
          Never let a bad design decesions ruin your business. We are here
          Transforming brands for growth
        </p>
        <div className="flex flex-col gap-14">
          <p className="max-w-[650px] text-4xl leading-[1.2] text-clr-muted">
            We unite design, technology and the brightest ideas to deliver
            sustainable, sharp,{" "}
            <span className="font-medium underline">aesthetic</span> and{" "}
            <span className="font-medium underline">high-functioning</span>{" "}
            products.
          </p>
        </div>
      </div>
      <ServiceExcerpt count="01" name="UI / UX Design." bg="bg-clr-sky" />
      <ServiceExcerpt count="02" name="Web developement." bg="bg-clr-green" />
      <ServiceExcerpt
        count="03"
        name="Mobile App developement."
        bg="bg-clr-purple"
      />
      <ServiceExcerpt
        count="04"
        name="Custom Software developement."
        bg="bg-clr-yellow"
      />
    </section>
  )
}

export default Services
