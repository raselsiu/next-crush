import Link from 'next/link'
import React from 'react'

export default function Blog() {


  const blogs = [{
    id: 1,
    title: "this is title 1",
    description: "this is descriptions 1"
  },
  {
    id: 2,
    title: "this is title 2",
    description: "this is descriptions 2"
  },
  {
    id: 3,
    title: "this is title 3",
    description: "this is descriptions 3"
  },
  ]

  return (
    <div>
      <h3>Blogs</h3>
      <ul>
        {blogs.map(blog => <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>)}
      </ul>

    </div>
  )
}
