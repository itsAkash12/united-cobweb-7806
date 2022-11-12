import React from 'react'
import Navbar from '../../components/Header/Navbar'
import SliderCarousel from '../../components/Slider/SliderCarousel'
import BottomSection from '../../components/HomeSection/BottomSection'
import MiddleSection from '../../components/HomeSection/MiddleSection'
import TopSection from '../../components/HomeSection/TopSection'
import Footer from "../../components/Footer/Footer"

function Homepage() {
  return (
    <div>
      <TopSection />
      <MiddleSection />
      <SliderCarousel />
      <BottomSection />
    </div>
  )
}

export default Homepage
