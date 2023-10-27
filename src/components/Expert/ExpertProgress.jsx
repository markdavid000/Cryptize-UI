import React from "react";
import { Box, Text, Stack, Progress, Flex } from "@chakra-ui/react";

const ExpertProgress = (props) => {
  return (
    <Stack w={["100%", "100%", "100%", "85%"]} spacing={"24px"}>
      {props.items.map((item, index) => (
        <Box key={index}>
          <Flex
            color={"white"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={".4rem"}
          >
            <Text fontSize={"14px"} fontWeight={"400"}>
              {item.expertise}
            </Text>
            <Text fontSize={"14px"} fontWeight={"400"}>
              {item.percentage}
            </Text>
          </Flex>
          <Progress
            value={item.percentValue}
            size="xs"
            bg={"gray.700"}
            colorScheme="purple"
          />
        </Box>
      ))}
    </Stack>
  );
};

export default ExpertProgress;
