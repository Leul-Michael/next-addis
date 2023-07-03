import Image from "next/image"
import Btncta from "../Btncta"

type ProjectExcerptProps = {
  yellow?: Boolean
}

const ProjectExcerpt = ({ yellow }: ProjectExcerptProps) => {
  return (
    <article className="custom-transition group relative flex h-[550px] w-full flex-col justify-end overflow-hidden rounded-[14px] duration-[600ms] lg:hover:w-[150%]">
      <Image
        src="/project.jpg"
        alt="project image"
        fill
        sizes="(max-width: 0px) 100vw"
        className="absolute left-0 top-0 -z-[2] h-[50%] w-full bg-gray-800/40 object-cover lg:h-full"
      />
      <span
        className={`custom-transition absolute left-0 top-[100%] -z-[1] h-full w-full rounded-[14px] ${
          yellow ? "bg-clr-yellow" : "bg-clr-purple"
        } duration-[600ms] group-hover:top-0`}
      ></span>
      <div className="hidden h-full w-full flex-col justify-end gap-2 bg-gradient-to-t from-black/20 to-transparent p-6 group-hover:bg-transparent lg:flex">
        <h1 className="custom-transition font-subtitle mt-auto w-[60%] font-serif font-bold leading-none text-white opacity-100 duration-[600ms] group-hover:opacity-0">
          Digital Innovation.
        </h1>
      </div>
      <div
        className={`custom-transition flex h-auto w-full flex-col justify-end gap-2 ${
          yellow ? "bg-clr-yellow" : "bg-clr-purple"
        } p-6 duration-[600ms] group-hover:top-0 lg:absolute lg:left-0 lg:top-[100%] lg:h-full lg:bg-transparent`}
      >
        <h1 className="font-subtitle hero-text-dark w-full font-serif font-bold leading-none sm:w-[60%]">
          Digital Innovation.
        </h1>
        <div className="custom-transition flex max-w-[60%] flex-col gap-4 duration-[600ms] lg:opacity-0 lg:group-hover:opacity-100">
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
