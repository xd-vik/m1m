import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import Footer from  '../Components/Footer'
const HomePage = () => {
  return (
    <div className='min-h-screen w-full font-alexandria'>
      <NavBar/>
      <Hero/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default HomePage