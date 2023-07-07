"use client"

import Image from "next/image"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { MouseEventHandler, useCallback, useRef, useState } from "react"

const Slider = () => {
  const slideRef = useRef<HTMLDivElement | null>(null)
  const slideContainerRef = useRef<HTMLDivElement | null>(null)
  const [isEnd, setIsEnd] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const intersectionObserver = useRef<IntersectionObserver>()

  const lastSlideRef = useCallback((node: HTMLDivElement | null) => {
    intersectionObserver.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsEnd(true)
        } else {
          setIsEnd(false)
        }
      },
      {
        root: document.body,
        threshold: 1.0,
      }
    )

    if (node) intersectionObserver.current.observe(node)
    return node
  }, [])

  const slideLeft: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (!slideRef.current || !slideContainerRef.current) return

    const newIndex = slideIndex <= 0 ? 0 : slideIndex - 1

    slideRef.current.style.transform = `translateX(-${
      newIndex *
      (slideRef.current.children[0].getBoundingClientRect().width +
        parseFloat(
          window.getComputedStyle(slideRef.current).getPropertyValue("gap")
        ) -
        (newIndex === 0
          ? parseFloat(
              window
                .getComputedStyle(slideContainerRef.current)
                .getPropertyValue("padding-left")
            )
          : 0))
    }px)`

    setSlideIndex(newIndex)
  }

  const slideRight: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (!slideRef.current || !slideContainerRef.current) return

    const newIndex =
      slideIndex >= slideRef.current?.children.length - 1
        ? slideRef.current?.children.length - 1
        : slideIndex + 1

    slideRef.current.style.transform = `translateX(-${
      newIndex *
      (slideRef.current.children[0].getBoundingClientRect().width +
        parseFloat(
          window.getComputedStyle(slideRef.current).getPropertyValue("gap")
        ) -
        (slideIndex === slideRef.current?.children.length - 1
          ? parseFloat(
              window
                .getComputedStyle(slideContainerRef.current)
                .getPropertyValue("padding-left")
            )
          : 0))
    }px)`
    setSlideIndex(newIndex)
  }

  return (
    <motion.div
      ref={slideContainerRef}
      className="flex w-full flex-col gap-8 border-t-2 border-clr-border py-8"
    >
      <motion.div
        ref={slideRef}
        className="custom-transition flex w-full items-center gap-8 duration-500"
      >
        <div className="flex flex-col gap-4">
          <div className="relative min-h-[320px] w-[320px] min-w-[320px] overflow-hidden rounded-[14px]">
            <Image
              src="/team.jpg"
              alt="the agency"
              fill
              sizes="(max-width: 0px) 100vw"
              className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-clr-muted">Frontend developer</p>
            <p className="capitalize leading-none">Gary Cole</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative min-h-[320px] w-[320px] min-w-[320px] overflow-hidden rounded-[14px]">
            <Image
              src="/team.jpg"
              alt="the agency"
              fill
              sizes="(max-width: 0px) 100vw"
              className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-clr-muted">Frontend developer</p>
            <p className="capitalize leading-none">Gary Cole</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative min-h-[320px] w-[320px] min-w-[320px] overflow-hidden rounded-[14px]">
            <Image
              src="/team.jpg"
              alt="the agency"
              fill
              sizes="(max-width: 0px) 100vw"
              className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-clr-muted">Frontend developer</p>
            <p className="capitalize leading-none">Gary Cole</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative min-h-[320px] w-[320px] min-w-[320px] overflow-hidden rounded-[14px]">
            <Image
              src="/team.jpg"
              alt="the agency"
              fill
              sizes="(max-width: 0px) 100vw"
              className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-clr-muted">Frontend developer</p>
            <p className="capitalize leading-none">Gary Cole</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative min-h-[320px] w-[320px] min-w-[320px] overflow-hidden rounded-[14px]">
            <Image
              src="/team.jpg"
              alt="the agency"
              fill
              sizes="(max-width: 0px) 100vw"
              className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-clr-muted">Frontend developer</p>
            <p className="capitalize leading-none">Gary Cole</p>
          </div>
        </div>
        <div ref={lastSlideRef} className="flex flex-col gap-4">
          <div className="relative min-h-[320px] w-[320px] min-w-[320px] overflow-hidden rounded-[14px]">
            <Image
              src="/team.jpg"
              alt="the agency"
              fill
              sizes="(max-width: 0px) 100vw"
              className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-clr-muted">Frontend developer</p>
            <p className="capitalize leading-none">Gary Cole</p>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center gap-5">
        <button
          disabled={slideIndex === 0}
          style={{ opacity: slideIndex === 0 ? 0.25 : 1 }}
          onClick={slideLeft}
          className="group relative flex h-[50px] w-[50px] flex-col items-center justify-center gap-1 overflow-hidden rounded-[100%] border border-clr-border p-3 hover:border-clr-accent"
        >
          <span className="custom-transition absolute left-0 top-0 -z-[1] h-full w-full scale-0 bg-clr-accent duration-300 group-hover:scale-100"></span>
          <BsArrowLeft
            size={25}
            className="text-clr-muted group-hover:text-white"
          />
        </button>
        <button
          disabled={
            (slideRef.current?.children &&
              slideIndex === slideRef.current?.children.length - 1) ||
            isEnd
          }
          style={{
            opacity:
              (slideRef.current?.children &&
                slideIndex === slideRef.current?.children.length - 1) ||
              isEnd
                ? 0.25
                : 1,
          }}
          onClick={slideRight}
          className="group relative flex h-[50px] w-[50px] flex-col items-center justify-center gap-1 overflow-hidden rounded-[100%] border border-clr-border p-3 hover:border-clr-accent"
        >
          <span className="custom-transition absolute left-0 top-0 -z-[1] h-full w-full scale-0 bg-clr-accent duration-300 group-hover:scale-100"></span>
          <BsArrowRight
            size={25}
            className="text-clr-muted group-hover:text-white"
          />
        </button>
      </div>
    </motion.div>
  )
}

export default Slider
