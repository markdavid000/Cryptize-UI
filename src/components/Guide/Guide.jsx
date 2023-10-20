import React from "react";
import {
  TextGradient,
  SectionHeading,
} from "../ReUsableComponents/ReUsableComponents";
import { GuideBtn } from "./GuideBtn";
import GuideGridItems from "./GuidegridItems";
import { Box } from "@chakra-ui/react";

const Guide = () => {
  return (
    <Box maxW={"1150px"} mx={"auto"} pb={'5rem'}>
      <Box textAlign={"center"} mb={'5rem'}>
        <TextGradient>Step By Step Guide</TextGradient>
        <SectionHeading>Easy Steps to Success</SectionHeading>
      </Box>
      <GuideGridItems />
      <Box textAlign={"center"} mt={'1.5rem'}>
        <GuideBtn>Learn More</GuideBtn>
      </Box>
    </Box>
  );
};

export default Guide;
