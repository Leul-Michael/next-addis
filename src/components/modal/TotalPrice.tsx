"use client"

import useGlobals from "@/context/GlobalContext"
import React, { Dispatch, SetStateAction, useEffect } from "react"
import { MdClose } from "react-icons/md"

type TotalPriceProps = {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const TotalPrice = ({ show, setShow }: TotalPriceProps) => {
  const { lenis } = useGlobals()

  useEffect(() => {
    show && lenis?.stop()
    return () => {
      lenis?.start()
    }
  }, [lenis, show])

  return (
    <article
      className={`${
        show ? "top-[30%] z-[100] opacity-100" : "top-[50%] -z-[1] opacity-0"
      } custom-transition fixed left-[50%] flex w-[95%]  max-w-[450px] -translate-x-[50%] -translate-y-[50%] flex-col rounded-[6px] border border-clr-border bg-clr-main p-3 shadow-full duration-300 sm:w-full sm:p-6`}
    >
      <div className="flex items-center justify-between gap-4 py-4">
        <h2 className="max-w-[900px] font-serif text-[2rem] font-semibold leading-none">
          Total Price.
        </h2>
        <MdClose
          size={22}
          className="cursor-pointer text-clr-muted"
          onClick={() => setShow(false)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p>Your total price amounts to:</p>
        <h2 className="max-w-[900px] text-[2rem] font-semibold leading-none text-clr-accent">
          <CurrentPrice />
        </h2>
      </div>
    </article>
  )
}

export default TotalPrice

const CurrentPrice = () => {
  const { price } = useGlobals()

  return price.type === "design" ? (
    price.amount >= 1200 ? (
      <>
        over
        <span className="px-2 font-serif">$</span>
        1200
      </>
    ) : (
      <>
        <span className="pr-2 font-serif">$</span>
        {price.amount}
      </>
    )
  ) : price.amount >= 1300 ? (
    <>
      over
      <span className="px-2 font-serif">$</span>
      1300
    </>
  ) : (
    <>
      <span className="pr-2 font-serif">$</span>
      {price.amount}
    </>
  )
}
