import React from "react"
import Btncta from "../Btncta"

const Pricing = () => {
  return (
    <section className="my-20 flex flex-col gap-16 rounded-[14px] bg-clr-purple px-8 py-12 lg:p-12">
      <div className="mx-auto flex max-w-[600px] flex-col items-center justify-center gap-8 bg-clr-purple text-center">
        <h1 className="font-subtitle hero-text-dark font-serif font-semibold leading-none">
          Customize a plan that fits your need.
        </h1>
        <p className="hero-text-dark text-lg leading-[1.2] text-clr-font">
          Get to The{" "}
          <span className="font-medium underline">Price of Your Liking</span> By
          Customizing Based on Languages Used, Number of Pages and So on!
        </p>
        <Btncta className="self-center" to="/" name="Customize Pricing" />
      </div>
    </section>
  )
}

export default Pricing
