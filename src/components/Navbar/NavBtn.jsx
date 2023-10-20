import React from "react";
import { ButtonGroup, Button } from "@chakra-ui/react";

export const NavBtn = () => {
  return (
    <ButtonGroup gap="1">
      <Button
        py={"1.5rem"}
        px={"2.5rem"}
        borderRadius={"0"}
        fontWeight={400}
        fontSize={"13px"}
        bg="transparent"
        color={"white"}
        borderColor={"white"}
        _hover={{ borderColor: "transparent", bg: "black" }}
      >
        Log In
      </Button>
      <Button
        py={"1.5rem"}
        px={"2.5rem"}
        borderRadius={"0"}
        fontWeight={400}
        fontSize={"14px"}
        bg="black"
        color={"white"}
        _hover={{ borderColor: "white", bg: "transparent" }}
      >
        Sign Up
      </Button>
    </ButtonGroup>
  );
};
