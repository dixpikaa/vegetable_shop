import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Blogs from './Blogs'
import Discounts from './Discounts'

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='relative bg-[url(/hero.png)]  sm:min-ph-[25vh] sm:h-[45vh] sm:max-h-[50vh] bg-cover bg-right bg-no-repeat'>
      <div className='container py-8 sm:py-0 sm:flex justify-between items-center h-full'>
   <div className='flex items-center h-full'>
    This is About us
    </div>
    </div>
    </div>
    <Discounts/>
      <Footer/>

    </div>
  )
}

export default About