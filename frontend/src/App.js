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
import IphoneProductPage from './pages/ProductPages/IphoneProductPage';
import LatestProductPage from './pages/ProductPages/LatestProductPage';
import MarketPlaceProductPage from './pages/ProductPages/MarketplaceProducrPage';
import SmarthomeProductPage from './pages/ProductPages/SmarthomeProductPage';
import SponseredProductPage from './pages/ProductPages/SponseredProductPage';
import TopdealsProductPage from './pages/ProductPages/TopdealsProductPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TopSection />
      <GiftCards /> */}
  {/* <Products /> */}
  <AcerProductPage /> 
  {/* <AmazonProductPage /> 
 <AndroidProductPage />
   <IphoneProductPage />
  <LatestProductPage />
  <MarketPlaceProductPage />
  <SmarthomeProductPage />
  <SponseredProductPage />
  <TopdealsProductPage /> */}
    </div>
  );
}

export default App;
