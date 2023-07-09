import { AiFillStar } from "react-icons/ai"

type TestimonialsExcerptProps = {
  name: string
  image: string
}

const TestimonialsExcerpt = () => {
  return (
    <article
      className={`relative flex h-full flex-col gap-5 overflow-hidden rounded-[6px]
        bg-clr-border/30 px-5 pb-3 pt-5 lg:py-3`}
    >
      <div className="sticky left-0 top-0">
        <svg
          fill="#cac2ff"
          width="50"
          height="50"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>quote</title>
          <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
        </svg>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi
        neque quas expedita nostrum. Quaerat dicta officiis necessitatibus sed
        vero.
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-[45px] w-[45px] items-center justify-center rounded-[100%] bg-clr-main">
            H
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <h1 className="text-base font-medium leading-none">Justine</h1>
            <p className="text-xs">CEO of airbox</p>
          </div>
        </div>
        {/* <h1 className="max-w-[400px] text-base font-semibold leading-none md:text-xl">
        Justine <i>from</i> Australia
      </h1> */}
        <div className="flex items-center">
          <AiFillStar size={15} className="text-yellow-300" />
          <AiFillStar size={15} className="text-yellow-300" />
          <AiFillStar size={15} className="text-yellow-300" />
          <AiFillStar size={15} className="text-yellow-300" />
          <AiFillStar size={15} className="text-yellow-300" />
        </div>
      </div>
    </article>
  )
}

export default TestimonialsExcerpt
