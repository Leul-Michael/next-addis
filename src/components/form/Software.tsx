import React, { FormEventHandler, useState } from "react"
import Checkbox from "../inputs/Checkbox"
import { BsArrowRightCircleFill } from "react-icons/bs"
import { WebOptionProps } from "../../../types"
import useGlobals from "@/context/GlobalContext"

type WebServiceProps = {
  onShow: () => void
}

const Software = ({ onShow }: WebServiceProps) => {
  const { setPrice } = useGlobals()
  const [WebOptions, setWebOptions] = useState<WebOptionProps>({
    pages: 1,
    seo: false,
    responsive: false,
    cms: false,
    ecommerce: false,
    payment: false,
    hosting: false,
    testing: false,
    maintenance: false,
  })

  const calculatePrice: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setPrice({ type: "web", amount: 500 })
    setPrice((prev) => {
      ;[...Object.entries(WebOptions)].map((v) => {
        if (typeof v[1] === "number") {
          v[1] > 1
            ? { ...prev, amount: (prev.amount += 100 + v[1] * 10) }
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
        Software Devlopement
      </h2>
      <div className="flex flex-col items-start gap-5 lg:grid lg:grid-cols-[250px_1fr] lg:items-center">
        <label htmlFor="pages" className="capitalize">
          Number of pages
        </label>
        <input
          className="w-full max-w-[200px] rounded-[6px] border border-clr-border bg-transparent p-2 outline-none"
          type="number"
          name="pages"
          id="pages"
          min={1}
          max={50}
          required
          value={WebOptions.pages}
          onChange={(e) =>
            setWebOptions((prev) => ({
              ...prev,
              pages: Number(e.target.value),
            }))
          }
        />
      </div>
      <Checkbox
        value={WebOptions.seo}
        onChange={() =>
          setWebOptions((prev) => ({
            ...prev,
            seo: !prev.seo,
          }))
        }
        label="SEO Requirements"
        id="seo"
      />
      <Checkbox
        value={WebOptions.responsive}
        onChange={() =>
          setWebOptions((prev) => ({
            ...prev,
            responsive: !prev.responsive,
          }))
        }
        label="Responsive Design"
        id="responsive"
      />
      <Checkbox
        value={WebOptions.cms}
        onChange={() =>
          setWebOptions((prev) => ({
            ...prev,
            cms: !prev.cms,
          }))
        }
        label="Content management system (CMS) or Dashboard Required"
        id="cms"
      />
      <Checkbox
        value={WebOptions.ecommerce}
        onChange={() =>
          setWebOptions((prev) => ({
            ...prev,
            ecommerce: !prev.ecommerce,
          }))
        }
        label="E-commerce functionality"
        id="ecommerce"
      />
      <Checkbox
        value={WebOptions.payment}
        onChange={() =>
          setWebOptions((prev) => ({
            ...prev,
            payment: !prev.payment,
          }))
        }
        label="Payment Gateways & Custom Integration"
        id="payment"
      />
      <Checkbox
        value={WebOptions.hosting}
        onChange={() =>
          setWebOptions((prev) => ({
            ...prev,
            hosting: !prev.hosting,
          }))
        }
        label="Hosting requirements"
        id="hosting"
      />
      <Checkbox
        value={WebOptions.testing}
        onChange={() =>
          setWebOptions((prev) => ({
            ...prev,
            testing: !prev.testing,
          }))
        }
        label="Testing and quality assurance"
        id="testing"
      />
      <Checkbox
        value={WebOptions.maintenance}
        onChange={() =>
          setWebOptions((prev) => ({
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
export default Software
