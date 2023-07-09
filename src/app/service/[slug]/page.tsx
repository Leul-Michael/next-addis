"use client"

import ContactExcerpt from "@/components/excerpts/ContactExcerpt"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BsArrowDown } from "react-icons/bs"

const Page = () => {
  return (
    <>
      <section className="main-container relative flex flex-col pt-16">
        <div className="flex flex-col gap-8 py-16 md:gap-14">
          <div className="flex flex-col gap-4">
            <p className="text-xs text-clr-muted">service / 01</p>
            <h1 className="font-title max-w-[900px] font-serif font-semibold leading-none">
              Mobile App Developement
            </h1>
          </div>
          <p className="max-w-[600px] text-lg  capitalize leading-[1.2] text-clr-muted lg:text-xl">
            Mobile App Developement is the act of process by which a
            <span className="font-medium underline"> mobile app</span> is
            developed for mobile devices. products.
          </p>
          <div className="relative max-h-[700px] min-h-[40vh] w-full overflow-hidden rounded-[14px] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[650px]">
            <Image
              src="/product-1.jpg"
              alt="project image"
              fill
              sizes="(max-width: 0px) 100vw"
              className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
            />
          </div>
        </div>
      </section>
      <section className="main-container auto-h flex flex-col gap-16 pb-28 pt-8">
        <div className="flex flex-col items-start justify-center gap-16 lg:flex-row lg:justify-between">
          <p className="max-w-[400px] text-lg leading-[1.2] text-clr-muted">
            Never let a bad design decesions ruin your business. We are here
            Transforming brands for growth
          </p>
          <div className="flex flex-col gap-14">
            <p className="max-w-[650px] text-2xl leading-[1.2] text-clr-muted lg:text-4xl">
              We are a{" "}
              <span className="font-medium underline">creative agency</span>{" "}
              working with brands - building insightful strategy, creating
              unique designs and crafting experiences that bring positive change
              and value.
            </p>
            <p className="max-w-[600px] text-lg leading-[1.2] text-clr-muted">
              It was struggling to gain market share due to consumer perception
              that their products was a low-end spirit compared to more local
              alternatives. The brand needed a new website experience that would
              allow them to tell the story of Gorges and communicate its
              exceptional quality for serious liquor drinkers. I spent two
              months shaping this minimalistic web project in close
              collaboration with them and am so happy with the result.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 pb-12 pt-20">
          <h1 className="font-subtitle mx-auto max-w-[900px] text-center font-serif font-semibold leading-none">
            Works
          </h1>
          <div className="flex flex-col">
            <Project
              count={1}
              href="/work/lools"
              title={"Digital Innovation"}
            />
            <Project
              count={2}
              href="/work/lools"
              title={"Digital Innovation"}
            />
            <Project
              count={3}
              href="/work/lools"
              title={"Digital Innovation"}
            />
            <Project
              count={4}
              href="/work/lools"
              title={"Digital Innovation"}
            />
          </div>
        </div>
        <ContactExcerpt className="mb-0 mt-12" />
      </section>
    </>
  )
}

export default Page

const Project = ({
  count,
  title,
  href,
}: {
  count: number
  title: string
  href: string
}) => {
  return (
    <Link href={href} className="flex flex-col border-b border-clr-border">
      <div className="group relative flex cursor-pointer items-center justify-between px-2 py-5 md:px-4">
        <span className="custom-transition absolute bottom-0 left-0 -z-[1] h-0 w-full bg-clr-purple duration-300 group-hover:h-full"></span>
        <p className="hidden max-w-[400px] text-2xl capitalize leading-[1.2] group-hover:text-[#151515] sm:flex lg:text-[1.8rem]">
          0{count} /
        </p>
        <p className="max-w-[400px] text-2xl capitalize leading-[1.2] group-hover:text-[#151515] lg:text-[1.8rem]">
          {title}
        </p>
        <BsArrowDown
          size={20}
          className={`custom-transition -rotate-90 text-clr-muted duration-300 group-hover:-rotate-[135deg] 
            group-hover:text-[#151515]
          `}
        />
      </div>
    </Link>
  )
}
