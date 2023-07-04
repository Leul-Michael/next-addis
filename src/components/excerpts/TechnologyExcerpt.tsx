import Image from "next/image"
import { motion } from "framer-motion"

type TechnologyExcerptProps = {
  name: string
  image: string
}

const TechnologyExcerpt = ({ name, image }: TechnologyExcerptProps) => {
  return (
    <motion.article
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex h-full max-w-[500px] flex-col items-center justify-center gap-8 overflow-hidden
        rounded-[6px] bg-clr-border/30 px-5 pb-3 pt-5 lg:py-3`}
    >
      <h1 className="max-w-[400px] text-center text-base font-semibold leading-none md:text-xl">
        {name}
      </h1>
      <div className="relative aspect-square w-20 overflow-hidden rounded-[4px] lg:w-24">
        <Image
          src={image}
          alt="technology image"
          fill
          sizes="(max-width: 0px) 100vw"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </motion.article>
  )
}

export default TechnologyExcerpt
