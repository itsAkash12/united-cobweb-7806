import './App.css';
import Navbar from './components/Header/Navbar';
import SmallNavbar from './components/Header/SmallNavbar';
import TopSection from './components/HomeSection/TopSection';
import "./App.css";
import GiftCards from "./components/GiftCards/GiftCards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <GiftCards />
    </div>
  );
}

export default App;
