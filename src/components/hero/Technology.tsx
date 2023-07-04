"use client"

// For Icons https://www.svgrepo.com/vectors/

import React, { useMemo, useState } from "react"
import TechnologyExcerpt from "../excerpts/TechnologyExcerpt"

type TabType = { id: number; name: string }

const tabs = [
  { id: 0, name: "All" },
  { id: 1, name: "Ux / Ui Design" },
  { id: 2, name: "Web developement" },
  { id: 3, name: "Mobile developement" },
  { id: 4, name: "Software developement" },
]

const Technologies = [
  { id: 0, name: "Javascript", image: "/js.png", category: [2, 3, 4] },
  { id: 1, name: "Node js", image: "/nodejs.png", category: [2, 4] },
  { id: 2, name: "React js", image: "/react.png", category: [2, 3, 4] },
  { id: 3, name: "Angular js", image: "/angular.png", category: [2, 3, 4] },
  { id: 4, name: "Prisma", image: "/prisma.png", category: [2, 3] },
  {
    id: 5,
    name: "Illustrator",
    image: "/adobe-illustrator.png",
    category: [1],
  },
  { id: 6, name: "Next js", image: "/nextjs.png", category: [2, 4] },
  { id: 7, name: "Adobe Xd", image: "/adobe-xd.png", category: [1] },
  { id: 8, name: "Flutter", image: "/flutter.png", category: [3] },
  { id: 9, name: "Photoshop", image: "/adobe-photoshop.png", category: [1] },
  { id: 10, name: "Python", image: "/python.png", category: [2, 3, 4] },
  { id: 11, name: "Electron", image: "/electron.png", category: [4] },
  { id: 12, name: "Figma", image: "/figma.png", category: [1] },
]

const Technology = () => {
  const [tab, setTab] = useState<TabType>(tabs[0])

  const filteredTechs = useMemo(() => {
    return tab.id === 0
      ? Technologies
      : Technologies.filter((tech) => tech.category.includes(tab.id))
  }, [tab.id])

  return (
    <section className="flex h-full w-full flex-col gap-16 overflow-hidden py-16">
      <div className="flex flex-col gap-8">
        <h1 className="font-subtitle max-w-[450px] font-serif font-semibold leading-none">
          Technologies used here.
        </h1>
        <div className="flex w-full flex-col border-t-2 border-clr-border py-8">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <p className="mt-2 max-w-[400px] text-lg leading-[1.2] text-clr-muted/70">
              Filter:{" "}
              <span className="text-base font-semibold text-clr-muted">
                {tab.name}
              </span>
            </p>
            <div className="flex w-full flex-col gap-16 lg:w-auto">
              <div className="flex items-center gap-4 overflow-auto py-4">
                {tabs.map((t: TabType) => (
                  <span
                    key={t.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setTab(t)}
                    className={`${
                      tab.id === t.id ? "bg-clr-accent text-white" : ""
                    } cursor-pointer whitespace-nowrap rounded-[6px] border border-clr-border px-5 py-[0.4rem]`}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
              <div className="grid h-full w-full grid-cols-tech gap-8 lg:gap-12">
                {filteredTechs.map((tech) => (
                  <TechnologyExcerpt
                    key={tech.id}
                    name={tech.name}
                    image={tech.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
