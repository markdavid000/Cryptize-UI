import React, { useState } from "react";
import { Box, ButtonGroup, Button } from "@chakra-ui/react";
import ComingSoonModal from "../Modal/ComingSoonModal";
import { BiSolidMessageAltError } from "react-icons/bi";

export const NavBtn = () => {
  const [message, setMessage] = useState();

  const loginHandler = (e) => {
    e.preventDefault();

    return setMessage({
      title: BiSolidMessageAltError,
      message: "Coming Soon",
    });
  };

  const signUpHandler = (e) => {
    e.preventDefault();

    return setMessage({
      title: BiSolidMessageAltError,
      message: "Coming Soon",
    });
  };

  const cancelHandler = () => {
    setMessage(null);
  };

  return (
    <Box>
      {message && (
        <ComingSoonModal
          title={message.title}
          message={message.message}
          onCancel={cancelHandler}
        />
      )}
      <ButtonGroup gap="1">
        <Button
          onClick={loginHandler}
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
          onClick={signUpHandler}
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
    </Box>
  );
};
