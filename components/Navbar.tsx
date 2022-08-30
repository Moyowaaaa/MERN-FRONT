import React from 'react'
import Link from 'next/link'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar:React.FC = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleLogout = () => {
        logout()
    }

  return (

    <div className='h-[4rem]  flex w-full bg-[#141414] text-white'>
            <nav className='flex w-full h-full px-20 '>
          {user && (
            <div className='flex w-screen h-full justify-between items-center  '>
              <span>{user.email}</span>
              <button onClick={handleLogout}>Log out</button>
            </div>
          )}
            {!user && (
            <div className='flex w-full h-full justify-between items-center'>
    <Link href="/">Login</Link>
    <Link href="/Signup">Signup</Link>
            </div>
          )}
        </nav>
    </div>
  )
 
}


export default Navbar