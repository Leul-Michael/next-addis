import { FiArrowUpRight } from "react-icons/fi"
import * as Icons from "react-icons/ai"

type ServiceMobileExcerptProps = {
  name: string
  icon: string
}

const ServiceMobileExcerpt = ({ name, icon }: ServiceMobileExcerptProps) => {
  const Icon = (Icons as any)[icon]
  return (
    <article
      className={`flex h-full flex-col justify-center overflow-hidden border-y border-clr-border py-4`}
    >
      <div
        className={`flex h-full w-full flex-col rounded-[4px] p-4 md:p-8 lg:p-12`}
      >
        <div className="grid w-full grid-cols-[40px_1fr_40px] items-start gap-2 md:gap-4 lg:gap-8">
          <Icon
            size={25}
            className="mt-[0.15rem] duration-300 group-hover:-rotate-45"
          />
          <h1 className="text-[4.5vw] font-semibold leading-none">{name}</h1>
          <FiArrowUpRight
            size={25}
            className="mt-[0.15rem] duration-300 group-hover:-rotate-45"
          />
        </div>
      </div>
    </article>
  )
}

export default ServiceMobileExcerpt
