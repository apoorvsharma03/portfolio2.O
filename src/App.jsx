import React from 'react'
import Background from './assets/Background'
import Navbar from './assets/NavigationMenu/Navbar'
import Home from './assets/Home/Home'

const App = () => {
  return (
    <div>
      <Background/>
      <Navbar />
      <Home />
    </div>
  )
}

export default App