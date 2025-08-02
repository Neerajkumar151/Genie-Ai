import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SiteOverview from '../components/SiteOverview'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SiteOverview/>
      <AiTools/>
      <Testimonial/>
      <Plan/>
      <Footer/>
    </>
  )
}

export default Home
