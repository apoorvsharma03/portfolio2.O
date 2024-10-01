import React from 'react'
import Background from './assets/Background'
import Navbar from './assets/Navbar'
import Home from './assets/Home'
import AboutMe from './assets/AboutMe'
import Experiences from './assets/Experiences'

const App = () => {
  return (
    <div>
      <Background/>
      <Navbar />
      <Home />
      <AboutMe />
      <Experiences />
    </div>
  )
}

export default App