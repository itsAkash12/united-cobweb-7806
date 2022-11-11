import React from 'react'
import Navbar from '../Header/Navbar'
import SliderCarousel from '../Slider/SliderCarousel'
import BottomSection from './BottomSection'
import MiddleSection from './MiddleSection'
import TopSection from './TopSection'
import Footer from "../Footer/Footer"

function Homepage() {
  return (
    <div>
      <Navbar />
      <TopSection />
      <MiddleSection />
      <SliderCarousel />
      <BottomSection />
      <Footer />
    </div>
  )
}

export default Homepage
