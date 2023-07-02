import useGlobals from "@/context/GlobalContext"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

const Menu = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { showMenu, setShowMenu } = useGlobals()

  return (
    <section
      className={`fixed left-0 ${
        showMenu ? "top-[0%]" : "top-[-100%]"
      } custom-transition main-container z-[100] flex h-screen flex-col gap-5 overflow-y-auto bg-clr-font text-clr-main duration-500`}
    >
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="group relative mr-3 mt-4 flex h-[50px] w-[50px] flex-col items-center justify-center gap-1 self-end overflow-hidden rounded-[100%] border border-clr-border pt-[0.35rem] hover:border-clr-accent"
      >
        <span className="custom-transition absolute left-0 top-0 h-full w-full scale-0 bg-clr-accent duration-300 group-hover:scale-100"></span>
        <span
          className={`custom-transition h-[2px] w-[65%]  -rotate-45 bg-clr-main duration-500`}
        ></span>
        <span
          className={`custom-transition h-[2px] w-[65%] -translate-y-[0.35rem] translate-x-[0.15rem] rotate-45 bg-clr-main duration-500`}
        ></span>
      </button>
      <div className="flex gap-5">
        <div className="flex flex-col gap-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-[2px] w-5 bg-clr-main"></span>
            <span>Menu</span>
          </div>
          <Link
            href={`/`}
            className="font-title flex items-center self-start overflow-hidden p-2 font-serif font-medium leading-none text-clr-main"
          >
            <div
              className={`custom-transition flex ${
                pathname === "/" ? "translate-x-0" : "-translate-x-7"
              } items-center gap-3 duration-300 hover:translate-x-0`}
            >
              <span className="flex aspect-square w-[16px] rounded-[100%] bg-clr-main"></span>
              <span>Home</span>
            </div>
          </Link>
          <Link
            href={`/`}
            className="font-title flex items-center self-start overflow-hidden p-2 font-serif font-medium leading-none text-clr-main"
          >
            <div
              className={`custom-transition flex -translate-x-7 items-center gap-3 duration-300 hover:translate-x-0`}
            >
              <span className="flex aspect-square w-[16px] rounded-[100%] bg-clr-main"></span>
              <span>Projects</span>
            </div>
          </Link>
          <Link
            href={`/`}
            className="font-title flex items-center self-start overflow-hidden p-2 font-serif font-medium leading-none text-clr-main"
          >
            <div
              className={`custom-transition flex -translate-x-7 items-center gap-3 duration-300 hover:translate-x-0`}
            >
              <span className="flex aspect-square w-[16px] rounded-[100%] bg-clr-main"></span>
              <span>Method</span>
            </div>
          </Link>
          <Link
            href={`/`}
            className="font-title flex items-center self-start overflow-hidden p-2 font-serif font-medium leading-none text-clr-main"
          >
            <div
              className={`custom-transition flex -translate-x-7 items-center gap-3 duration-300 hover:translate-x-0`}
            >
              <span className="flex aspect-square w-[16px] rounded-[100%] bg-clr-main"></span>
              <span>Blog</span>
            </div>
          </Link>
          <Link
            href={`/`}
            className="font-title flex items-center self-start overflow-hidden p-2 font-serif font-medium leading-none text-clr-main"
          >
            <div
              className={`custom-transition flex -translate-x-7 items-center gap-3 duration-300 hover:translate-x-0`}
            >
              <span className="flex aspect-square w-[16px] rounded-[100%] bg-clr-main"></span>
              <span>Contact</span>
            </div>
          </Link>
        </div>
        <div className="ml-auto flex w-full flex-wrap gap-12 self-end border-t border-clr-border py-8 md:w-[60%]">
          <div className="flex flex-col gap-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-[2px] w-5 bg-clr-main"></span>
              <span className="font-medium">Info</span>
            </div>
            <Link href="/">Testimonials</Link>
          </div>

          <div className="flex flex-col gap-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-[2px] w-5 bg-clr-main"></span>
              <span className="font-medium">Socials</span>
            </div>
            <Link href="/">Linkedin</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Behance</Link>
          </div>

          <div className="ml-auto flex flex-col gap-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-[2px] w-5 bg-clr-main"></span>
              <span className="font-medium">Say Hi</span>
            </div>
            <Link href="/" className="text-2xl font-medium leading-none">
              You@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
