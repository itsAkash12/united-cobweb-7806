import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        {" "}
        <Navbar />
      </ChakraProvider>
      <AllRoutes />

      <ChakraProvider>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
