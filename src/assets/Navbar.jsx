import React from 'react'
import Hamburger from './Hamburger'
import ScrollToDiv from '../Utilities/ScrollToDiv'
import Menubar from './Menubar'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [useHamburger, setUsehamburger] = useState(false);

  const updateUseHamburger = () => {
    if (window.innerWidth <= 1224) {
      setUsehamburger(true);
    } else {
      setUsehamburger(false);
    }
  };

  useEffect(() => {
    updateUseHamburger();
    window.addEventListener('resize', updateUseHamburger);

    return () => {
      window.removeEventListener('resize', updateUseHamburger);
    };
  }, []);

  return (
    <div id='NAVBAR' className='w-screen flex justify-between p-3 pl-6 pr-6 items-center shadow-xl sticky top-0 bg-[#0a192f]'>
        <span className='text-cyan-700 font-medium tracking-wider text-lg cursor-pointer' onClick={() => {ScrollToDiv('HOME')}}>HOME</span>
        {useHamburger ? (
          <Hamburger />
        ) : (
          <Menubar />
        )}
    </div>
  )
}

export default Navbar