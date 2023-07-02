import Link from "next/link"
import React from "react"
import { BsArrowRightCircleFill } from "react-icons/bs"

type BtnctaProps = {
  to: string
  name: string
}

const Btncta = ({ to = "/", name }: BtnctaProps) => {
  return (
    <Link
      href={to}
      className="btn-cta group flex min-w-[200px] items-center justify-between self-start px-5 py-[0.85rem]"
    >
      <span>{name}</span>
      <BsArrowRightCircleFill
        size={22}
        className="duration-300 group-hover:-rotate-45 group-hover:text-black"
      />
    </Link>
  )
}

export default Btncta
