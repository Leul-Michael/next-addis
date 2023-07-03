import Link from "next/link"
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai"
import { BiLogoTelegram } from "react-icons/bi"

const Footer = () => {
  return (
    <footer className="flex h-full w-full flex-col rounded-[50px_50px_0px_0px] border-t border-clr-border pb-12 pt-8">
      <div className="main-container auto-h flex w-full items-start justify-between">
        <div className="flex w-full items-center gap-7">
          <Link href="/">
            <h1 className="relative flex items-baseline">
              <span className="absolute left-[1.45rem] top-0 text-[0.5rem]">
                digital agency
              </span>
              <span className="font-serif text-[1.75rem] font-black">Next</span>
              <span className="font-serif text-[1.45rem] font-semibold uppercase">
                Addis.
              </span>
            </h1>
          </Link>
        </div>
        <div className="flex w-full flex-col gap-16">
          <div className="flex">
            <ul className="flex flex-col gap-1">
              <p className="mb-4 font-serif text-xl font-bold leading-[1.2] text-clr-muted">
                Ethiopia
              </p>
              <li className="text-sm text-clr-muted">Bole, Addis Ababa</li>
              <li className="text-sm text-clr-muted">+2519404040</li>
            </ul>
          </div>
          <div className="flex items-center justify-between gap-8">
            <ul className="flex items-center gap-8">
              <BiLogoTelegram
                size={30}
                className="cursor-pointer duration-300 hover:text-clr-accent"
              />
              <AiOutlineInstagram
                size={30}
                className="cursor-pointer duration-300 hover:text-clr-accent"
              />
              <AiOutlineTwitter
                size={30}
                className="cursor-pointer duration-300 hover:text-clr-accent"
              />
              <AiOutlineLinkedin
                size={30}
                className="cursor-pointer duration-300 hover:text-clr-accent"
              />
            </ul>
            <p className="text-sm text-clr-muted">
              © 2023, All rights reserved!
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
