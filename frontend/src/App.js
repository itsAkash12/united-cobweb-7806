import "./App.css";
import Navbar from "./components/Header/Navbar";
import SmallNavbar from "./components/Header/SmallNavbar";
import TopSection from "./components/HomeSection/TopSection";
import GiftCards from "./components/GiftCards/GiftCards";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/CheckoutPage/Checkout";
import Payment from "./components/Pament/Payment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GiftCards />
      <Checkout />
      <Footer />
      {/* <Payment/> */}
    </div>
  );
}

export default App;
