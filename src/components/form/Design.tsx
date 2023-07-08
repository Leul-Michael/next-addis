import React from "react"
import Checkbox from "../inputs/Checkbox"
import { BsArrowRightCircleFill } from "react-icons/bs"

const Design = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
      <h2 className="max-w-[900px] font-serif text-[2rem] font-semibold leading-none">
        UI / UX Design
      </h2>
      <Checkbox label="UI/UX design requirements" id="design" />
      <Checkbox label="Responsive Design" id="responsive" />
      <Checkbox label="Wireframes and mockups" id="mockup" />
      <Checkbox label="Prototyping" id="prototype" />
      <Checkbox label="User testing" id="testing" />
      <Checkbox label="Animation and interactivity" id="animation" />
      <Checkbox label="Branding" id="branding" />
      <Checkbox label="Support and maintenance" id="maintenance" />
      <div className="flex flex-col items-start gap-5 sm:grid sm:grid-cols-[250px_1fr] sm:items-center">
        <label htmlFor="revision" className="capitalize">
          Design revisions
        </label>
        <input
          className="w-full max-w-[200px] rounded-[6px] border border-clr-border bg-transparent p-2 outline-none"
          type="number"
          name="revision"
          id="revision"
          min={1}
          max={50}
        />
      </div>
      <button
        type="submit"
        className={`btn-cta group my-8 flex min-w-[200px] items-center justify-between gap-4 self-start px-5 py-[0.85rem] hover:opacity-80`}
      >
        <span>Calculate Price</span>
        <BsArrowRightCircleFill size={22} />
      </button>
    </form>
  )
}

export default Design
