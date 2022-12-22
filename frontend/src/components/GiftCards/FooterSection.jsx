import "../../styles/Gift.css";
import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import card1 from "./bestBuy2.png";

const FooterSection = () => {
  return (
    <>
      <Box
        w="80%"
        m="auto"
        mt="50px"
        h="160px"
        display="flex"
        justifyContent="space-between"
      >
        <Box border="1px solid #e0e6ef" w="48%" h="full" display="flex">
          <Box p="15px 0px 0px 15px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77114-fit-word-pol_der-35b041de-e1b5-4db1-9230-4611489a525f.png;maxHeight=130;maxWidth=192" />
          </Box>
          <Box ml="30px" mt="15px">
            <Heading fontSize="22px" color="#2b5df5">
              Gift Ideas.
            </Heading>
            <p>Cover your entire list in one stop.</p>
          </Box>
        </Box>
        <Box border="1px solid #e0e6ef" w="48%" h="full" display="flex">
          <Box p="15px 0px 0px 15px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-68326-pol-gc-sustainability-211115-694376dd-4e76-472d-be4f-9521b4f25a3b.jpg;maxHeight=130;maxWidth=192" />
          </Box>
          <Box ml="30px" mt="15px">
            <Heading fontSize="22px" color="#2b5df5">
              Let’s lighten the <br /> landfills.
            </Heading>
            <p>
              100% of Best Buy Gift Cards are <br /> now made of paper and can
              go <br />
              straight into the recycling bin.
            </p>
          </Box>
        </Box>
      </Box>
      <Box mt="40px">
        <Image src={card1} m="auto" w="80%" />
      </Box>
      <Box
        w="80%"
        m="auto"
        mt="50px"
        border="1px solid #e0e6ef"
        borderBottom="none"
        p="15px 15px 15px 15px"
        display="flex"
        justifyContent="space-between"
      >
        <h2 className="head1">About Best Buy® Gift Cards</h2>
      </Box>
      <Box w="80%" m="auto" border="1px solid #e0e6ef" h="auto" display="flex">
        <Box border="1px solid #e0e6ef" w="50%" h="full" borderRight="none">
          <Heading fontSize="20px" p="15px 0px 0px 15px">
            Buy gift cards online.
          </Heading>
          <p className="p7">
            Shop our wide selection of holiday, happy birthday and thank you
            gift cards. We also sell gift cards for graduations, weddings,
            Father's Day, Mother's Day and many other special occasions, each
            with a unique gift card design featuring distinctive and festive
            packaging.
          </p>
          {/* <br /> */}
          <p className="p7">
            Not only can you buy physical gift cards online, but you can also
            purchase and email an e-gift card directly to a recipient's inbox
            with a personal message. These virtual gift cards can be used at
            BestBuy.com, allowing your recipient to start shopping right away.
          </p>
          <p className="p7">
            Buy gift cards in dollar amounts ranging from $15 to $500. It is
            easy to check your gift card balance and get gift card help online,
            and there are no fees or expiration dates to worry about. Usable
            online or in store, Best Buy Gift Cards and online gift cards are
            the perfect gift to ensure your friends and family get the gifts on
            their wish list.
          </p>
          <Heading fontSize="20px" p="15px 0px 0px 15px">
            Important information about Best Buy Gift Cards.
          </Heading>
          <p className="p7">
            To help the government fight the funding of terrorism and money
            laundering activities, Best Buy has limited the maximum value of
            each gift card to $500. Best Buy Gift Cards may not be redeemed
            using a mobile wallet.
          </p>
        </Box>
        <Box
          border="1px solid #e0e6ef"
          w="50%"
          h="full"
          borderLeft="none"
          borderBottom="none"
        >
          <Heading fontSize="20px" p="15px 0px 0px 15px">
            Protect yourself against gift card scams.
          </Heading>
          <p className="p7">
            We want to help customers like you understand how to recognize and
            avoid gift card scams, so we’ve put together some tips and resources
            to help keep you safe. Visit our help page to learn more about this
            growing issue and see information on avoiding gift card scams.
          </p>

          <Heading fontSize="20px" p="15px 0px 0px 15px">
            Gift cards make holiday gifting easier.
          </Heading>
          <p className="p7">
            Skip the holiday lines this year and give everyone on your list the
            chance to choose their perfect gift with Best Buy holiday gift
            cards. You'll never have to worry about coming up with gift ideas,
            picking out the right size, or finding the perfect color with a gift
            card. You can order gift cards online and have them shipped to you
            or the gift recipient of your choice, and they'll never have to
            worry about expiration dates. Tuck Christmas gift cards in
            stockings, slip them into holiday greeting cards, or wrap them up
            for something extra special that anyone would be thrilled to open.
          </p>
        </Box>
      </Box>
    </>
  );
};

export { FooterSection };
