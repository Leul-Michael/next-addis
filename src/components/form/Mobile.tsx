import { BsArrowRightCircleFill } from "react-icons/bs"
import { FormEventHandler, useState } from "react"
import { MobileOptionProps } from "../../../types"
import Checkbox from "../inputs/Checkbox"
import CustomSelect from "../CustomSelect"
import useGlobals from "@/context/GlobalContext"

const BuildTypeOptions = [
  {
    for: "type",
    label: "Native",
    value: 1,
  },
  {
    for: "type",
    label: "Hybrid",
    value: 2,
  },
]

const PlatformOptions = [
  {
    for: "platform",
    label: "Android",
    value: 1,
  },
  {
    for: "platform",
    label: "IOS",
    value: 2,
  },
  {
    for: "platform",
    label: "Both",
    value: 3,
  },
]

const Mobile = ({ onShow }: { onShow: () => void }) => {
  const [err, setErr] = useState({
    for: "",
  })
  const { setPrice } = useGlobals()
  const [mobileOptions, setMobileOptions] = useState<MobileOptionProps>({
    platform: null,
    type: null,
    design: false,
    auth: false,
    notification: false,
    purchase: false,
    backend: false,
    testing: false,
    maintenance: false,
  })

  const calculatePrice: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setErr({
      for: "",
    })
    if (!mobileOptions.platform) {
      setErr({ for: "platform" })
      return
    }
    if (!mobileOptions.type) {
      setErr({ for: "type" })
      return
    }
    setPrice({
      type: "mobile",
      amount: mobileOptions.type?.label === "Hybrid" ? 600 : 500,
    })
    setPrice((prev) => {
      ;[...Object.entries(mobileOptions)].map((v) => {
        if (typeof v[1] === "boolean") {
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
        Mobile Devlopement
      </h2>
      <div className="flex flex-col items-start gap-5 lg:grid lg:grid-cols-[250px_1fr] lg:items-center">
        <label htmlFor="platform" className="capitalize">
          Platform
        </label>
        <CustomSelect
          value={mobileOptions.platform}
          options={PlatformOptions}
          onChange={(p) => {
            setMobileOptions((prev) => ({
              ...prev,
              platform: p,
            }))
          }}
          err={err.for === "platform"}
        />
      </div>
      <div className="flex flex-col items-start gap-5 lg:grid lg:grid-cols-[250px_1fr] lg:items-center">
        <label htmlFor="type" className="capitalize">
          Build Type
        </label>
        <CustomSelect
          value={mobileOptions.type}
          options={BuildTypeOptions}
          onChange={(t) => {
            setMobileOptions((prev) => ({
              ...prev,
              type: t,
            }))
          }}
          err={err.for === "type"}
        />
      </div>
      <Checkbox
        value={mobileOptions.design}
        onChange={() =>
          setMobileOptions((prev) => ({
            ...prev,
            design: !prev.design,
          }))
        }
        label="UI / UX design"
        id="design"
      />

      <Checkbox
        value={mobileOptions.auth}
        onChange={() =>
          setMobileOptions((prev) => ({
            ...prev,
            auth: !prev.auth,
          }))
        }
        label="User authentication"
        id="auth"
      />
      <Checkbox
        value={mobileOptions.notification}
        onChange={() =>
          setMobileOptions((prev) => ({
            ...prev,
            notification: !prev.notification,
          }))
        }
        label="Push notifications"
        id="notification"
      />
      <Checkbox
        value={mobileOptions.purchase}
        onChange={() =>
          setMobileOptions((prev) => ({
            ...prev,
            purchase: !prev.purchase,
          }))
        }
        label="In app purchases"
        id="purchase"
      />
      <Checkbox
        value={mobileOptions.backend}
        onChange={() =>
          setMobileOptions((prev) => ({
            ...prev,
            backend: !prev.backend,
          }))
        }
        label="Backend Development or Integration"
        id="backend"
      />
      <Checkbox
        value={mobileOptions.testing}
        onChange={() =>
          setMobileOptions((prev) => ({
            ...prev,
            testing: !prev.testing,
          }))
        }
        label="Testing and quality assurance"
        id="testing"
      />
      <Checkbox
        value={mobileOptions.maintenance}
        onChange={() =>
          setMobileOptions((prev) => ({
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

export default Mobile
