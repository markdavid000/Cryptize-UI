import React, { useState } from "react";
import {
  FormControl,
  Input,
  Stack,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";
import ErrorModal from "../Modal/ErrorModal";
import SuccessModal from "../Modal/SuccessModal";
import { BiSolidError } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorState, setErrorState] = useState("");
  const [successState, setSuccessState] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    ) {
      return setErrorState({
        title: BiSolidError,
        message: "Invalid Information",
      });
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");

    return setSuccessState({
      title: FiCheck,
      message: "Message Sent Successfully",
    });
  };

  const fNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const cancelHandler = () => {
    setErrorState(null);
    setSuccessState(null);
  };

  return (
    <Box>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onCancel={cancelHandler}
        />
      )}
      {successState && (
        <SuccessModal
          title={successState.title}
          message={successState.message}
          onCancel={cancelHandler}
        />
      )}
      <FormControl
        as={"form"}
        onSubmit={submitHandler}
        bgGradient="linear(to-tr, #A55EFE, #3547F1, #3547F1, #2C79D5)"
        p={"50px"}
      >
        <Stack direction={"column"} align={"center"} spacing={"20px"}>
          <Stack direction={"row"}>
            <Input
              id="firstName"
              onChange={fNameHandler}
              value={firstName}
              type="text"
              placeholder="Fist Name"
              borderRadius={"0"}
              bg={"black"}
              border={"none"}
              color={"white"}
              p={"30px"}
              _placeholder={{
                color: "white",
                fontSize: "14px",
              }}
            />
            <Input
              id="lastName"
              onChange={lNameHandler}
              value={lastName}
              type="text"
              placeholder="Last Name"
              borderRadius={"0"}
              bg={"black"}
              border={"none"}
              color={"white"}
              p={"30px"}
              _placeholder={{
                color: "white",
                fontSize: "14px",
              }}
            />
          </Stack>
          <Input
            id="email"
            onChange={emailHandler}
            value={email}
            type="email"
            placeholder="Email"
            borderRadius={"0"}
            bg={"black"}
            border={"none"}
            color={"white"}
            p={"30px"}
            _placeholder={{
              color: "white",
              fontSize: "14px",
            }}
          />
          <Textarea
            id="message"
            onChange={messageHandler}
            value={message}
            placeholder="Message"
            borderRadius={"0"}
            bg={"black"}
            border={"none"}
            color={"white"}
            py={"20px"}
            px={"30px"}
            _placeholder={{
              color: "white",
              fontSize: "14px",
            }}
            rows={"5"}
          />
          <Button
            type="submit"
            w={"50%"}
            py={"1.5rem"}
            px={"2.5rem"}
            borderRadius={"0"}
            fontWeight={400}
            fontSize={"14px"}
            bg="black"
            color={"white"}
            _hover={{ borderColor: "white", bg: "transparent" }}
            _focus={{
              outline: "none",
            }}
          >
            Send Message
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
