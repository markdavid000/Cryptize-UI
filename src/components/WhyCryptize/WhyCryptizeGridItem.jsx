import React from "react";
import { Text, Image, Link, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "../../assets/svg/Icon";

export const WhyCryptizeGridImg = (props) => {
  return <Image src={props.img} boxSize={"50px"} mb={"1.7rem"} />;
};

export const WhyCryptizeGridTitle = (props) => {
  return (
    <Text color={"white"} fontSize={"22px"} fontWeight={"400"} mb={"1.7rem"}>
      {props.children}
    </Text>
  );
};

export const WhyCryptizeGridDes = (props) => {
  return (
    <Text
      color={"#C3C3C3"}
      fontSize={"14px"}
      fontWeight={"300"}
      lineHeight={"1.7em"}
      mb={"1.7rem"}
    >
      {props.children}
    </Text>
  );
};

export const WhyCryptizeGridLink = (props) => {
  return (
    <Link
      fontSize={"14px"}
      fontWeight={"400"}
      color={"white"}
      display={"flex"}
      alignItems={"center"}
      gap={".5rem"}
      w={"100px"}
      pb={"3px"}
      _hover={{
        color: "white",
        boxShadow: "0px 1.5px 0px 0px #2729FC",
      }}
      href="!#"
    >
      {props.children} <Icon as={ArrowForwardIcon} />
    </Link>
  );
};
