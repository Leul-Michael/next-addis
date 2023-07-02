import React from "react"
import BlogExcerpt from "../excerpts/BlogExcerpt"

const Blog = () => {
  return (
    <section className="flex flex-col gap-16 py-20">
      <h1 className="font-subtitle font-serif font-semibold leading-none">
        Insights.
      </h1>
      <div className="grid grid-cols-3 gap-16">
        <BlogExcerpt />
        <BlogExcerpt />
        <BlogExcerpt />
      </div>
    </section>
  )
}

export default Blog
