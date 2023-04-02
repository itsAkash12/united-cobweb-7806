import React, { useEffect, useState } from "react";
import logo from "../../assets/images/TechHub.png";
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHouse,
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import SmallNavbar from "./SmallNavbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  const [user, setUser] = useState(false);
  let token = localStorage.getItem("token");
  const store = useSelector((store) => store.auth.data.token);
  // console.log(store);

  // console.log("token", token);

  const handlelogout = () => {
    localStorage.removeItem("token");
    setUser(false);
    alert("LogOut Successfully 😊✔");
  };

  let [city, setCity] = useState("");
  let key = "dae6521ae39fc64f8d201f17c57efeb5";
  let data;
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // const badge = useSelector((state) => state.cartreducer.carts);
  // console.log(badge, badge.length, "badge");

  async function success(pos) {
    const crd = pos.coords;
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${key}&units=metric`
      );
      data = await res.json();
      city = setCity(data.name);

      // console.log(city);
    } catch (err) {
      console.log(err);
    }
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  let getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  useEffect(() => {
    getLocation();
    setUser(token);
  }, [user, store]);

  // console.log("user", user);
  return (
    <Box id="navbar_container">
      <Box className="nav_items">
        <Box className="logo_container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Box>
        <Box className="location web_navbar">
          <FontAwesomeIcon
            className="icon_location"
            icon={faBars}
          ></FontAwesomeIcon>
          <p>Menu</p>
        </Box>
        <Box className="search web_navbar">
          <input className="input" type="text" placeholder="Search TechHub" />
          <FontAwesomeIcon
            className="icon"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </Box>
        <Box className="account_container web_navbar">
          <FontAwesomeIcon
            className="icon_location"
            icon={faUser}
          ></FontAwesomeIcon>
          <Menu className="web_navbar">
            {user ? (
              <MenuButton
                bg="#0046BE"
                color="white"
                ml="5px"
                fontWeight="600"
                fontSize="18px"
                onClick={handlelogout}
              >
                Logout
              </MenuButton>
            ) : (
              <MenuButton
                bg="#0046BE"
                color="white"
                _hover={{ bg: "#0046BE", color: "white" }}
                _active={{ bg: "#0046BE", color: "white" }}
                as={Button}
                fontSize="18px"
                rightIcon={<ChevronDownIcon />}
              >
                Account
              </MenuButton>
            )}

            <MenuList>
              <MenuItem>
                <Box>
                  <Link to="/login">
                    <Button
                      w="xs"
                      bg="#0046BE"
                      border="1px solid #0046BE"
                      color="white"
                      _hover={{ bg: "white", color: "#0046BE" }}
                    >
                      Login
                    </Button>
                  </Link>
                </Box>
              </MenuItem>
              <MenuItem>
                <Box>
                  <Link to="/signup">
                    <Button
                      w="xs"
                      bg="white"
                      color="#0046BE"
                      border="1px solid #0046BE"
                      _hover={{ bg: "#0046BE", color: "white" }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box className="location house web_navbar">
          <FontAwesomeIcon
            className="icon_location"
            icon={faHouse}
          ></FontAwesomeIcon>
          {city !== "" ? <p>{`${city},  India`}</p> : <p>{`India`}</p>}
        </Box>
        <Link to="/cart">
          <Box className="cart">
            {/* <Badge badgeContent={badge.length} color="primary">
              <ShoppingCartIcon style={{ fill: "#ffffff" }} />
            </Badge> */}
            <FontAwesomeIcon
              className="icon_location"
              icon={faCartShopping}
            ></FontAwesomeIcon>
            <p className="cart1">Cart</p>
          </Box>
        </Link>
        <Box className="mobile_container">
          <FontAwesomeIcon
            className="mobile_navbar"
            icon={faBars}
          ></FontAwesomeIcon>
        </Box>
      </Box>
      <Box className="basic_navbar">
        <SmallNavbar />
      </Box>
    </Box>
  );
}

export default Navbar;
