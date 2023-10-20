import React from "react";
import { Box } from "@chakra-ui/react";
import WhyCryptizeGrid from "./WhyCryptizeGridContent";
import {
  TextGradient,
  SectionHeading,
} from "../ReUsableComponents/ReUsableComponents";

const WhyCryptize = () => {
  return (
    <Box maxW={"1150PX"} mx={"auto"} py={"4rem"}>
      <Box textAlign={"center"} mb={'3.5rem'}>
        <TextGradient>Why Choose Cryptize</TextGradient>
        <SectionHeading>Secured And Easy to Use</SectionHeading>
      </Box>
      <WhyCryptizeGrid />
    </Box>
  );
};

export default WhyCryptize;
