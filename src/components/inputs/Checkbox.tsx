import { ChangeEventHandler, useEffect, useState } from "react"

type CheckboxProps = {
  label: string
  id: string
  value: boolean
  onChange: () => void
  required?: boolean
}

const Checkbox = ({ label, id, value, onChange, required }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(value)
  const onValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    onChange()
  }

  useEffect(() => {
    setIsChecked(value)
  }, [value])

  return (
    <div className="flex items-center">
      <label htmlFor={id} className="checkbox">
        {" "}
        {label}
        <input
          className="w-max rounded-[6px] border border-clr-border bg-transparent p-2 outline-none"
          type="checkbox"
          name={id}
          id={id}
          required={required}
          checked={isChecked}
          onChange={onValueChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default Checkbox
