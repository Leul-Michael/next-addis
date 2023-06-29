"use client"

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import Lenis from "@studio-freight/lenis"

type ScrollContextType = {
  lenis: Lenis | null
}

const ScrollContext = createContext({} as ScrollContextType)

export default function useScroll() {
  return useContext(ScrollContext)
}

export function ScrollContextProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

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

  return (
    <ScrollContext.Provider value={{ lenis }}>
      {children}
    </ScrollContext.Provider>
  )
}
