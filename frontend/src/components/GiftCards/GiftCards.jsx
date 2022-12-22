import React from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { TopSection } from "./TopSection";
import { FooterSection } from "./FooterSection";
import { MidSection } from "./MidSection";
import "../../styles/Gift.css";

const GiftCards = () => {
  return (
    <Box width="full" h="auto" mb="50px">
      <TopSection />

      {/* -------Featured----- */}
      <Box
        w="80%"
        m="auto"
        borderBottom="1px solid #e0e6ef"
        mt="50px"
        pb="10px"
        mb="20px"
      >
        <h2 className="head1">Featured gift cards</h2>
      </Box>
      <Box w="70%" m="auto" h="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <GridItem w="80%" h="300px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428978_sd.jpg;maxHeight=460;maxWidth=460" />
            <p className="p4">Snowflakes gift card</p>
          </GridItem>
          <GridItem w="80%" h="300px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349648_sd.jpg;maxHeight=460;maxWidth=460" />
            <p className="p4">Kaleidoscope gift card</p>
          </GridItem>
          <GridItem w="80%" h="300px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6491/6491958_sd.jpg;maxHeight=460;maxWidth=460" />
            <p className="p4">Reinder gift card</p>
          </GridItem>
        </Grid>
      </Box>
      {/* -------------shop------------ */}
      <MidSection />
      {/* ----------------idea-------------- */}
      <FooterSection />
    </Box>
  );
};

export default GiftCards;
