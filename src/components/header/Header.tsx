"use client"

import Link from "next/link"
import MenuButton from "./MenuButton"
import Menu from "./Menu"
import useGlobals from "@/context/GlobalContext"

const Header = () => {
  const { showMenu, isScrolled } = useGlobals()

  return (
    <>
      <Menu />
      <header
        className={`custom-transition sticky left-0 top-[1rem] z-[100] flex h-[4rem] overflow-hidden duration-300 ${
          isScrolled
            ? "mx-auto w-[95%] rounded-[8px] bg-clr-main/20 text-clr-font backdrop-blur-[100px]"
            : "header h-[5rem] w-full bg-transparent"
        } ${showMenu ? "-translate-y-[200%]" : "translate-y-0"}`}
      >
        <nav
          className={`custom-transition mx-auto flex w-full max-w-screen-2xl items-center justify-between duration-300 ${
            isScrolled ? "px-10" : "px-5 md:px-20"
          }`}
        >
          <div className="flex items-center gap-7">
            <Link href="/">
              <h1 className="relative flex items-baseline">
                <span className="absolute left-[1.45rem] top-0 text-[0.5rem]">
                  digital agency
                </span>
                <span className="font-serif text-[1.75rem] font-black">
                  Next
                </span>
                <span className="font-serif text-[1.45rem] font-semibold uppercase">
                  Addis.
                </span>
              </h1>
            </Link>
          </div>
          <MenuButton />
        </nav>
      </header>
    </>
  )
}

export default Header
