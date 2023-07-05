import Link from "next/link"
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai"
import { BiLogoTelegram } from "react-icons/bi"

const Footer = () => {
  return (
    <footer className="flex h-full w-full flex-col border-t border-clr-border pb-12 pt-8">
      <div className="main-container auto-h flex w-full flex-col gap-16 md:flex-row md:items-start md:justify-between md:gap-8">
        <div className="flex w-[40%] items-center gap-7">
          <Link href="/">
            <h1 className="relative flex items-baseline">
              <span className="font-serif text-[1.5rem] font-black md:text-[1.75rem]">
                Next
              </span>
              <span className="font-serif text-[1.25rem] font-semibold uppercase md:text-[1.45rem]">
                Addis.
              </span>
            </h1>
          </Link>
        </div>
        <div className="flex w-[60%] flex-col gap-16">
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-1">
              <p className="mb-4 font-serif text-xl font-bold leading-[1.2] text-clr-muted">
                Links
              </p>
              <Link href="/" className="text-sm text-clr-muted">
                Home
              </Link>
              <Link href="/" className="text-sm text-clr-muted">
                About
              </Link>
              <Link href="/" className="text-sm text-clr-muted">
                Projects
              </Link>
              <Link href="/" className="text-sm text-clr-muted">
                Methods
              </Link>
              <Link href="/" className="text-sm text-clr-muted">
                Blog
              </Link>
              <Link href="/" className="text-sm text-clr-muted">
                Contact
              </Link>
            </div>
            <ul className="flex flex-col gap-1">
              <p className="mb-4 font-serif text-xl font-bold leading-[1.2] text-clr-muted">
                Address
              </p>
              <li className="text-sm text-clr-muted">123 road, G tower Bole</li>
              <li className="text-sm text-clr-muted">Addis Ababa, Ethiopia</li>
              <li className="text-sm text-clr-muted">+2519404040</li>
            </ul>
            <ul className="flex flex-col gap-1">
              <p className="mb-4 font-serif text-xl font-bold leading-[1.2] text-clr-muted">
                Say Hi
              </p>
              <li className="text-sm text-clr-muted">Your@gmail.com</li>
            </ul>
          </div>
          <div className="flex flex-col flex-wrap justify-between gap-8 sm:flex-row sm:items-center">
            <ul className="flex items-center gap-8">
              <BiLogoTelegram
                size={30}
                className="cursor-pointer duration-150 hover:text-clr-accent"
              />
              <AiOutlineInstagram
                size={30}
                className="cursor-pointer duration-150 hover:text-clr-accent"
              />
              <AiOutlineTwitter
                size={30}
                className="cursor-pointer duration-150 hover:text-clr-accent"
              />
              <AiOutlineLinkedin
                size={30}
                className="cursor-pointer duration-150 hover:text-clr-accent"
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
