"use client"

import { ThemeProvider as Provider } from "next-themes"
import type { ReactNode } from "react"

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <Provider attribute="class">{children}</Provider>
}

export default ThemeProvider
