"use client"

import { useEffect, useRef } from "react"
import ServiceExcerpt from "../excerpts/ServiceExcerpt"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Services = () => {
  const servicesWrapper = useRef<HTMLScriptElement | null>(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const steps = gsap.utils.toArray("#step-wrapper")

    const ctx = gsap.context(() => {
      steps.forEach((step: any, index: number) => {
        gsap.to(step, {
          scrollTrigger: {
            trigger: step,
            pin: true,
            start: "top 5%",
            end: () =>
              steps.length === index + 1
                ? `${step?.offsetHight}`
                : `bottom -${(steps.length - (index + 2)) * 100}%`,
            pinSpacing: false,
          },
        })
      })
    }, servicesWrapper)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={servicesWrapper}
      className="flex h-full w-full flex-col gap-16 py-20"
    >
      <div className="flex max-w-[600px] flex-col gap-8">
        <h1 className="font-subtitle font-serif font-semibold leading-none">
          Services.
        </h1>
        <p className="text-xl leading-[1.2] text-clr-muted">
          We unite design, technology and the brightest ideas to deliver
          sustainable, sharp,{" "}
          <span className="font-medium underline">aesthetic</span> and{" "}
          <span className="font-medium underline">high-functioning</span>{" "}
          products.
        </p>
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
