"use client"

import React, { useEffect, useRef, useState } from "react"
import { BsArrowDownShort } from "react-icons/bs"
import { SelectOption } from "../../types"
import useGlobals from "@/context/GlobalContext"

type CustomSelectProps = {
  options: SelectOption[]
  value: SelectOption | null
  onChange: (value: SelectOption | null) => void
}

const CustomSelect = ({ options, value, onChange }: CustomSelectProps) => {
  const { lenis } = useGlobals()
  const [isOpen, setIsOpen] = useState(false)
  const [hilightedIndex, setHilightedIndex] = useState(0)
  const containeRef = useRef<HTMLDivElement>(null)

  const isOptionSelected = (option: SelectOption) => {
    return option === value
  }

  useEffect(() => {
    if (isOpen) {
      setHilightedIndex(0)
      lenis?.stop()
    }

    return () => {
      lenis?.start()
    }
  }, [isOpen, lenis])

  useEffect(() => {
    const ref = containeRef.current

    const handler = (e: KeyboardEvent) => {
      if (e.target != ref) return
      switch (e.code) {
        case "Enter":
          setIsOpen((prev) => !prev)
          if (isOpen) onChange(options[hilightedIndex])
          break
        case "ArrowUp":
        case "ArrowDown": {
          if (!open) {
            setIsOpen(true)
            break
          }
          const newVal = hilightedIndex + (e.code === "ArrowDown" ? +1 : -1)
          if (newVal >= 0 && newVal < options.length) {
            setHilightedIndex(newVal)
          }
          break
        }
        case "Escape":
          setIsOpen(false)
          break
      }
    }
    ref?.addEventListener("keydown", handler)

    return () => {
      ref?.removeEventListener("keydown", handler)
    }
  }, [isOpen, hilightedIndex, options, onChange])

  return (
    <div
      ref={containeRef}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative flex w-max min-w-[200px] rounded-[6px] border border-clr-border px-3 py-2 focus-within:border-clr-accent focus:border-clr-accent active:border-clr-accent"
    >
      <div className="flex w-full flex-wrap items-center justify-between gap-2">
        <span className="select-none">{value?.label ?? "Not selected"}</span>
        <BsArrowDownShort
          size={20}
          className={`duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <ul
        className={`absolute left-0 top-[110%] z-[100] h-max  w-max min-w-[200px]  flex-col rounded-[6px] border border-clr-border bg-clr-main py-1 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {options?.map((option, index) => (
          <li
            key={option.value}
            className={`cursor-pointer px-3 py-2 capitalize hover:bg-clr-border/20 ${
              isOptionSelected(option) ? "bg-clr-border/40" : ""
            } ${index === hilightedIndex ? "bg-clr-border/20" : ""}`}
            onMouseEnter={() => setHilightedIndex(index)}
            onClick={(e) => {
              e.preventDefault()
              if (option !== value) onChange(option)
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomSelect
