import { NextPage } from 'next'
import React from 'react'
import Navbar from '../components/Navbar'
import SignupFrom from '../components/SignupFrom'

const Signup:NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center bg-[#141414] text-white'>
    <Navbar />
        <SignupFrom />
    </div>
  )
}

export default Signup