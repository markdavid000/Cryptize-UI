import React from "react";
import { Image, Text, Heading, GridItem } from "@chakra-ui/react";

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
      letterSpacing={"wider"}
    >
      {props.children}
    </Heading>
  );
};

export const ReUsableGrid = (props) => {
  return (
    <GridItem
      border={props.border}
      borderColor="whiteAlpha.300"
      transition="all"
      transitionDuration=".3s"
      _hover={{ borderColor: "#2729FC" }}
      p="45px"
      bgGradient={props.bgGradient}
    >
      {props.children}
    </GridItem>
  );
};

export const GridImg = (props) => {
  return <Image src={props.img} boxSize={"50px"} mb={"1.7rem"} />;
};

export const GridTitle = (props) => {
  return (
    <Text color={"white"} fontSize={"22px"} fontWeight={"400"} mb={"1.3rem"}>
      {props.children}
    </Text>
  );
};

export const GridDes = (props) => {
  return (
    <Text
      color={"#C3C3C3"}
      fontSize={"14px"}
      fontWeight={"300"}
      lineHeight={"1.7em"}
      mb={"1.3rem"}
    >
      {props.children}
    </Text>
  );
};
