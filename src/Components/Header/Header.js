import React from 'react'
import {Link} from 'react-router-dom'
import user from '../../images/user.png'
export const Header = () => {
  return (
    <>
    <div className='header flex justify-between px-12 bg-blue-950 text-3xl text-white font-bold h-20 shadow-lg shadow-black'>
    <Link to="/">
    <div className='logo py-4'>Movie App </div>
    </Link>
    
    <div className='user-image w-24  h-20  pt-2 '>
    <img src={user} alt="user" className='h-16 w-20 px-1  rounded-full'/>
    </div>

    </div>
    </>
  )
}
