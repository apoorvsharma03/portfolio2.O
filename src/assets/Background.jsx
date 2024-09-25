import React from 'react'
import MouseGlow from './MouseGlow'

const Background = () => {
  return (
    <div className='w-screen min-h-screen -z-10 fixed top-0 left-0 bg-[#0a192f]'>
        <MouseGlow/>
    </div>
  )
}

export default Background