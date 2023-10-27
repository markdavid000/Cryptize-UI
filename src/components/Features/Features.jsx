import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import {
  TextGradient,
  SectionHeading,
} from "../ReUsableComponents/ReUsableComponents";
import FeaturesLayoutItem from "./FeaturesLayoutItem";
import Achievement from "./Achievement/Achievement";

const Features = () => {
  return (
    <Box maxW={'1150px'} mx={'auto'} py={'8rem'} px={'1rem'}>
      <Box textAlign={"center"} mb={'5rem'}>
        <TextGradient>Our Features</TextGradient>
        <SectionHeading>Property Of The Online</SectionHeading>
      </Box>
      <FeaturesLayoutItem />
      <Achievement />
    </Box>
  );
};

export default Features;
