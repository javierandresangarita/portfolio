import React from 'react'
import ProjectImg from '../assets/project.png';
import projectImg from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
const Project = () => {
  return (
    <secton id='project' className='flex  flex-col py-5 px-5 justify-center bg-primary text-white'>
      <div className='w-full'>
        <div className='flex flex-col px-10 py-5'>

          <h1 className='text-4xl text-white border-b-4 mb-5 w-[150px] font-bold'>Projects</h1>
          <p>
            These are some of my best projects.I have built these with React,Vue,tailwind CSS check them out.
          </p>
        </div>
      </div>
      <div className='w-full'>
        <div className=' flex flex-col md:flex-row px-12 gap-6 '>
          <div className='relative'>
            <a href='https://tmbnotes.co/' target="_blank" >
              <img className='h-[300px] w-[500px]' src={ProjectImg} />

              <div className='absolute left-0 right-0 bottom-0 top-[0px] bg-secondary opacity-0 duration-500 hover:opacity-100'>
                <p className='text-center  py-5'>
                  TMB Notes Online Shop site, Bulid with Full-stack
                </p>
              </div>
            </a>
          </div>
          <div className='relative'>
            <a href='https://www.shopify.com/' target="_blank">

              <img className='h-[300px] w-[500px]' src={projectImg} />

              <div className='absolute left-0 right-0 bottom-0 top-[0px] bg-secondary opacity-0 duration-500 hover:opacity-100'>
                <p className='text-center py-5'>Geek Bar websites. Bulid with Full-stack</p>
              </div>        </a>
          </div>
          <div className='relative'>
            <a href='https://www.living36.com/' target="_blank">

              <img className='h-[300px] w-[500px]' src={projectImg2} />

              <div className='absolute left-0 right-0 bottom-0 top-[0px] bg-secondary opacity-0 duration-500 hover:opacity-100'>
                <p className='text-center py-5'>Google Digital Success Story Agency websites. Built a custom HubSpot and Salesforce integration to streamline lead management.</p>
              </div>     </a>
          </div>

        </div>

      </div>

    </secton>
  )
}

export default Project
