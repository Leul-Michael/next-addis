import React, { FormEventHandler, useState } from "react"
import Checkbox from "../inputs/Checkbox"
import { BsArrowRightCircleFill } from "react-icons/bs"
import { DesignOptionProps } from "../../../types"
import useGlobals from "@/context/GlobalContext"

const Design = ({ onShow }: { onShow: () => void }) => {
  const { setPrice } = useGlobals()
  const [DesignOptions, setDesignOptions] = useState<DesignOptionProps>({
    revision: 0,
    mockup: false,
    responsive: false,
    prototype: false,
    animation: false,
    branding: false,
    testing: false,
    maintenance: false,
  })

  const calculatePrice: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setPrice({ type: "design", amount: 500 })
    setPrice((prev) => {
      ;[...Object.entries(DesignOptions)].map((v) => {
        if (typeof v[1] === "number") {
          v[1] > 0
            ? v[1] === 1
              ? { ...prev, amount: (prev.amount += 100) }
              : { ...prev, amount: (prev.amount += 100 + v[1] * 10) }
            : prev
        } else {
          v[1] ? { ...prev, amount: (prev.amount += 100) } : prev
        }
      })
      return prev
    })
    onShow()
  }

  return (
    <form onSubmit={calculatePrice} className="flex flex-col gap-5">
      <h2 className="max-w-[900px] font-serif text-[2rem] font-semibold leading-none">
        UI / UX Design
      </h2>
      <div className="flex flex-col items-start gap-5 lg:grid lg:grid-cols-[250px_1fr] lg:items-center">
        <label htmlFor="revision" className="capitalize">
          Design revisions
        </label>
        <input
          className="w-full max-w-[200px] rounded-[6px] border border-clr-border bg-transparent p-2 outline-none"
          type="number"
          name="revision"
          id="revision"
          min={0}
          max={50}
          value={DesignOptions.revision}
          onChange={(e) =>
            setDesignOptions((prev) => ({
              ...prev,
              revision: Number(e.target.value),
            }))
          }
        />
      </div>
      <Checkbox
        value={DesignOptions.responsive}
        onChange={() =>
          setDesignOptions((prev) => ({
            ...prev,
            responsive: !prev.responsive,
          }))
        }
        label="Responsive Design"
        id="responsive"
      />
      <Checkbox
        value={DesignOptions.mockup}
        onChange={() =>
          setDesignOptions((prev) => ({
            ...prev,
            mockup: !prev.mockup,
          }))
        }
        label="Wireframes and mockups"
        id="mockup"
      />
      <Checkbox
        value={DesignOptions.prototype}
        onChange={() =>
          setDesignOptions((prev) => ({
            ...prev,
            prototype: !prev.prototype,
          }))
        }
        label="Prototyping"
        id="prototype"
      />
      <Checkbox
        value={DesignOptions.animation}
        onChange={() =>
          setDesignOptions((prev) => ({
            ...prev,
            animation: !prev.animation,
          }))
        }
        label="Animation and interactivity"
        id="animation"
      />
      <Checkbox
        value={DesignOptions.branding}
        onChange={() =>
          setDesignOptions((prev) => ({
            ...prev,
            branding: !prev.branding,
          }))
        }
        label="Branding"
        id="branding"
      />
      <Checkbox
        value={DesignOptions.testing}
        onChange={() =>
          setDesignOptions((prev) => ({
            ...prev,
            testing: !prev.testing,
          }))
        }
        label="User testing"
        id="testing"
      />
      <Checkbox
        value={DesignOptions.maintenance}
        onChange={() =>
          setDesignOptions((prev) => ({
            ...prev,
            maintenance: !prev.maintenance,
          }))
        }
        label="Support and maintenance"
        id="maintenance"
      />
      <button
        type="submit"
        className={`btn-cta group my-8 flex min-w-[200px] items-center justify-between gap-4 self-start px-5 py-[0.85rem] hover:opacity-80`}
      >
        <span>Calculate Price</span>
        <BsArrowRightCircleFill size={22} />
      </button>
    </form>
  )
}

export default Design
