import React from "react";
import { Button } from "@chakra-ui/react";

export const CryptizeBtn = (props) => {
  return (
    <Button
      mt={"2.5rem"}
      py={"1.5rem"}
      px={"2.5rem"}
      borderRadius={"0"}
      fontWeight={400}
      fontSize={"14px"}
      bg="transparent"
      color={"white"}
      borderColor={'white'}
      _hover={{ borderColor: "#2729FC", bg: "transparent" }}
    >
      {props.children}
    </Button>
  );
};
