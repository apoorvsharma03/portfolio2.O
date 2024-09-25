import React from 'react'
import { useState } from 'react'
import "./Hamburger.css"

const Hamburger = () => {
    const [menuOpen, setmenuOpen] = useState(false)
    const menuItems = ['ABOUT ME', 'EXPEREINCES', 'PROJECTS', 'SKILLS', 'CONTACT ME'];

  return (
    <div className='flex flex-col items-end text-cyan-700'>
        <div className='cursor-pointer'>
            <ion-icon name="menu-sharp" size="large" onClick={() => setmenuOpen(!menuOpen)}/>
        </div>
        {menuOpen && 
            <div className="absolute w-fit h-fit top-16 text-right">
                {menuItems.map((item, index) => (  
                    <div
                        key={item}  
                        className="menu-item text-[#0a192f] bg-cyan-700 opacity-0 translate-x-full p-2 mb-1"
                        onClick={() => {
                            setmenuOpen(!menuOpen)
                        }}
                        style={{  
                        animation: `${menuOpen ? 'slideIn' : 'slideOut'} 0.3s ease forwards`,  
                        animationDelay: `${index * 0.1}s`  
                        }}  
                    >  
                        <div className='font-medium tracking-wider cursor-pointer'>{item}</div>  
                    </div>
                ))}
            </div>}
    </div>
  )
}

export default Hamburger