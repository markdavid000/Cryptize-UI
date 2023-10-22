import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  TextGradient,
  SectionHeading,
} from "../ReUsableComponents/ReUsableComponents";
import TestimonialItems from "./TestimonialItems";

const Testimonial = () => {
  return (
    <Box maxW={'1150px'} mx={'auto'} py={'7rem'}>
      <Flex alignItems={'center'}>
        <Box w={"100%"}>
          <TextGradient>Testimonials</TextGradient>
          <SectionHeading>What Clients Say About Us</SectionHeading>
          <Text mt={'1.5rem'} w={'80%'} color={"white"} fontSize={"14px"} fontWeight={"300"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget nulla bibendum, semper nisi sed, volutpat massa. Suspendisse
            egestas purus mauris.
          </Text>
        </Box>
        <Box w={"60%"}>
          <TestimonialItems />
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimonial;
