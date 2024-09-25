import React from 'react'
import Hamburger from './Hamburger'
import ScrollToDiv from '../Utilities/ScrollToDiv'

const Navbar = () => {
  return (
    <div id='NAVBAR' className='w-screen flex justify-between p-3 pl-6 pr-6 items-center shadow-xl sticky top-0 bg-[#0a192f]'>
        <span className='text-cyan-700 font-medium tracking-wider text-lg cursor-pointer' onClick={() => {ScrollToDiv('HOME')}}>HOME</span>
        <Hamburger />
    </div>
  )
}

export default Navbar