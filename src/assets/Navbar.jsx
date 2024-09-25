import React from 'react'
import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <div className='w-screen flex justify-between p-6 items-center shadow-xl'>
        <span className='text-cyan-700 font-medium tracking-wider text-lg cursor-pointer'>HOME</span>
        <Hamburger />
    </div>
  )
}

export default Navbar