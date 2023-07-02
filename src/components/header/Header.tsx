"use client"

import Link from "next/link"
import MenuButton from "./MenuButton"
import Menu from "./Menu"
import { useState } from "react"

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Menu show={show} setShow={setShow} />
      <header className="header sticky left-0 top-0 flex h-[5rem] w-full overflow-hidden bg-transparent">
        <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-5 md:px-20">
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
          <MenuButton setShow={setShow} />
        </nav>
      </header>
    </>
  )
}

export default Header
