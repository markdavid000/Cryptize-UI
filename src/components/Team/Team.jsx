import React from "react";
import { Box } from "@chakra-ui/react";
import {
  TextGradient,
  SectionHeading,
} from "../ReUsableComponents/ReUsableComponents";
import TeamFlexItem from "./TeamFlexItem";

const Team = () => {
  return (
    <Box maxW={'1150px'} mx={'auto'}>
      <Box textAlign={'center'} mb={'5rem'}>
        <TextGradient>Our Expert</TextGradient>
        <SectionHeading>Experienced Expert In Cryptize</SectionHeading>
      </Box>
      <TeamFlexItem />
    </Box>
  );
};

export default Team;
