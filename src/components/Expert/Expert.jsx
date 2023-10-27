import React from "react";
import {
  TextGradient,
  SectionHeading,
} from "../ReUsableComponents/ReUsableComponents";
import ProgressItem from "./ProgressItem";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Expert = () => {
  return (
    <Box maxW={"1150px"} mx={"auto"} py={"11rem"} px={"1rem"}>
      <Flex
        alignItems={"center"}
        gap={"2rem"}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Box w={"100%"} textAlign={["center", "center", "center", "left"]}>
          <TextGradient>We Are The Expert</TextGradient>
          <SectionHeading>
            We Mean Serious <br /> Business
          </SectionHeading>
          <Text
            color={"white"}
            fontSize={"14px"}
            fontWeight={"300"}
            lineHeight={"1.7em"}
            w={["100%", "100%", "100%", "85%"]}
            pb={"3rem"}
            pt={"1rem"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget nulla bibendum, semper nisi sed, volutpat massa.
          </Text>
          <ProgressItem />
        </Box>
        <Box>
          <Image src="./img/Asset-5_3.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Expert;
