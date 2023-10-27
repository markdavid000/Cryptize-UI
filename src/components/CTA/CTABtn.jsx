import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import ComingSoonModal from "../Modal/ComingSoonModal";
import { BiSolidMessageAltError } from "react-icons/bi";

export const CTABtn = (props) => {
  const [message, setMessage] = useState();

  const getStartedHandler = (e) => {
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
      <Button
        onClick={getStartedHandler}
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
    </Box>
  );
};
