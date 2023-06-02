import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blogs, title}) => {

    const Blogs = blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
    ))

  return (
    <div className='blog-list'>
        <h2>{ title }</h2>
        { Blogs }
    </div>
  )
}

export default BlogList