import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "../components/CheckoutPage/Checkout";
import Footer from "../components/Footer/Footer";
import GiftCards from "../components/GiftCards/GiftCards";
import Navbar from "../components/Header/Navbar";
// import ProductBanner from "../components/Products/ProductBanner";
import Homepage from "../pages/Homepage/Homepage";
import AcerProductPage from "../pages/ProductPages/AcerProductPage";
import AmazonProductPage from "../pages/ProductPages/AmazonProductPage";
import AndroidProductPage from "../pages/ProductPages/AndroidProductPage";
import IphoneProductPage from "../pages/ProductPages/IphoneProductPage";
import LatestProductPage from "../pages/ProductPages/LatestProductPage";
import MarketPlaceProductPage from "../pages/ProductPages/MarketplaceProducrPage";
import SmarthomeProductPage from "../pages/ProductPages/SmarthomeProductPage";
import SponseredProductPage from "../pages/ProductPages/SponseredProductPage";
import TopdealsProductPage from "../pages/ProductPages/TopdealsProductPage";
import Products from "../pages/Products";

import Login from "../components/Login/Login"
import Signup from "../components/Signup/Signup"

function AllRoutes() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/giftcards" element={<GiftCards />}></Route>
          <Route path="/acerproductpage" element={<AcerProductPage />}></Route>
          <Route path="/amazonproductpage" element={<AmazonProductPage />}></Route>
          <Route path="/androidproductpage" element={<AndroidProductPage />}></Route>
          <Route path='/iphoneproductpage' element={<IphoneProductPage />}></Route>
          <Route path='/latestproductpage' element={<LatestProductPage />}></Route>
          <Route path='/marketplaceproductpage' element={<MarketPlaceProductPage/>}></Route>
          <Route path='/smarthomeproductpage' element={<SmarthomeProductPage />}></Route>
          <Route path='/sponseredproductpage' element={<SponseredProductPage />}></Route>
          <Route path='/topdealsproductpage' element={<TopdealsProductPage />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='*' element={<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img width="100%" alt="image" src="https://user-images.githubusercontent.com/107500115/201439031-168094ab-4575-4c9e-afc3-c6c79945a89e.png" /></div>}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default AllRoutes;
