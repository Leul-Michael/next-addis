"use client"

import React, { useState } from "react"
import { BsArrowDownShort } from "react-icons/bs"

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative flex w-max min-w-[200px] rounded-[6px] border border-clr-border px-3 py-2"
    >
      <div className="flex w-full flex-wrap items-center justify-between gap-2">
        <span className="select-none">Not selected</span>
        <BsArrowDownShort
          size={20}
          className={`duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <ul
        className={`absolute left-0 top-[110%] h-max w-max flex-col rounded-[6px] border border-clr-border py-1 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li
          className={`cursor-pointer px-3 py-2 capitalize hover:bg-clr-border/10`}
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          UI / UX Design
        </li>
        <li
          className={`cursor-pointer px-3 py-2 capitalize hover:bg-clr-border/10`}
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Web developement
        </li>
        <li
          className={`cursor-pointer px-3 py-2 capitalize hover:bg-clr-border/10`}
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Mobile App developement
        </li>
        <li
          className={`cursor-pointer px-3 py-2 capitalize hover:bg-clr-border/10`}
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Software developement
        </li>
      </ul>
    </div>
  )
}

export default CustomSelect
