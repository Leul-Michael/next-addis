import Image from "next/image"
import Link from "next/link"
import React from "react"

const BlogExcerpt = () => {
  return (
    <Link
      href="/blog/next-addis"
      scroll
      className="flex h-full min-h-[400px] flex-col overflow-hidden rounded-[14px] border border-clr-border lg:h-[400px]"
    >
      <Image
        src="/blog.png"
        alt="blog image"
        width={300}
        height={250}
        className="h-auto w-auto object-cover"
      />
      <div className="flex h-full flex-col justify-between gap-2 p-4">
        <div className="flex flex-grow flex-col gap-2">
          <p className="text-sm font-semibold text-clr-muted/70">Technology</p>
          <p className="text-lg leading-[1.2] text-clr-font">
            We help <span className="font-medium underline">Fast Growth</span>{" "}
            Teams Scale Their Design Roadmaps At Lightning Speeds
          </p>
        </div>
        <p className="mt-auto self-end text-sm font-semibold text-clr-muted/70">
          Jul 20
        </p>
      </div>
    </Link>
  )
}

export default BlogExcerpt
