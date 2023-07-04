import Link from "next/link"
import { BsArrowRightCircleFill } from "react-icons/bs"

type BtnctaProps = {
  to: string
  name: string
  className?: string
}

const Btncta = ({ to = "/", name, className = "" }: BtnctaProps) => {
  return (
    <Link
      href={to}
      scroll
      className={`btn-cta group flex min-w-[200px] items-center justify-between gap-4 self-start px-5 py-[0.85rem] ${className}`}
    >
      <span>{name}</span>
      <BsArrowRightCircleFill
        size={22}
        className="duration-300 group-hover:-rotate-45"
      />
    </Link>
  )
}

export default Btncta
