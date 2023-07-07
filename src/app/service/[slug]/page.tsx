import ContactExcerpt from "@/components/excerpts/ContactExcerpt"
import Image from "next/image"
import React from "react"

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
        <ContactExcerpt className="mb-8 mt-12" />
      </section>
    </>
  )
}

export default Page
