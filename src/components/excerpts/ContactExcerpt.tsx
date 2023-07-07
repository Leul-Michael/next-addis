import { DetailedHTMLProps, HTMLAttributes } from "react"
import Btncta from "../Btncta"

type ContactExcerptProps = { className?: string } & DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

const ContactExcerpt = ({ className }: ContactExcerptProps) => {
  return (
    <section
      className={`my-20 flex flex-col gap-16 rounded-[14px] bg-clr-border/30 px-8 py-12 lg:px-12 lg:py-16 ${className}`}
    >
      <div className="mx-auto flex max-w-[600px] flex-col items-center justify-center gap-5 text-center">
        <h1 className="font-subtitle font-serif font-semibold leading-none">
          We Think , Craft and Produce
        </h1>
        <p className="text-lg capitalize leading-[1.2] text-clr-font">
          Get in touch with us and Let&apos;s build something{" "}
          <span className="font-medium underline">great</span> together!
        </p>
        <Btncta className="self-center" to="/contact" name="Contact Us" />
      </div>
    </section>
  )
}

export default ContactExcerpt
