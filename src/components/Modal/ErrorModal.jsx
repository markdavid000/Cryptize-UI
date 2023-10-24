import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./ModalAnimation.module.css";
import { Box, Button, Text, Icon } from "@chakra-ui/react";

const Backdrop = () => {
  return (
    <Box
      position={"fixed"}
      top={"0"}
      left={"0"}
      w={"100%"}
      height={"100vh"}
      zIndex={"10"}
      bg={"blackAlpha.600"}
      backdropFilter={"blur(10px)"}
    ></Box>
  );
};

const ModalOverlay = (props) => {
  return (
    <Box
      bgGradient="linear(to-tr, #A55EFE, #3547F1, #3547F1, #2C79D5)"
      position={"fixed"}
      top={"30vh"}
      left={"25%"}
      w={"50%"}
      zIndex={"100"}
      className={classes.modal}
    >
      <Box textAlign={"center"} py={"1rem"}>
        <Icon as={props.title} w={"40px"} h={"40px"} color={"white"} />
      </Box>
      <Text py={"1rem"} textAlign={"center"} color={"white"}>
        {props.message}
      </Text>
      <Box display={"flex"} justifyContent={"center"} p={"1rem"}>
        <Button
          w={"20%"}
          bg={"black"}
          borderRadius={"0"}
          color={"white"}
          onClick={props.onCancel}
          _hover={{ bg: "transparent", borderColor: "white" }}
        >
          Ok
        </Button>
      </Box>
    </Box>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCancel={props.onCancel}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
