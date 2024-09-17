import React from 'react'
import BlogCard from './BlogCard'
import Navbar from './Navbar'
import Footer from './Footer'

const blogsData = [
  {
    img: "/post-1.jpg",
    desc: "Sample Description 1 some more text just to make UI a little attractive thats all "

  },
  {
    img: "/post-2.jpg",
    desc: "Sample Description 2 some more text just to make UI a little attractive thats all "

  },
  {
    img: "/post-3.jpg",
    desc: "Sample Description 3 some more text just to make UI a little attractive thats all "

  },
  {
    img: "/post-4.jpg",
    desc: "Sample Description 4 some more text just to make UI a little attractive thats all "

  },
]
const Blogs = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-20 mb-10'>
      <div className='container'>
        <h2 className='ext-xl md:text-4xl pb-4 sm:pb-0'>Our Blogs</h2>
        <div className='pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            blogsData.map(blog => (
          <BlogCard
            key={blog.desc}
            image={blog.img}
            desc={blog.desc}
          />
          ))
          }
        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Blogs