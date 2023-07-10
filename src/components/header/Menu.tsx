import useGlobals from "@/context/GlobalContext"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"

const Menu = () => {
  const router = useRouter()
  const { showMenu, setShowMenu } = useGlobals()

  const nav = {
    open: { y: 0, transition: { duration: 0.5 } },
    closed: {
      y: "-120%",
      transition: { duration: 0.15, delay: 0.4 },
    },
  }

  const variants = {
    open: {
      transition: {
        delay: 0.5,
        staggerChildren: 0.135,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.135,
        staggerDirection: -1,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.section
      variants={nav}
      initial="closed"
      animate={showMenu ? "open" : "closed"}
      className={`custom-transition fixed left-0 z-[101] flex h-screen w-full  bg-clr-font text-clr-main duration-500`}
    >
      <div className="main-container scrollbar-none flex flex-col gap-5 overflow-y-auto">
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="group relative mt-4 flex h-[50px] w-[50px] flex-col items-center justify-center gap-1 self-end overflow-hidden rounded-[100%] border border-clr-border pt-[0.35rem] hover:border-clr-accent md:mr-3"
        >
          <span className="custom-transition absolute left-0 top-0 h-full w-full scale-0 bg-clr-accent duration-300 group-hover:scale-100"></span>
          <span
            className={`custom-transition h-[2px] w-[65%]  -rotate-45 bg-clr-main duration-500`}
          ></span>
          <span
            className={`custom-transition h-[2px] w-[65%] -translate-y-[0.35rem] translate-x-[0.15rem] rotate-45 bg-clr-main duration-500`}
          ></span>
        </button>
        <motion.div className="flex gap-5" variants={variants}>
          <div className="flex flex-col gap-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-[2px] w-5 bg-clr-main"></span>
              <span>Menu</span>
            </div>
            <MenuLinks title="Home" link="/" />
            <MenuLinks title="About" link="/about" />
            <MenuLinks title="Works" link="/work" />
            <MenuLinks title="Pricing" link="/pricing" />
            {/* <MenuLinks title="Testimonials" link="/testimonial" /> */}
            <MenuLinks title="Blog" link="/blog" />
            <MenuLinks title="Contact" link="/contact" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Menu

const MenuLinks = ({ title, link }: { title: string; link: string }) => {
  const pathname = usePathname()
  const { setShowMenu } = useGlobals()

  const linkItem = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <motion.div variants={linkItem}>
      <Link
        href={link}
        onClick={() => setShowMenu(false)}
        className="font-title flex items-center self-start overflow-hidden p-2 font-serif font-medium leading-none text-clr-main"
      >
        <motion.div
          className={`custom-transition flex ${
            pathname === link ? "translate-x-0" : "-translate-x-7"
          } items-center gap-3 duration-300 hover:translate-x-0`}
        >
          <span className="flex aspect-square w-[16px] rounded-[100%] bg-clr-main"></span>
          <span>{title}</span>
        </motion.div>
      </Link>
    </motion.div>
  )
}
