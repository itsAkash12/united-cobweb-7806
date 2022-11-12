import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "../../styles/Navbar.css";

function SmallNavbar() {
  return (
    <Box>
      <Box className="SmallNav_items">
        <Menu>
          <MenuButton
            bg="#0046BE"
            color="white"
            _hover={{ bg: "#0046BE", color: "white" }}
            _active={{ bg: "#0046BE", color: "white" }}
            fontSize={['10px', '11px', '12px', '13px', '14px', '14px']}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          ><Link to="/products">Holiday Deals</Link>
          </MenuButton>
          <MenuList color="#0046BE">
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            ><Link to="/latestproductpage">Black Friday deals Right Now</Link>
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            ><Link to="/giftcards">Gift Ideas</Link>
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            ><Link to="/acerproductpage">Laptop Guide 2022</Link>
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            ><Link to="/iphoneproductpage">Explore iPhones</Link>
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            ><Link to="/marketplaceproductpage">Market Place offers</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Link to="/products" className="link">Top Deals</Link>
        <Link to="/latestproductpage" className="link">Deal of the Duty</Link>
        <Link to="/giftcards" className="link">Gift Ideas</Link>
        <Link to="/marketplaceproductpage" className="link">Marketplace Products</Link>
        <Menu>
          <MenuButton
            bg="#0046BE"
            color="white"
            fontSize={['10px', '11px', '12px', '13px', '14px', '14px']}
            _hover={{ bg: "#0046BE", color: "white" }}
            _active={{ bg: "#0046BE", color: "white" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            More
          </MenuButton>
          <MenuList color="#0046BE">
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            ><Link to="/giftcards">Gift Cards</Link>
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            ><Link to="/smarthomeproductpage">Smart Home Ideas</Link>
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            ><Link to="/acerproductpage">Laptops & Pc's</Link>
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Donate to St. Jude
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              TechHub Outlet
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              TechHub Business
            </MenuItem>
          </MenuList>
        </Menu>
        <Box className="hide">
          <Menu>
            <MenuButton
              bg="#0046BE"
              color="white"
              fontSize={['10px', '11px', '12px', '13px', '14px', '14px']}
              _hover={{ bg: "#0046BE", color: "white" }}
              _active={{ bg: "#0046BE", color: "white" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Recently Viewed
            </MenuButton>
            <MenuList color="#0046BE">
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Download
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Create a Copy
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Mark as Draft
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Delete
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Attend a Workshop
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              bg="#0046BE"
              color="white"
              fontSize={['10px', '11px', '12px', '13px', '14px', '14px']}
              _hover={{ bg: "#0046BE", color: "white" }}
              _active={{ bg: "#0046BE", color: "white" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Order Status
            </MenuButton>
            <MenuList color="#0046BE">
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Download
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Create a Copy
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Mark as Draft
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Delete
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Attend a Workshop
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              bg="#0046BE"
              color="white"
              fontSize={['10px', '11px', '12px', '13px', '14px', '14px']}
              _hover={{ bg: "#0046BE", color: "white" }}
              _active={{ bg: "#0046BE", color: "white" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Saved Items
            </MenuButton>
            <MenuList color="#0046BE">
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Download
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Create a Copy
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Mark as Draft
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Delete
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Attend a Workshop
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

export default SmallNavbar;
