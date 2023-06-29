"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type MenuButtonProps = {
  setShow: Dispatch<SetStateAction<boolean>>
}

const MenuButton = ({ setShow }: MenuButtonProps) => {
  const { theme, setTheme } = useTheme()

  const [logo, setLogo] = useState("")

  useEffect(() => {
    setLogo(theme === "light" ? "light" : "dark")
  }, [theme])

  return (
    <div className="relative flex h-[70%] w-32 flex-col overflow-hidden rounded-[6px] border-r border-t border-clr-border">
      <div className="absolute left-0 top-0 z-10 flex h-[60%] w-[36%] items-center justify-start rounded-l-[6px] border-b border-l border-clr-border bg-clr-main/60 px-2 backdrop-blur-[100px]">
        <Image
          tabIndex={0}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          width={10}
          height={10}
          src={`/logos/logo-${logo}.png`}
          alt="next addis logo"
          className="h-auto w-auto cursor-pointer"
          title="toggle theme"
        />
      </div>
      <button
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-0 top-0 flex h-full w-[65%] flex-col items-end justify-center gap-1 rounded-b-[6px] border-b border-l border-clr-border bg-clr-main/60 pr-5 backdrop-blur-[100px]"
      >
        <span className="h-[2px] w-[80%] bg-clr-font/70"></span>
        <span className="h-[2px] w-[60%] bg-clr-font/70"></span>
      </button>
    </div>
  )
}

export default MenuButton
