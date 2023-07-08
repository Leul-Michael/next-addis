import { BsArrowRightCircleFill } from "react-icons/bs"
import Checkbox from "../inputs/Checkbox"

const Web = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
      <h2 className="max-w-[900px] font-serif text-[2rem] font-semibold leading-none">
        Web Devlopement
      </h2>
      <div className="flex flex-col items-start gap-5 sm:grid sm:grid-cols-[250px_1fr] sm:items-center">
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
        />
      </div>
      <Checkbox label="SEO Requirements" id="seo" />
      <Checkbox label="Responsive Design" id="responsive" />
      <Checkbox
        label="Content management system (CMS) or Dashboard Required"
        id="cms"
      />
      <Checkbox label="E-commerce functionality" id="ecommerce" />
      <Checkbox label="Payment Gateways & Custom Integration" id="payment" />
      <Checkbox label="Hosting requirements" id="hosting" />
      <Checkbox label="Testing and quality assurance" id="testing" />
      <Checkbox label="Support and maintenance" id="maintenance" />
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

export default Web
