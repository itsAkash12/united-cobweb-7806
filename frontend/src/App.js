import './App.css';
import Navbar from './components/Header/Navbar';
import SmallNavbar from './components/Header/SmallNavbar';
import TopSection from './components/HomeSection/TopSection';
import "./App.css";
import GiftCards from "./components/GiftCards/GiftCards";
import MiddleSection from './components/HomeSection/MiddleSection';
import SliderCard from './components/Slider/SliderCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <MiddleSection />
      <GiftCards />
      {/* <SliderCard /> */}
    </div>
  );
}

export default App;
