import React from "react"
import BlogExcerpt from "../excerpts/BlogExcerpt"
import Btncta from "../Btncta"

const Blog = ({
  related,
  className = "",
}: {
  related?: Boolean
  className?: string
}) => {
  return (
    <section className={`flex flex-col gap-16 py-24 ${className}`}>
      <h1 className="font-subtitle font-serif font-semibold leading-none">
        {related ? "Related Blogs." : "Blogs."}
      </h1>
      <div className="grid grid-cols-blog gap-8 lg:gap-16">
        <BlogExcerpt />
        <BlogExcerpt />
        <BlogExcerpt />
      </div>
      {!related && (
        <Btncta className="btn-cta-outline" to="/blog" name="Read Our Blog" />
      )}
    </section>
  )
}

export default Blog
