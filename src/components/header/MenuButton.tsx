"use client"

import useGlobals from "@/context/GlobalContext"
import { useTheme } from "next-themes"
import { BsMoonFill, BsSunFill } from "react-icons/bs"

const MenuButton = () => {
  const { theme, setTheme } = useTheme()
  const { setShowMenu, isScrolled } = useGlobals()

  return (
    <div className="relative flex w-36 overflow-hidden">
      <div
        tabIndex={0}
        className="header__theme-icon"
        title="Toggle Theme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <input tabIndex={-1} type="checkbox" />
        <span className="slider"></span>
        <BsMoonFill className="header__theme-dark" />
        <BsSunFill className="header__theme-light" />
      </div>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="absolute right-0 top-0 flex aspect-square h-full w-[65%] flex-col items-end justify-center gap-1 rounded-[100%] px-5"
      >
        <span
          className={`h-[2px] w-[80%] ${
            isScrolled ? "bg-clr-font" : "header-font-clr"
          }`}
        ></span>
        <span
          className={`h-[2px] w-[60%] ${
            isScrolled ? "bg-clr-font" : "header-font-clr"
          }`}
        ></span>
      </button>
    </div>
  )
}

export default MenuButton
