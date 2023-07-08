type CheckboxProps = {
  label: string
  id: string
  value?: string
  onChange?: (v: string) => void
}

const Checkbox = ({ label, id, value, onChange }: CheckboxProps) => {
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
        />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default Checkbox
