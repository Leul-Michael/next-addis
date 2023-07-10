"use client"

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import Lenis from "@studio-freight/lenis"
import { usePathname } from "next/navigation"

type GlobalContextType = {
  lenis: Lenis | null
  showMenu: boolean
  setShowMenu: Dispatch<SetStateAction<boolean>>
  isPageLoaded: boolean
  setIsPageLoaded: Dispatch<SetStateAction<boolean>>
  isScrolled: boolean
  isInServiceSection: boolean
  price: {
    type: "web" | "design" | "mobile"
    amount: number
  }
  setPrice: Dispatch<
    SetStateAction<{
      type: "web" | "design" | "mobile"
      amount: number
    }>
  >
}

const GlobalContext = createContext({} as GlobalContextType)

export default function useGlobals() {
  return useContext(GlobalContext)
}

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [price, setPrice] = useState<{
    type: "web" | "design" | "mobile"
    amount: number
  }>({
    type: "web",
    amount: 500,
  })
  const [showMenu, setShowMenu] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const [isInServiceSection, setIsInServiceSection] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const raf = useCallback(
    (time: number) => {
      lenis?.raf(time)
      requestAnimationFrame(raf)
    },
    [lenis]
  )

  useEffect(() => {
    if (!lenis) {
      setLenis(new Lenis())
    }

    requestAnimationFrame(raf)

    return () => {
      lenis?.destroy()
    }
  }, [lenis, raf])

  lenis?.on(
    "scroll",
    ({ scroll, limit, velocity, direction, progress }: Lenis) => {
      // console.log(progress)
      setIsInServiceSection(
        window?.innerWidth > 1024 && pathname === "/"
          ? progress > 0.15 && progress < 0.37
          : false
      )
      setIsScrolled(progress > 0.008)
    }
  )

  return (
    <GlobalContext.Provider
      value={{
        lenis,
        showMenu,
        setShowMenu,
        isPageLoaded,
        setIsPageLoaded,
        isScrolled,
        isInServiceSection,
        price,
        setPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
