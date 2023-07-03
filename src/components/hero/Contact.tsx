import React from "react"
import Btncta from "../Btncta"

const Contact = () => {
  return (
    <section className="flex flex-col gap-16 py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
        <div className="flex w-full flex-col gap-8">
          <h1 className="font-title font-serif font-bold leading-none">
            Let&apos;s work together.
          </h1>
          <p className="max-w-[600px] text-xl leading-[1.2] text-clr-muted">
            We engage in projects of varying scales - from helping startups to
            global brands. Get in touch to see how we can help you.
          </p>
        </div>
        <form className="flex w-full flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className="h-[45px] w-full max-w-[500px] rounded-[6px] border border-clr-border bg-transparent px-4 outline-none focus:border-clr-accent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="your@gmail.com"
              className="h-[45px] w-full max-w-[500px] rounded-[6px] border border-clr-border bg-transparent px-4 outline-none focus:border-clr-accent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="h-[150px] w-full max-w-[500px] resize-y rounded-[6px] border border-clr-border bg-transparent p-4 outline-none focus:border-clr-accent"
            />
          </div>
          <Btncta to="/" name="Send Message" />
        </form>
      </div>
    </section>
  )
}

export default Contact
