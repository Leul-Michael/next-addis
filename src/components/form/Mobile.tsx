import { BsArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react"
import { SelectOption } from "../../../types"
import platforms from "@/data/platform.json"
import Checkbox from "../inputs/Checkbox"
import CustomSelect from "../CustomSelect"

const Mobile = () => {
  const [platform, setPlatform] = useState<SelectOption | null>(null)
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
      <h2 className="max-w-[900px] font-serif text-[2rem] font-semibold leading-none">
        Mobile Devlopement
      </h2>
      <div className="flex flex-col items-start gap-5 sm:grid sm:grid-cols-[250px_1fr] sm:items-center">
        <label htmlFor="platform" className="capitalize">
          Platform
        </label>
        <CustomSelect
          value={platform}
          options={platforms}
          onChange={(p) => setPlatform(p)}
        />
      </div>

      <Checkbox label="Native or hybrid" id="hybrid" />
      <Checkbox label="UI/UX design" id="design" />
      <div className="flex flex-col items-start gap-5 sm:grid sm:grid-cols-[250px_1fr] sm:items-center">
        <label htmlFor="type" className="capitalize">
          App type
        </label>
        <input
          className="w-full max-w-[300px] rounded-[6px] border border-clr-border bg-transparent p-2 outline-none"
          type="text"
          name="type"
          id="type"
          placeholder="e.x. Social media"
        />
      </div>
      <Checkbox label="User authentication" id="auth" />
      <Checkbox label="Push notifications" id="notification" />
      <Checkbox label="In app purchases" id="purchase" />
      <Checkbox label="Backend Development or Integration" id="backend" />
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

export default Mobile
