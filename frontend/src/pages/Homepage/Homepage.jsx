import React from "react";
import SliderCarousel from "../../Components/Slider/SliderCarousel";
import BottomSection from "../../Components/HomeSection/BottomSection";
import MiddleSection from "../../Components/HomeSection/MiddleSection";
import TopSection from "../../Components/HomeSection/TopSection";

function Homepage() {
  return (
    <div>
      <TopSection />
      <MiddleSection />
      <SliderCarousel />
      <BottomSection />
    </div>
  );
}

export default Homepage;
