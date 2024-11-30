import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
const HomePage = () => {
  return (
    <div className='min-h-screen w-full font-alexandria'>
      <NavBar/>
      <Hero/>
      <AboutUs/>
    </div>
  )
}

export default HomePage