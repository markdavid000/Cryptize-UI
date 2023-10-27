import React from "react";
// import CrypImg from "";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CryptizeBtn } from "./CryptizeBtn";
import {
  TextGradient,
  SectionHeading,
} from "../ReUsableComponents/ReUsableComponents";

const Cryptize = () => {
  return (
    <Box maxW={"1150px"} mx={"auto"} py={"8rem"} px={"1rem"}>
      <Flex
        alignItems={"center"}
        gap={["3rem", "4rem", "5rem"]}
        flexDirection={["column-reverse", "column-reverse", "row"]}
      >
        <Box w={"100%"}>
          <Image src="./img/Asset-3_2.png" />
        </Box>
        <Box w={"100%"} textAlign={["center", "center", "left"]}>
          <TextGradient>Welcome to Cryptize</TextGradient>
          <SectionHeading>
            We Take Care of <br /> Your Money
          </SectionHeading>
          <Text
            mt={"1rem"}
            w={["100%", "100%", "85%"]}
            color={"white"}
            fontSize={"14px"}
            fontWeight={"300"}
            lineHeight={"1.7em"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget nulla bibendum, semper nisi sed, volutpat massa. Suspendisse
            egestas purus mauris, blandit lobortis tortor aliquam vitae. Duis a
            elit placerat, hendrerit eros eu, rutrum neque.
          </Text>
          <CryptizeBtn>Get Started</CryptizeBtn>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cryptize;
