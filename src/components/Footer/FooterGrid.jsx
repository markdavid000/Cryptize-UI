import React from "react";
import { Grid, GridItem, Flex, Box, Icon, Text } from "@chakra-ui/react";

export const FooterGrid1 = (props) => {
  return (
    <GridItem>
      {props.items1.map((item, index) => (
        <Flex key={index} alignItems={"center"} gap={"1rem"} color={"white"}>
          <Icon as={item.icon} />
          <Box>
            <Text noOfLines={1}>{item.text}</Text>
          </Box>
        </Flex>
      ))}
    </GridItem>
  );
};

export const FooterGrid2 = (props) => {
  return (
    <GridItem>
      {props.items2.map((item, index) => (
        <Flex key={index} alignItems={"center"} gap={"1rem"} color={"white"}>
          <Box>{item.text}</Box>
        </Flex>
      ))}
    </GridItem>
  );
};
