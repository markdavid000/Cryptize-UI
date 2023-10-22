import React from "react";
import { Flex, Text, Icon, Link } from "@chakra-ui/react";
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from "../../../assets/svg/Icon";

export const OverlayItems = () => {
  return (
    <Flex gap={"1rem"} justifyContent={"space-between"}>
      <Link
        href="!#"
        p={".7rem"}
        bg={"black"}
        borderRadius={"50%"}
        _hover={{
          bg: "facebook.1000",
        }}
      >
        <Icon as={FacebookIcon} />
      </Link>
      <Link
        href="!#"
        p={".7rem"}
        bg={"black"}
        borderRadius={"50%"}
        _hover={{
          bg: "twitter.1000",
        }}
      >
        <Icon as={TwitterIcon} />
      </Link>
      <Link
        href="!#"
        p={".7rem"}
        bg={"black"}
        borderRadius={"50%"}
        _hover={{
          bg: "pinterest.1000",
        }}
      >
        <Icon as={PinterestIcon} />
      </Link>
    </Flex>
  );
};

export const OverlayItemName = (props) => {
  return (
    <Text fontSize={"25px"} fontWeight={"500"} color={"white"}>
      {props.children}
    </Text>
  );
};

export const OverlayItemPosition = (props) => {
  return (
    <Text fontSize={"14px"} fontWeight={"400"} color={"white"} mb={"2rem"}>
      {props.children}
    </Text>
  );
};
