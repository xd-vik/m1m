import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import Footer from  '../Components/Footer'
import Work from '../Components/Work'
const HomePage = () => {
  return (
    <div className='min-h-screen w-full font-alexandria'>
      <NavBar/>
      <Hero/>
      <AboutUs/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default HomePage