"use client"

import useGlobals from "@/context/GlobalContext"
import { gsap, Expo } from "gsap"
import React, { useEffect } from "react"

const Hero = () => {
  const { isPageLoaded } = useGlobals()

  useEffect(() => {
    if (!isPageLoaded) return
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()

      t1.to("#hero-text", {
        delay: -0.65,
        duration: 0.75,
        stagger: 0.075,
        y: 0,
        ease: Expo.easeIn,
      })
    })
    return () => ctx.revert()
  }, [isPageLoaded])

  return (
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
  )
}

export default Hero
