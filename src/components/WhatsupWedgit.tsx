"use client"

import useGlobals from "@/context/GlobalContext"
import React from "react"

const WhatsupWedgit = () => {
  const { isPageLoaded } = useGlobals()

  if (!isPageLoaded) return null
  return (
    <div className="elfsight-app-4fa86fda-b13f-424f-8d51-4b9af9137edc z-[199]"></div>
  )
}

export default WhatsupWedgit
