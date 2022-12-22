import React from "react";
import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

const MidSection = () => {
  return (
    <>
      <Box
        w="80%"
        m="auto"
        border="1px solid #e0e6ef"
        mt="100px"
        p="15px 15px 15px 15px"
      >
        <h2 className="head1">Shop gifts by type</h2>
      </Box>
      <Box w="80%" m="auto" border="1px solid #e0e6ef" h="350px">
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
          <GridItem w="100%" h="300px" textAlign="center">
            <Heading fontSize="20px" mt="20px">
              Best Buy Gift Cards
            </Heading>
            <p className="p5">
              Holiday gift cards
              <br />
              Any occasion gift cards
              <br />
              Birthday gift cards
            </p>
          </GridItem>
          <GridItem w="80%" h="300px">
            <Image
              mt="20px"
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77584-gc-09202022-9a90563c-532c-4f12-81e4-cf9c1ca39832.jpg;maxHeight=334;maxWidth=334"
            />
            <p className="p6">
              Holiday gift cards
              <br />
              Any occasion gift cards
              <br />
              Birthday gift cards
            </p>
          </GridItem>
          <GridItem w="100%" h="300px">
            <Heading
              fontSize="20px"
              color="#2b5df5"
              mt="20px"
              textAlign="center"
            >
              Specialty gift cards
            </Heading>
            <p className="p5">
              All specialty gift cards
              <br />
              Restaurant gift cards
              <br />
              Retail gift cards
              <br />
              Travel gift cards
            </p>
          </GridItem>
          <GridItem w="80%" h="300px">
            <Image
              mt="20px"
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/nav-apple-sol99525-6e874950-8827-4ce1-9273-43857b17ef49.png;maxHeight=262;maxWidth=386"
            />
            <p className="p6">
              Gaming gift cards
              <br />
              TV & movie gift cards
              <br />
              Music gift cards
              <br />
              Travel gift cards
            </p>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export { MidSection };
