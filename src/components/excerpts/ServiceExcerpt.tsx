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
      className={`flex min-h-[400px] flex-col overflow-hidden rounded-[14px] ${bg} p-12`}
    >
      <div className="flex h-full flex-col gap-2">
        <div className="grid h-full min-h-[500px] w-full grid-cols-2">
          <div className="flex max-w-[500px] flex-col gap-8">
            <h2 className="hero-text-dark max-w-[400px] text-4xl font-semibold leading-none">
              {count}
            </h2>
            <h1 className="font-subtitle hero-text-dark max-w-[400px] font-serif font-semibold leading-none">
              {name}
            </h1>
            <p className="text-lg leading-[1.2] text-clr-dark-green">
              We help <span className="font-medium underline">Fast Growth</span>{" "}
              Teams Scale Their Design Roadmaps At Lightning Speeds
            </p>
            <div className="mt-auto flex">
              <Btncta name="learn more" to="/" />
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
