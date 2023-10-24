import React from "react";
import { Link, Box, Flex } from "@chakra-ui/react";

export const NavLinks = (props) => {
  return (
    <Link
      color={"gray.200"}
      _hover={{ color: "white" }}
      fontWeight={400}
      fontSize={"14px"}
      href="#"
    >
      {props.children}
    </Link>
  );
};
