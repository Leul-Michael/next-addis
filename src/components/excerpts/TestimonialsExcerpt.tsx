import { AiFillStar } from "react-icons/ai"

type TestimonialsExcerptProps = {
  name: string
  image: string
}

const TestimonialsExcerpt = () => {
  return (
    <article
      className={`flex h-full max-w-[500px] flex-col gap-8 overflow-hidden
        rounded-[6px] bg-clr-border/30 px-5 pb-3 pt-5 lg:py-3`}
    >
      <div className="flex items-center gap-1">
        <AiFillStar size={20} className="text-yellow-300" />
        <AiFillStar size={20} className="text-yellow-300" />
        <AiFillStar size={20} className="text-yellow-300" />
        <AiFillStar size={20} className="text-yellow-300" />
        <AiFillStar size={20} className="text-yellow-300" />
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi
        neque quas expedita nostrum. Quaerat dicta officiis necessitatibus sed
        vero.
      </p>
      <h1 className="max-w-[400px] text-base font-semibold leading-none md:text-xl">
        Justine <i>from</i> Australia
      </h1>
    </article>
  )
}

export default TestimonialsExcerpt
