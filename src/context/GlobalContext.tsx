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

type GlobalContextType = {
  lenis: Lenis | null
  showMenu: boolean
  setShowMenu: Dispatch<SetStateAction<boolean>>
  isScrolled: boolean
  isInServiceSection: boolean
}

const GlobalContext = createContext({} as GlobalContextType)

export default function useGlobals() {
  return useContext(GlobalContext)
}

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [showMenu, setShowMenu] = useState(false)
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
      // console.log(scroll, limit, velocity, direction, progress)
      setIsInServiceSection(
        window?.innerWidth > 1024 ? progress > 0.41 && progress < 0.84 : false
      )
      setIsScrolled(progress > 0.02)
    }
  )

  return (
    <GlobalContext.Provider
      value={{ lenis, showMenu, setShowMenu, isScrolled, isInServiceSection }}
    >
      {children}
    </GlobalContext.Provider>
  )
}