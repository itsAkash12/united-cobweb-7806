import React from "react";
import { Routes, Route } from "react-router-dom";
import GiftCards from "../Components/GiftCards/GiftCards";
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
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import { ChakraProvider } from "@chakra-ui/react";
import DealOfTheDay from "../pages/DealOfTheDay/DealOfTheDay";
import Detailsitem from "../pages/Product Detail Page/Detailsitem";
import ProductContainer from "../pages/ProductPage/ProductContainer";
import { Cart } from "../Components/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ChakraProvider>
              <Homepage />
            </ChakraProvider>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <ChakraProvider>
              <Login />
            </ChakraProvider>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <ChakraProvider>
              <Signup />
            </ChakraProvider>
          }
        ></Route>
        <Route
          path="/giftcards"
          element={
            <ChakraProvider>
              <GiftCards />
            </ChakraProvider>
          }
        ></Route>
        <Route path="/acerproductpage" element={<AcerProductPage />}></Route>
        <Route
          path="/amazonproductpage"
          element={<AmazonProductPage />}
        ></Route>
        <Route
          path="/androidproductpage"
          element={<AndroidProductPage />}
        ></Route>
        <Route
          path="/iphoneproductpage"
          element={<IphoneProductPage />}
        ></Route>
        <Route
          path="/latestproductpage"
          element={<LatestProductPage />}
        ></Route>
        <Route
          path="/marketplaceproductpage"
          element={<MarketPlaceProductPage />}
        ></Route>
        <Route
          path="/smarthomeproductpage"
          element={<SmarthomeProductPage />}
        ></Route>
        <Route
          path="/sponseredproductpage"
          element={<SponseredProductPage />}
        ></Route>
        <Route
          path="/topdealsproductpage"
          element={<TopdealsProductPage />}
        ></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/dealOfTheDay" element={<DealOfTheDay />}></Route>
        <Route path="/products/:id" element={<ProductContainer />} />
        <Route path="/products/single/:id" element={<Detailsitem />}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
