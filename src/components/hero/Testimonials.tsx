import React from "react"
import TestimonialsExcerpt from "../excerpts/TestimonialsExcerpt"
import Btncta from "../Btncta"

const Testimonials = () => {
  return (
    <section className="flex h-full w-full flex-col gap-16 overflow-hidden py-16">
      <div className="flex flex-col gap-8">
        <h1 className="font-subtitle max-w-[450px] font-serif font-semibold leading-none">
          What our clients say.
        </h1>
        <div className="grid w-full grid-cols-blog gap-8 border-t-2 border-clr-border pt-20 lg:gap-16">
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
        </div>
        <Btncta
          className="btn-cta-outline mt-8"
          to="/testimonial"
          name="View Testimonials"
        />
      </div>
    </section>
  )
}

export default Testimonials
