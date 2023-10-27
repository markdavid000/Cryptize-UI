import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { HeroBtn } from "./HeroBtn";
import HeroNumbers from "./HeroNumbers";

const Hero = () => {
  return (
    <Box
      //   h={"100vh"}
      w={"100%"}
      bgGradient="linear(to-tr, #A55EFE, #724BFD, #3547F1, #3547F1, #2C79D5, #2C79D5)"
      pt={["10rem", "11rem", "12rem", "13rem", "14rem"]}
    >
      <Box maxW={"1150px"} mx={"auto"} px={"1rem"}>
        <Flex
          alignItems={"center"}
          flexDirection={["column", "column", "column", "row"]}
          gap={"2rem"}
        >
          <Box w={"100%"}>
            <Heading
              as={"h1"}
              fontSize={["40px", "50px", "60px", "70px"]}
              fontWeight={"400"}
              lineHeight={"1.2em"}
              color={"white"}
            >
              Your Trusted Crypto Currency Partner
            </Heading>
            <Text
              mt={["1.2rem", "2rem", "2.8rem"]}
              w={["80%", "70%", "60%"]}
              color={"white"}
              fontWeight={"300"}
              fontSize={"14px"}
              lineHeight={"1.7em"}
            >
              Lorem ipsum dolor sit amet, consectetur adip iscing elit.
              Maecenaseget nulla bibe ndum, semper nisi sed, volutpat massa.
            </Text>
            <HeroBtn>Apply Now</HeroBtn>
          </Box>
          <Box w={"100%"}>
            <Image src="./img/Asset-3-1536x991.png" />
          </Box>
        </Flex>
      </Box>
      <Box mt={"20px"}>
        <Flex justify={["center", "center", 'center', "space-between"]}>
          <Box w={["0", "0", "0", "100%"]}></Box>
          <Box w={"90%"} bg={"black"} p={"30px"}>
            <HeroNumbers />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
