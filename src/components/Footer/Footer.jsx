import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { GridContent } from "./GridItem";

const Footer = () => {
  return (
    <Box maxW={"1150px"} mx={"auto"} py={"5rem"}>
      <Box textAlign={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'} mb={'3rem'}>
        <Image src="./img/Asset-2_logo.png" w={"11rem"} mb={"1rem"} />
        <Text w={"80%"} color={"white"} fontSize={"14px"} fontWeight={"300"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          nibh vehicula.
        </Text>
      </Box>
      <GridContent />
    </Box>
  );
};

export default Footer;
