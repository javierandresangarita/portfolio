import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary'>
      <div className=' py-5 md:w-1/2 bg-secondary px-5'>
        <img src={AboutImg} />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className=' flex flex-col justify-center text-white'>
          <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold'> About Me</h1>
          <p className='pb-5 text-xl'>Hi, I'm  Javier Andres Angarita, a Full-Stack Developer specializing in React, Shopify, and CRM solutions. </p>
          <p className='pb-5 text-xl'>I build scalable e - commerce platforms and custom web applications that enhance user experience and business efficiency.</p>
          <p className='pb-5 text-xl'>With expertise in frontend and backend development, I create high - performance solutions, from dynamic Shopify storefronts to custom CRM integrations and optimized web applications.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About



