import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#141414] text-white">
        <Navbar />
        <LoginForm />

    </div>
  )
}

export default Home
