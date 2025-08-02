import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
const navigate=useNavigate()

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
      <div className='text-center mb-6'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Create amazing Content <br/>with <span className='text-primary'>AI tools</span></h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-xl font-medium text-gray-700'>Supercharge your ideas with AI. Create content, generate images, analyze resumes, and automate tasks — all in one place.</p>
      </div>

      <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
        <button onClick={()=> navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer text-base'>Start creating now</button>
        <button className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-105 active:scale-95 transition cursor-pointer text-base'>Watch Demo</button>
      </div>
      <div className='flex items-center gap-6 mt-8 mx-auto text-gray-600 text-lg'>
        <img src={assets.user_group} alt="" className='h-8'/>Trusted by 1M+ people
      </div>
    </div>
  )
}

export default Hero
