import React from "react";
import { Flex, Box, Icon, Text } from "@chakra-ui/react";

export const FooterGrid = (props) => {
  return (
    <Flex
      justifyContent={"center"}
      gap={"3rem"}
      flexDirection={["column", "column", "row"]}
      alignItems={'center'}
    >
      {props.items.map((item, index) => (
        <Box>
          <Flex key={index} alignItems={"center"} gap={"1rem"} color={"white"}>
            <Icon as={item.icon} />
            <Box>
              <Text noOfLines={1}>{item.text}</Text>
            </Box>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};
