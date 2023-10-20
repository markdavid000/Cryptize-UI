import React from "react";
import { Stack, Text, Box } from "@chakra-ui/react";

const HeroNumbers = () => {
  return (
    <Stack direction={"row"} spacing={"3rem"}>
      <Stack direction={"row"} align={"center"}>
        <Text color={"white"} fontSize={"45px"} fontWeight={"400"}>
          100+
        </Text>
        <Text fontWeight={"400"} fontSize={"14px"} color={"white"}>
          Worldwide <br /> Office
        </Text>
      </Stack>
      <Stack direction={"row"} align={"center"}>
        <Text color={"white"} fontSize={"45px"} fontWeight={"400"}>
          52+
        </Text>
        <Text fontWeight={"400"} fontSize={"14px"} color={"white"}>
          Award <br /> Winning
        </Text>
      </Stack>
    </Stack>
  );
};

export default HeroNumbers;
