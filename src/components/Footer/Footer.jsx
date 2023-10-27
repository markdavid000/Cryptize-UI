import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { GridContent1, GridContent2 } from "./GridItem";

const Footer = () => {
  return (
    <Box maxW={"1150px"} mx={"auto"} py={"5rem"}>
      <Grid templateColumns={"repeat(4, 1fr)"} justifyContent={"space-between"}>
        <GridItem>
          <Image src="./img/Asset-2_logo.png" w={"11rem"} mb={"1.5rem"} />
          <Text w={"50%"} color={"white"} fontSize={"14px"} fontWeight={"300"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            nibh vehicula.
          </Text>
        </GridItem>
        <GridContent1 />
        <GridContent2 />
      </Grid>
    </Box>
  );
};

export default Footer;
