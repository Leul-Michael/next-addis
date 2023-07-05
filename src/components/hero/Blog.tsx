import React from "react"
import BlogExcerpt from "../excerpts/BlogExcerpt"
import Btncta from "../Btncta"

const Blog = () => {
  return (
    <section className="flex flex-col gap-16 py-24">
      <h1 className="font-subtitle font-serif font-semibold leading-none">
        Insights.
      </h1>
      <div className="grid grid-cols-blog gap-8 lg:gap-16">
        <BlogExcerpt />
        <BlogExcerpt />
        <BlogExcerpt />
      </div>
      <Btncta className="btn-cta-outline" to="/" name="Read Our Blog" />
    </section>
  )
}

export default Blog
