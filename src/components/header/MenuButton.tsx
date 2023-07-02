"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type MenuButtonProps = {
  setShow: Dispatch<SetStateAction<boolean>>
}

const MenuButton = ({ setShow }: MenuButtonProps) => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="header-border relative flex h-[70%] w-32 flex-col overflow-hidden rounded-[6px] border-r border-t">
      <div className="header-border header-bg-clr absolute left-0 top-0 z-10 flex h-[60%] w-[36%] items-center justify-start rounded-l-[6px] border-b border-l px-2 backdrop-blur-[100px]">
        <Image
          tabIndex={0}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          width={10}
          height={10}
          src={`/logos/logo-dark.png`}
          alt="next addis logo"
          className="h-auto w-auto cursor-pointer"
          title="toggle theme"
        />
      </div>
      <button
        onClick={() => setShow((prev) => !prev)}
        className="header-border header-bg-clr absolute right-0 top-0 flex h-full w-[65%] flex-col items-end justify-center gap-1 rounded-b-[6px] border-b border-l pr-5 backdrop-blur-[100px]"
      >
        <span className="header-font-clr h-[2px] w-[80%]"></span>
        <span className="header-font-clr h-[2px] w-[60%]"></span>
      </button>
    </div>
  )
}

export default MenuButton
