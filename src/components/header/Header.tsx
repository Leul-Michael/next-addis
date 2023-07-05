"use client"

import Link from "next/link"
import MenuButton from "./MenuButton"
import Menu from "./Menu"
import useGlobals from "@/context/GlobalContext"

const Header = () => {
  const { showMenu, isScrolled, isInServiceSection } = useGlobals()

  return (
    <>
      <Menu />
      <header
        className={`custom-transition sticky left-0 top-0 z-[100] flex h-[4rem] overflow-hidden duration-300 ${
          isScrolled
            ? "mx-auto bg-clr-main/20 text-clr-font backdrop-blur-[100px]"
            : "header h-[4.5rem] w-full border-b border-clr-border bg-transparent"
        } ${
          showMenu || isInServiceSection
            ? "-translate-y-[135%]"
            : "translate-y-0"
        }`}
      >
        <nav
          className={`custom-transition mx-auto flex w-full max-w-screen-2xl items-center justify-between px-5 duration-300 md:px-20`}
        >
          <div className="flex items-center gap-7">
            <Link href="/">
              <h1 className="relative flex items-baseline">
                <span className="font-serif text-[1.5rem] font-black md:text-[1.75rem]">
                  Next
                </span>
                <span className="font-serif text-[1.25rem] font-semibold uppercase md:text-[1.45rem]">
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
