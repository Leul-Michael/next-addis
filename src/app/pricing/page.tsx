import CustomSelect from "@/components/CustomSelect"
import React from "react"

const Page = () => {
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
        <div className="flex w-full flex-col gap-20 border-t-2 border-clr-border py-16">
          <div className="flex flex-wrap gap-x-16 gap-y-4">
            <p>Please, select a service</p>
            <CustomSelect />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
