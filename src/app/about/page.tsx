"use client"

import { useState } from "react"
import Slider from "@/components/slider/Slider"
import Image from "next/image"
import { BsArrowDown } from "react-icons/bs"
import ContactExcerpt from "@/components/excerpts/ContactExcerpt"

const Page = () => {
  return (
    <section className="main-container relative flex flex-col pt-16">
      <div className="flex flex-col gap-8 pt-16">
        <div className="flex flex-col gap-4">
          <p className="text-xs text-clr-muted">who we are</p>
          <h1 className="font-title max-w-[900px] font-serif font-semibold leading-none">
            Collaborate for Better
          </h1>
          <h1 className="font-subtitle max-w-[900px] font-serif font-semibold leading-none">
            With us
          </h1>
        </div>
        <div className="flex w-full flex-col gap-20 border-t-2 border-clr-border pb-20 pt-28">
          <h2 className="max-w-[800px] text-2xl capitalize leading-[1.2] lg:text-4xl">
            We are a{" "}
            <span className="font-medium underline">creative agency</span>{" "}
            working with brands - building insightful strategy, creating unique
            designs and crafting experiences that bring positive change and
            value.
          </h2>
          <div className="flex w-full flex-col gap-16 lg:flex-row">
            <div className="flex flex-col gap-8 lg:w-[60%]">
              <div className="relative max-h-[700px] min-h-[40vh] w-full overflow-hidden rounded-[14px] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[650px]">
                <Image
                  src="/agency.jpg"
                  alt="the agency"
                  fill
                  sizes="(max-width: 0px) 100vw"
                  className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:w-[40%]">
              <h2 className="max-w-[400px] text-base capitalize leading-[1.2] lg:text-lg">
                We are a{" "}
                <span className="font-medium underline">creative agency</span>{" "}
                working with brands - building insightful strategy, creating
                unique designs and crafting experiences that bring positive
                change and value.
              </h2>
            </div>
          </div>
          <div className="mx-auto flex max-w-[800px] items-center justify-center py-16">
            <h2 className="text-center font-serif text-2xl capitalize leading-[1.2] lg:text-4xl">
              <span className="font-medium underline">NextADDIS</span> Agency
              represents the complicity and work of passionate developeres, who
              joinforces to design and build the future,{" "}
              <span className="font-medium underline">WEB.</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-12 pb-32">
          <h1 className="font-subtitle mx-auto max-w-[900px] text-center font-serif font-semibold leading-none">
            Our Values
          </h1>
          <div className="flex flex-col">
            <Values count={1} title="Stay balanced" />
            <Values count={2} title="Own Your Work" />
            <Values count={3} title="Be the teammate you want" />
            <Values count={4} title="Results matter" />
            <Values count={5} title="Build to last" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-subtitle max-w-[450px] font-serif font-semibold leading-none">
            Meat The Team.
          </h1>
          <Slider />
        </div>
      </div>
      <ContactExcerpt className="mb-28" />
    </section>
  )
}

export default Page

const Values = ({
  count,
  title,
  desc,
}: {
  count: number
  title: string
  desc?: string
}) => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col border-b border-clr-border">
      <div
        tabIndex={1}
        onBlur={() => setShow(false)}
        onClick={() => setShow((prev) => !prev)}
        className="group relative flex cursor-pointer items-center justify-between px-4 py-5"
      >
        <span className="custom-transition absolute bottom-0 left-0 -z-[1] h-0 w-full bg-clr-purple duration-300 group-hover:h-full"></span>
        <p className="hidden max-w-[400px] text-2xl capitalize leading-[1.2] group-hover:text-[#151515] sm:flex lg:text-[1.8rem]">
          0{count} /
        </p>
        <p className="max-w-[400px] text-2xl capitalize leading-[1.2] group-hover:text-[#151515] lg:text-[1.8rem]">
          {title}
        </p>
        <BsArrowDown
          size={20}
          className={`custom-transition text-clr-muted duration-500 group-hover:text-[#151515] ${
            show ? "rotate-180" : " rotate-0"
          }`}
        />
      </div>
      <div
        className={`custom-transition mx-auto grid w-full max-w-[600px] duration-500 ${
          show ? "grid-rows-[1fr] py-10" : "grid-rows-[0fr]"
        } text-center `}
      >
        <p className="overflow-hidden text-base capitalize leading-[1.2] lg:text-lg">
          We are a working with brands - building insightful strategy, creating
          unique designs and crafting experiences that bring positive change and
          value.
        </p>
      </div>
    </div>
  )
}
