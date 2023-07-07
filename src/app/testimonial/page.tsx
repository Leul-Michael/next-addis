import ContactExcerpt from "@/components/excerpts/ContactExcerpt"
import TestimonialsExcerpt from "@/components/excerpts/TestimonialsExcerpt"
import React from "react"

const Page = () => {
  return (
    <section className="main-container relative flex flex-col pt-16">
      <div className="flex flex-col gap-8 py-16 md:gap-14">
        <h1 className="font-title relative self-center text-center font-serif font-semibold leading-none">
          Testimonials{" "}
          <span className="absolute -right-10 -top-3 flex h-[35px] w-[35px] items-center justify-center rounded-[100%] border border-clr-border font-sans text-sm">
            6
          </span>
        </h1>
        <div className="grid grid-cols-blog gap-8 py-20 lg:gap-16">
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
          <TestimonialsExcerpt />
        </div>
      </div>
      <ContactExcerpt className="mb-32 mt-4" />
    </section>
  )
}

export default Page
