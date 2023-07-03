import React from "react"
import ProjectExcerpt from "../excerpts/ProjectExcerpt"

const Project = () => {
  return (
    <section className="flex flex-col gap-16 py-20">
      <div className="flex max-w-[600px] flex-col gap-8">
        <h1 className="font-subtitle font-serif font-semibold leading-none">
          Works.
        </h1>
        <p className="text-xl leading-[1.2] text-clr-muted">
          We help <span className="font-medium underline">Fast Growth</span>{" "}
          Teams Scale Their Design Roadmaps At Lightning Speeds
        </p>
      </div>
      <div className="hidden flex-col gap-5 lg:flex lg:flex-row">
        <ProjectExcerpt />
        <ProjectExcerpt yellow />
      </div>
      <div className="hidden flex-col gap-5 lg:flex lg:flex-row">
        <ProjectExcerpt />
        <ProjectExcerpt yellow />
      </div>
      <div className="flex flex-col gap-8 lg:hidden lg:flex-row">
        <ProjectExcerpt />
        <ProjectExcerpt yellow />
        <ProjectExcerpt />
        <ProjectExcerpt yellow />
      </div>
    </section>
  )
}

export default Project
