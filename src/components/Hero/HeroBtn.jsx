import React from "react";
import { Button } from "@chakra-ui/react";

export const HeroBtn = (props) => {
  return (
    <Button
      mt={"2.5rem"}
      py={"1.5rem"}
      px={"2.5rem"}
      borderRadius={"0"}
      fontWeight={400}
      fontSize={"14px"}
      bg="black"
      color={"white"}
      _hover={{ borderColor: "white", bg: "transparent" }}
    >
      {props.children}
    </Button>
  );
};
