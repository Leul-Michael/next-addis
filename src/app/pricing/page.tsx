"use client"

import { useState } from "react"
import { SelectOption } from "../../../types"
import services from "@/data/services.json"
import CustomSelect from "@/components/CustomSelect"
import Web from "@/components/form/Web"
import Design from "@/components/form/Design"
import Mobile from "@/components/form/Mobile"
import Software from "@/components/form/Software"

const opitons = {
  web: Web,
  design: Design,
  mobile: Mobile,
  software: Software,
}

const Page = () => {
  const [service, setService] = useState<SelectOption | null>(null)
  const SelectedService = service ? (opitons as any)[service.value] : null

  return (
    <section className="main-container relative flex flex-col pt-16">
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
            {SelectedService ? <SelectedService /> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
