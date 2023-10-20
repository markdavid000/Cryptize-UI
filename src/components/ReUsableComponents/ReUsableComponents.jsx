import React from "react";
import { Text, Heading } from "@chakra-ui/react";

export const TextGradient = (props) => {
  return (
    <Text
      bgGradient="linear(to-r, #A55EFE, #3547F1, #2C79D5, #2C79D5)"
      bgClip="text"
      fontSize={"19px"}
      fontWeight={"500"}
    >
      {props.children}
    </Text>
  );
};

export const SectionHeading = (props) => {
  return (
    <Heading
      mt={"1rem"}
      color={"white"}
      fontSize={"45px"}
      fontWeight={"400"}
      lineHeight={"1.5em"}
    >
      {props.children}
    </Heading>
  );
};
