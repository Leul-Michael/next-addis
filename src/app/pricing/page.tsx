"use client"

import { useState } from "react"
import { SelectOption } from "../../../types"
import services from "@/data/services.json"
import CustomSelect from "@/components/CustomSelect"
import Web from "@/components/form/Web"
import Design from "@/components/form/Design"
import Mobile from "@/components/form/Mobile"
import Software from "@/components/form/Software"
import TotalPrice from "@/components/modal/TotalPrice"
import { useCheckOutsideClick as CheckOutsideClick } from "@/hooks/useCheckOutsideClick"
import Btncta from "@/components/Btncta"

const opitons = {
  web: Web,
  design: Design,
  mobile: Mobile,
  software: Software,
}

const Page = () => {
  const [showPrice, setShowPrice] = useState(false)
  const [service, setService] = useState<SelectOption | null>(null)
  const SelectedService = service ? (opitons as any)[service.value] : null

  return (
    <>
      <CheckOutsideClick handler={() => setShowPrice(false)}>
        <TotalPrice show={showPrice} setShow={setShowPrice} />
      </CheckOutsideClick>
      <section className="main-container auto-h relative flex flex-col pt-16">
        <div className="flex flex-col gap-8 pt-16">
          <div className="flex flex-col gap-4">
            <p className="text-xs text-clr-muted">customize / pricing</p>
            <h1 className="font-title max-w-[900px] font-serif font-semibold leading-none">
              Customize Pricing
            </h1>
            <h2 className="font-subtitle max-w-[900px] font-serif font-semibold leading-none">
              for your needs
            </h2>
          </div>
          <div className="flex w-full flex-col gap-16 border-t-2 border-clr-border py-16">
            <div className="flex flex-col gap-x-16 gap-y-4 md:grid md:grid-cols-[250px_1fr]">
              <p>Please, select a service</p>
              <CustomSelect
                options={services}
                value={service}
                onChange={(o) => setService(o)}
              />
            </div>
            <div className="flex flex-col gap-x-16 gap-y-4 md:grid md:grid-cols-[250px_1fr]">
              <span></span>
              {SelectedService ? (
                <SelectedService onShow={() => setShowPrice(true)} />
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={`mb-28 flex flex-col gap-16 rounded-[14px] bg-clr-border/30 px-8 py-12 lg:px-12 lg:py-16`}
        >
          <div className="mx-auto flex max-w-[600px] flex-col items-center justify-center gap-5 text-center">
            <h1 className="font-subtitle font-serif font-semibold leading-none">
              Want to Create your Own Custom Price?
            </h1>
            <p className="text-lg capitalize leading-[1.2] text-clr-font">
              Contact us by adding your{" "}
              <span className="font-medium underline">custom needs</span> for
              more!
            </p>
            <Btncta className="self-center" to="/contact" name="Contact Us" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
