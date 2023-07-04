import Image from "next/image"
import Btncta from "../Btncta"

type ServiceExcerptProps = {
  name: string
  bg: string
  count: string
}

const ServiceExcerpt = ({ name, bg, count }: ServiceExcerptProps) => {
  return (
    <article
      id="step-wrapper"
      className={`flex h-screen min-h-[400px] flex-col items-center justify-center overflow-hidden`}
    >
      <div
        className={`flex h-[90%] max-h-[700px] w-full flex-col gap-2 ${bg} rounded-[14px] p-12`}
      >
        <div className="grid h-full min-h-[500px] w-full grid-cols-2">
          <div className="flex max-w-[500px] flex-col gap-8">
            <h2 className="hero-text-dark max-w-[400px] text-4xl font-semibold leading-none">
              {count}
            </h2>
            <h1 className="font-subtitle hero-text-dark max-w-[400px] font-serif font-semibold leading-none">
              {name}
            </h1>
            <p className="text-base leading-[1.2] text-clr-dark-green lg:text-lg">
              We help <span className="font-medium underline">Fast Growth</span>{" "}
              Teams Scale Their Design Roadmaps At Lightning Speeds
            </p>
            <div className="mt-auto flex">
              <Btncta name="Learn More" to="/" />
            </div>
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-[12px]">
            <Image
              src="/service.jpg"
              alt="service image"
              fill
              sizes="(max-width: 0px) 100vw"
              className="absolute left-0 top-0 h-full w-full bg-gray-800/40 object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default ServiceExcerpt
