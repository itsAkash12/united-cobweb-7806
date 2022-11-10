import './App.css';
import Navbar from './components/Header/Navbar';
import SmallNavbar from './components/Header/SmallNavbar';
import TopSection from './components/HomeSection/TopSection';
import "./App.css";
import GiftCards from "./components/GiftCards/GiftCards";
import Products from './pages/Products';
import AcerProductPage from './pages/ProductPages/AcerProductPage';
import AmazonProductPage from './pages/ProductPages/AmazonProductPage';
import AndroidProductPage from './pages/ProductPages/AndroidProductPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TopSection />
      <GiftCards /> */}
  {/* <Products /> */}
  {/* <AcerProductPage /> */}
  {/* <AmazonProductPage /> */}
  <AndroidProductPage />
    </div>
  );
}

export default App;
