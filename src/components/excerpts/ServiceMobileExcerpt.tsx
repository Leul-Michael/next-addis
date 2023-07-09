import { FiArrowUpRight } from "react-icons/fi"
import * as Icons from "react-icons/ai"
import { BsArrowDown } from "react-icons/bs"
import Link from "next/link"

type ServiceMobileExcerptProps = {
  name: string
  icon: string
}

const ServiceMobileExcerpt = ({ name, icon }: ServiceMobileExcerptProps) => {
  const Icon = (Icons as any)[icon]
  return (
    <Link
      href="/service/lools"
      className={`group relative flex h-full flex-col justify-center overflow-hidden border-y border-clr-border py-4 hover:text-[#151515]`}
    >
      <span className="custom-transition absolute bottom-0 left-0 -z-[1] h-0 w-full bg-clr-purple duration-300 group-hover:h-full"></span>
      <div
        className={`flex h-full w-full flex-col rounded-[4px] p-4 md:p-8 lg:p-12`}
      >
        <div className="grid w-full grid-cols-[40px_1fr_40px] items-start gap-2 md:gap-4 lg:gap-8">
          <Icon size={25} className="duration-300 group-hover:-rotate-45" />
          <h1 className="text-[4.5vw] font-semibold leading-none">{name}</h1>
          <BsArrowDown size={25} className="-rotate-[135deg] duration-300" />
        </div>
      </div>
    </Link>
  )
}

export default ServiceMobileExcerpt
