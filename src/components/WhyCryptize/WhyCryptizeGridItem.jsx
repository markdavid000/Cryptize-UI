import React from "react";
import { Link, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "../../assets/svg/Icon";

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
