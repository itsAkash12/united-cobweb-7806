import React from "react";
import { Box, Button, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import card from "./bestBuy1.png";
import "../../styles/Gift.css";

const TopSection = () => {
  return (
    <>
      <Box width="full" h="auto">
        <p className="p">Best Buy</p>
      </Box>
      <Box width="full" h="auto">
        <h1 className="heading">Best Buy Gift Cards</h1>
      </Box>
      <Box
        width="97%"
        margin="auto"
        h="auto"
        display="flex"
        justifyContent="center"
        p="50px 330px 50px 0px"
        bg="#0046be"
      >
        <Box borderRight="1px solid #fff" pr="50px">
          <Heading className="Head">Give the perfect gift card.</Heading>
          <p className="p1">No expiration date or fees.</p>
        </Box>

        <Box ml="50px">
          <Button color="blue" bg="#fff" h="30px">
            Check card Balance
          </Button>
          <p className="p2">Gift card terms and conditions</p>
        </Box>
      </Box>

      {/* ----type---- */}

      <Box
        w="80%"
        m="auto"
        borderBottom="1px solid #e0e6ef"
        mt="50px"
        pb="10px"
        mb="50px"
      >
        <h2 className="head1">What type of gift card would you like?</h2>
      </Box>
      <Box w="80%" m="auto" h="300px">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem w="100%" h="300px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77584-gc-09202022-9a90563c-532c-4f12-81e4-cf9c1ca39832.jpg;maxHeight=334;maxWidth=334" />
            <p className="p3">Gift Cards</p>
            <p>Mailed, physical cards</p>
          </GridItem>
          <GridItem w="100%" h="300px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65642-flex-egc-86adb066-8448-404f-a574-06333ec25109.jpg;maxHeight=334;maxWidth=334" />
            <p className="p3">E-Gift Cards*</p>
            <p>
              Emailed, digital cards. Perfect for <br /> when you are short on
              time.
            </p>
          </GridItem>
          <GridItem w="100%" h="300px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65642-flex-sgc-59e9b4a6-acd5-4114-b936-7c62f3158243.jpg;maxHeight=334;maxWidth=334" />
            <p className="p3">Specialty Gift Cards</p>
            <p>
              Shop gaming, dining, movie, music <br /> prepaid cell cards and
              more.
            </p>
          </GridItem>
          <GridItem w="100%" h="300px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65642-flex-cgc-cf638cdf-f7fd-4d87-885c-fc17c129e9cc.jpg;maxHeight=334;maxWidth=334" />
            <p className="p3">Corporate Gift Cards</p>
            <p>
              Powerful incentives for businesses <br /> big and small.
            </p>
          </GridItem>
        </Grid>
      </Box>
      {/* ----Image----- */}
      <Box mt="20px">
        <Image src={card} m="auto" />
      </Box>
    </>
  );
};

export { TopSection };
