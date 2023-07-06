"use client"

import Btncta from "@/components/Btncta"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
// https://serieseight.com/work/viatu

export default function Page() {
  const router = useRouter()
  return (
    <>
      <section className="main-container relative flex flex-col rounded-[0px_0px_50px_50px]">
        <div className="flex flex-col gap-8 py-16 md:gap-14">
          <button
            onClick={() => router.back()}
            className="group relative flex h-[60px] w-[60px] flex-col items-center justify-center gap-1 overflow-hidden rounded-[100%] border border-clr-border p-3 hover:border-clr-accent"
          >
            <span className="custom-transition absolute left-0 top-0 -z-[1] h-full w-full scale-0 bg-clr-accent duration-300 group-hover:scale-100"></span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g id="Complete">
                <g id="arrow-left">
                  <g>
                    <polyline
                      data-name="Right"
                      fill="none"
                      id="Right-2"
                      points="7.6 7 2.5 12 7.6 17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="stroke-clr-muted group-hover:stroke-white"
                    />
                    <line
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="stroke-clr-muted group-hover:stroke-white"
                      x1="21.5"
                      x2="4.8"
                      y1="12"
                      y2="12"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <h1 className="font-title max-w-[800px] font-serif font-semibold leading-none">
            Gorges house
          </h1>
          <div className="relative max-h-[700px] min-h-[40vh] w-full overflow-hidden rounded-[14px] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[650px]">
            <Image
              src="/product-1.jpg"
              alt="project image"
              fill
              sizes="(max-width: 0px) 100vw"
              className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
            />
          </div>
          <div className="flex w-full flex-col gap-8 border-t-2 border-clr-border py-20 md:flex-row md:gap-20">
            <div className="flex w-1/3 flex-col items-start gap-2">
              <div className="flex flex-col text-sm leading-[1.2]">
                <p className="text-xs font-semibold text-clr-muted">Client:</p>
                <p>Gorges house</p>
              </div>
              <div className="flex flex-col text-sm leading-[1.2]">
                <p className="text-xs font-semibold text-clr-muted">Context:</p>
                <p>Branding</p>
                <p>Developement</p>
                <p>Web frontend</p>
                <p>CMS</p>
              </div>
              <div className="flex flex-col text-sm leading-[1.2]">
                <p className="text-xs font-semibold text-clr-muted">Tools:</p>
                <p>Figma</p>
                <p>React</p>
              </div>
              <div className="flex flex-col text-sm leading-[1.2]">
                <p className="text-xs font-semibold text-clr-muted">Role:</p>
                <p>UI Design</p>
                <p>Coding</p>
              </div>
              <div className="mt-12 flex flex-col text-sm leading-[1.2]">
                <p className="text-xs font-semibold text-clr-muted">Year:</p>
                <p>2022</p>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-screen-lg flex-col">
              <div className="flex flex-col gap-16">
                <p className="font-subtitle max-w-[800px] font-serif font-medium leading-none">
                  Gorges house, A premium liquor brand, startup invented by two
                  caring young founders.
                </p>
                <p className="max-w-[600px] text-lg leading-[1.2] text-clr-muted">
                  It was struggling to gain market share due to consumer
                  perception that their products was a low-end spirit compared
                  to more local alternatives. The brand needed a new website
                  experience that would allow them to tell the story of Gorges
                  and communicate its exceptional quality for serious liquor
                  drinkers. I spent two months shaping this minimalistic web
                  project in close collaboration with them and am so happy with
                  the result.
                </p>
                <Btncta className="btn-cta-outline" name="Live Site" to="/" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative  min-h-[40vh] w-full overflow-hidden sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[700px]">
        <Image
          src="/product-1.jpg"
          alt="project image"
          fill
          sizes="(max-width: 0px) 100vw"
          className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
        />
      </div>
      <section className="main-container relative flex h-full flex-col">
        <div className="flex flex-col items-center justify-center gap-16 py-20">
          <div className="flex max-w-[600px] flex-col gap-5">
            <p className="font-subtitle max-w-[800px] font-serif font-medium leading-none">
              Problem
            </p>
            <p className="text-lg leading-[1] lg:text-xl">
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
        <video
          className="h-full min-h-[300px] w-full overflow-hidden rounded-[14px] bg-clr-border/20 object-cover md:min-h-[600px]"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src="/video/agency.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col items-center justify-center gap-16 py-20">
          <div className="flex max-w-[600px] flex-col gap-5">
            <p className="font-subtitle max-w-[800px] font-serif font-medium leading-none">
              Solution
            </p>
            <p className="text-lg leading-[1] lg:text-xl">
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
      </section>
      <section className="main-container auto-h flex h-full items-center justify-center bg-clr-border/30">
        <div className="relative my-28 max-h-[700px] min-h-[40vh] w-full overflow-hidden rounded-[14px] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[650px]">
          <Image
            src="/product-1.jpg"
            alt="project image"
            fill
            sizes="(max-width: 0px) 100vw"
            className="h-full w-full bg-gray-800/40 object-cover"
          />
        </div>
      </section>
      <section className="mx-auto flex h-full max-w-screen-md flex-col items-center justify-center px-16 py-20 pb-32 md:px-0">
        <Link
          href="/"
          className="group relative flex min-h-[300px] w-full flex-col items-center justify-center gap-16 overflow-hidden border-b border-clr-border text-center"
        >
          <p className="max-w-[600px] text-lg leading-[1.2] text-clr-muted">
            Next Case.
          </p>
          <h1 className="custom-transition font-title max-w-[800px] font-serif font-semibold leading-none duration-500 group-hover:opacity-60">
            GhostHunters
          </h1>
          <Image
            src="/product-1.jpg"
            alt="project image"
            width={200}
            height={200}
            className="custom-transition absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] rounded-[8px_8px_0px_0px] bg-gray-800/40 object-cover duration-500 group-hover:translate-y-[0%]"
          />
        </Link>
      </section>
    </>
  )
}
