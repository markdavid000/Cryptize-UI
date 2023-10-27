import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SectionHeading } from "../ReUsableComponents/ReUsableComponents";
import { CTABtn } from "./CTABtn";

const CTA = () => {
  return (
    <Box
      mt={"9rem"}
      bgGradient="linear(to-tr, #A55EFE, #724BFD, #3547F1, #3547F1, #2C79D5, #2C79D5)"
    >
      <Box
        maxW={"1150px"}
        mx={"auto"}
        px={["20px", "20px", "50px"]}
        py={"70px"}
      >
        <Flex alignItems={"center"} flexDirection={["column", "column", "row"]}>
          <Box textAlign={["center", "center", "left"]}>
            <SectionHeading>
              Tools For Better Crypto Trading & Transactions
            </SectionHeading>
            <Text
              w={["100%", "100%", "47%"]}
              py={"1em"}
              color={"white"}
              fontSize={"14px"}
              fontWeight={"400"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eget nulla bibendum, semper nisi sed, volutpat massa.{" "}
            </Text>
          </Box>
          <Box>
            <CTABtn>Get Started</CTABtn>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CTA;
