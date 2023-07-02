import Image from "next/image"
import Btncta from "../Btncta"

type ProjectExcerptProps = {
  yellow?: Boolean
}

const ProjectExcerpt = ({ yellow }: ProjectExcerptProps) => {
  return (
    <article className="custom-transition group relative flex h-[500px] w-full flex-col justify-end overflow-hidden rounded-[14px] duration-[600ms] hover:w-[150%]">
      <Image
        src="/project.jpg"
        alt="project image"
        fill
        sizes="(max-width: 0px) 100vw"
        className="absolute left-0 top-0 -z-[2] h-full w-full bg-gray-800/40 object-cover"
      />
      <span
        className={`custom-transition absolute left-0 top-[100%] -z-[1] h-full w-full rounded-[14px] ${
          yellow ? "bg-clr-yellow" : "bg-clr-purple"
        } duration-[600ms] group-hover:top-0`}
      ></span>
      <div className="flex h-full w-full flex-col justify-end gap-2 bg-gradient-to-t from-black/20 to-transparent p-6 group-hover:bg-transparent">
        <h1 className="custom-transition font-subtitle mt-auto w-[60%] font-serif font-bold leading-none text-white opacity-100 duration-[600ms] group-hover:opacity-0">
          Digital Innovation.
        </h1>
      </div>
      <div className="custom-transition absolute left-0 top-[100%] flex h-full w-full flex-col justify-end gap-2 p-6 duration-[600ms] group-hover:top-0">
        <h1 className="font-subtitle hero-text-dark w-[60%] font-serif font-bold leading-none">
          Digital Innovation.
        </h1>
        <div className="custom-transition flex max-w-[60%] flex-col gap-4 opacity-0 duration-[600ms] group-hover:opacity-100">
          <p className="hero-text-dark text-lg leading-[1.2]">
            We help <span className="font-medium underline">Fast Growth</span>{" "}
            Teams Scale Their Design Roadmaps At Lightning Speeds
          </p>
          <Btncta name="view showcase" to="/" />
        </div>
      </div>
    </article>
  )
}

export default ProjectExcerpt
