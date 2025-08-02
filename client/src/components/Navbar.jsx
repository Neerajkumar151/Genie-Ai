import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'


const Navbar = () => {
  const navigate = useNavigate()
  const {user} = useUser()
  const {openSignIn} = useClerk()

  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-4 sm:px-20 xl:px-20'>
      <img src={assets.logo} alt="logo" className='w-25 sm:w-50 cursor-pointer' onClick={()=>navigate('/')} />

    {
      user ? <UserButton/> : (
        <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-base cursor-pointer bg-primary text-white px-10 py-2.5'>Get Started <ArrowRight className='w-4 h-4'/></button>
      )
    }
    </div>
  )
}

export default Navbar
