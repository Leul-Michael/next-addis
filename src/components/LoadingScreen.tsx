"use client"

import useGlobals from "@/context/GlobalContext"
import { gsap, Expo } from "gsap"
import React, { useEffect } from "react"
import imagesLoaded from "imagesloaded"
import { usePathname } from "next/navigation"

const words = ["Chance", "Luck", "Journey", "Partner", "ADDIS"]

const LoadingScreen = () => {
  const { lenis, isPageLoaded, setIsPageLoaded } = useGlobals()
  const pathname = usePathname()

  useEffect(() => {
    if (isPageLoaded) {
      lenis?.start()
    } else {
      lenis?.stop()
    }
  }, [lenis, isPageLoaded])

  useEffect(() => {
    const animatePage = () => {
      const ctx = gsap.context(() => {
        const t1 = gsap.timeline()

        t1.to(`#intro-text`, {
          opacity: 1,
        })

        imagesLoaded(document.querySelector("#hero")!, function () {
          words.forEach((w, i) => {
            const currentWord = document.querySelector(`#intro-text #${w}`)
            if (!currentWord) return
            currentWord.innerHTML = currentWord!.textContent!.replace(
              /\S/g,
              `<span class="letter inline-block opacity-0">$&</span>`
            )

            t1.set(`#intro-text #${w}`, {
              opacity: 1,
            })

            if (i === w.length - 1) {
              t1.fromTo(
                `#${w} .letter`,
                {
                  y: 50,
                  opacity: 0,
                },
                {
                  duration: 0.4,
                  y: 0,
                  stagger: 0.02,
                  opacity: 1,
                }
              )
              t1.fromTo(
                `#${w} .letter`,
                {
                  duration: 0.25,
                  opacity: 0,
                },
                {
                  duration: 0.25,
                  opacity: 1,
                }
              )
              t1.fromTo(
                `#${w} .letter`,
                {
                  duration: 0.25,
                  opacity: 0,
                },
                {
                  duration: 0.25,
                  opacity: 1,
                }
              )
              t1.to(`#intro-text`, {
                duration: 0.45,
                y: -50,
                opacity: 0,
                ease: Expo.easeIn,
              })
              t1.to("#landing-container", {
                top: "-110%",
                delay: -0.5,
                duration: 0.7,
                display: "none",
                ease: Expo.easeIn,
                onComplete: () => {
                  setIsPageLoaded(true)
                },
              })
            } else {
              t1.fromTo(
                `#${w} .letter`,
                {
                  y: 50,
                  opacity: 0,
                },
                {
                  duration: 0.4,
                  y: 0,
                  stagger: 0.05,
                  opacity: 1,
                }
              )
              t1.to(`#${w} .letter`, {
                duration: 0.4,
                y: -50,
                stagger: 0.05,
                opacity: 0,
                ease: Expo.easeIn,
              })
            }
          })
        })
      })

      return () => ctx.revert()
    }
    if (document.readyState === "complete") {
      animatePage()
    } else {
      window.addEventListener("load", animatePage)
      return () => window.removeEventListener("load", animatePage)
    }
  }, [setIsPageLoaded])

  if (pathname !== "/" || isPageLoaded) return null

  return (
    <section
      id="landing-container"
      className="fixed left-0 top-0 z-[200] flex h-screen w-screen flex-col items-center justify-center bg-clr-main text-clr-font"
    >
      <div className="flex flex-col">
        <h1
          id="intro-text"
          className="font-title flex h-max w-full max-w-[600px] items-center gap-2 overflow-hidden font-serif font-bold leading-none"
        >
          Next{" "}
          <span className="relative flex flex-col">
            <span className="opacity-0">Journey</span>
            {words.map((w) => (
              <span
                key={w}
                id={w}
                className="absolute left-0 top-0 flex items-center leading-none opacity-0"
              >
                {w}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </section>
  )
}

export default LoadingScreen
