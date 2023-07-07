"use client"

import ProjectExcerpt from "@/components/excerpts/ProjectExcerpt"
import React, { useState } from "react"
import { TabType } from "../../../types"
import ContactExcerpt from "@/components/excerpts/ContactExcerpt"

const tabs = [
  { id: 0, name: "All" },
  { id: 1, name: "Ux / Ui Design" },
  { id: 2, name: "Web developement" },
  { id: 3, name: "Mobile developement" },
  { id: 4, name: "Software developement" },
]

const Page = () => {
  const [tab, setTab] = useState<TabType>(tabs[0])

  return (
    <section className="main-container relative flex flex-col pt-16">
      <div className="flex flex-col gap-8 py-16 md:gap-14">
        <h1 className="font-title relative self-center text-center font-serif font-semibold leading-none">
          All Works{" "}
          <span className="absolute -right-10 -top-3 flex h-[35px] w-[35px] items-center justify-center rounded-[100%] border border-clr-border font-sans text-sm">
            6
          </span>
        </h1>
      </div>
      <div className="flex items-center justify-center border-b border-clr-border py-5">
        <div className="flex items-center gap-4 overflow-auto py-4">
          {tabs.map((t: TabType) => (
            <span
              key={t.id}
              role="button"
              tabIndex={0}
              onClick={() => setTab(t)}
              className={`${
                tab.id === t.id ? "font-semibold text-white" : ""
              } cursor-pointer whitespace-nowrap text-sm text-clr-muted`}
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-16 py-20 sm:grid-cols-works">
        <ProjectExcerpt nohover />
        <ProjectExcerpt nohover />
        <ProjectExcerpt nohover />
        <ProjectExcerpt nohover />
        <ProjectExcerpt nohover />
        <ProjectExcerpt nohover />
        <ProjectExcerpt nohover />
        <ProjectExcerpt nohover />
      </div>
      <ContactExcerpt className="mb-32" />
    </section>
  )
}

export default Page
