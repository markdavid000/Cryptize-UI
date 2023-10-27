import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  TextGradient,
  SectionHeading,
} from "../ReUsableComponents/ReUsableComponents";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Box maxW={"1150px"} mx={"auto"} py={"5rem"}>
      <Flex alignItems={"center"} flexDirection={["column", "column", "row"]} gap={'2rem'}>
        <Box w={"100%"} textAlign={["center", "center", "left"]}>
          <TextGradient>Get In Touch</TextGradient>
          <SectionHeading>Send Us A Message</SectionHeading>
          <Text
            color={"white"}
            fontSize={"14px"}
            fontWeight={"300"}
            lineHeight={"1.7em"}
            mt={"1.5rem"}
            w={['100%', '100%', "80%"]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget nulla bibendum, semper nisi sed, volutpat massa. Suspendisse
            egestas purus mauris, blandit lobortis tortor.
          </Text>
        </Box>
        <Box w={"100%"}>
          <ContactForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
