"use client"

import { AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"

const FramerProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  )
}

export default FramerProvider
