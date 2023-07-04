import Image from "next/image"

type TechnologyExcerptProps = {
  name: string
  image: string
}

const TechnologyExcerpt = ({ name, image }: TechnologyExcerptProps) => {
  return (
    <article
      className={`rounded-[6 px] flex h-full flex-col items-center justify-center
        overflow-hidden bg-clr-border/30 px-5 py-3`}
    >
      <div
        className="rounded-[6 px] flex max-w-[500px] flex-col items-center justify-center
        gap-5"
      >
        <h1 className="max-w-[400px] text-base font-semibold leading-none md:text-xl">
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
      </div>
    </article>
  )
}

export default TechnologyExcerpt
