"use client"

import useGlobals from "@/context/GlobalContext"
import { gsap, Expo } from "gsap"
import React, { useEffect } from "react"
import Btncta from "../Btncta"

const Hero = () => {
  const { isPageLoaded } = useGlobals()

  useEffect(() => {
    if (!isPageLoaded) return
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()

      t1.set("#hero-subtext", {
        y: 50,
        opacity: 0,
      })

      t1.to("#hero-video", {
        delay: -0.95,
        duration: 1.05,
        width: "100%",
        ease: Expo.easeIn,
      })
      t1.to("#hero-text", {
        delay: -0.75,
        duration: 0.75,
        stagger: 0.075,
        y: 0,
        ease: Expo.easeIn,
      })
      t1.to("#hero-subtext", {
        delay: -0.5,
        duration: 0.45,
        stagger: 0.05,
        opacity: 1,
        y: 0,
        ease: Expo.easeIn,
      })
    })
    return () => ctx.revert()
  }, [isPageLoaded])

  return (
    <div className="flex w-full flex-col gap-20">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end">
        <div className="flex flex-col">
          <h1 className="font-title max-w-[600px] overflow-hidden font-serif font-bold leading-none">
            <span
              id="hero-text"
              className="custom-transition inline-block translate-y-[100%]"
            >
              Digital Innovation
            </span>
          </h1>
          <h1 className="font-title max-w-[600px] overflow-hidden font-serif font-bold leading-none">
            <span
              id="hero-text"
              className="custom-transition inline-block translate-y-[100%]"
            >
              You Need to Build,
            </span>
          </h1>
          <h1 className="font-title max-w-[600px] overflow-hidden font-serif font-bold leading-none">
            <span
              id="hero-text"
              className="custom-transition inline-block translate-y-[100%]"
            >
              Scale & Grow.
            </span>
          </h1>
        </div>
        <div className="flex max-w-[400px] flex-col gap-8">
          <p
            id="hero-subtext"
            className="text-xl leading-[1.2] text-clr-muted opacity-0"
          >
            We help <span className="font-medium underline">Fast Growth</span>{" "}
            Teams Scale Their Design Roadmaps At Lightning Speeds
          </p>
          <div
            id="hero-subtext"
            className="flex flex-wrap items-center gap-4 opacity-0"
          >
            <Btncta name="Get a Quote" to="/contact" />
          </div>
        </div>
      </div>
      <video
        id="hero-video"
        className="h-full min-h-[300px] w-full overflow-hidden rounded-[14px] bg-clr-border/20 object-cover md:min-h-[600px] lg:w-[30%] lg:rounded-[40px]"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/video/agency.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Hero
