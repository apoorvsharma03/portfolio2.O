import React from 'react'

const Menubar = () => {
    const menuItems = ['ABOUT ME', 'EXPEREINCES', 'PROJECTS', 'SKILLS', 'CONTACT ME'];
  return (
    <div className='flex'>
        {menuItems.map((item) => (  
            <div
                key={item}  
                className="menu-item text-cyan-700 hover:text-[#0a192f] hover:bg-cyan-700 p-2 mb-1 mr-4 font-medium tracking-wider cursor-pointer transition-all rounded-lg ease-in-out"
                onClick={() => {
                    setmenuOpen(!menuOpen)
                    ScrollToDiv(item)
                    }}
            >  
                {item}
            </div>
        ))}
    </div>
  )
}

export default Menubar