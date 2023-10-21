import React from "react";
import { Image, Box, Flex } from "@chakra-ui/react";
import Overlay from "../Overlay/Overlay";

const TeamFlex = (props) => {
  return (
    <Box>
      <Flex gap={"2rem"}>
        {props.imgs.map((img, index) => (
          <Box
            key={index}
            className="team_box"
            transition={"all"}
            transitionDuration={".6s"}
            overflow={"hidden"}
            position={"relative"}
            bgGradient="linear(to-tr, #A55EFE, #3547F1, #3547F1, #2C79D5)"
            _hover={{
              transform: "translateY(-7px)",
            }}
          >
            <Image src={img.img} />
            <Overlay />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default TeamFlex;
