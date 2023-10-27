import React from "react";
import { Box, Flex, Stack, Image } from "@chakra-ui/react";
import {
  GridImg,
  GridTitle,
  GridDes,
} from "../ReUsableComponents/ReUsableComponents";

const FeaturesLayout = (props) => {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={["column", "column", "column", "row"]}
      gap={'2rem'}
      >
      <Stack spacing={"45px"}>
        {props.featuresItems1.map((featuresItem, index) => (
          <Box
            key={index}
            textAlign={["center", "center", "center", "right"]}
            display={"flex"}
            flexDirection={"column"}
            alignItems={["center", "center", "center", "flex-end"]}
          >
            <GridImg img={featuresItem.img} />
            <GridTitle>{featuresItem.title}</GridTitle>
            <Box w={"80%"}>
              <GridDes>{featuresItem.desc}</GridDes>
            </Box>
          </Box>
        ))}
      </Stack>
      <Box display={"flex"} justifyContent={"center"}>
        <Image w={"65%"} src="./img/Asset-8_3.png" />
      </Box>
      <Stack spacing={"45px"}>
        {props.featuresItems2.map((featuresItem, index) => (
          <Box
            key={index}
            textAlign={["center", "center", "center", "left"]}
            display={"flex"}
            flexDirection={"column"}
            alignItems={["center", "center", "center", "flex-start"]}
          >
            <GridImg img={featuresItem.img} />
            <GridTitle>{featuresItem.title}</GridTitle>
            <Box w={"80%"}>
              <GridDes>{featuresItem.desc}</GridDes>
            </Box>
          </Box>
        ))}
      </Stack>
      <Stack></Stack>
    </Flex>
  );
};

export default FeaturesLayout;
