import React from "react";
import { Image, Box, Flex } from "@chakra-ui/react";
import Overlay from "./Overlay/Overlay";
import {
  OverlayItems,
  OverlayItemName,
  OverlayItemPosition,
} from "./Overlay/OverlayItems";

const TeamFlex = (props) => {
  return (
    <Box>
      <Flex gap={"2rem"} flexDirection={["column", "column", "row"]}>
        {props.items.map((item, index) => (
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
            <Image src={item.img} />
            <Overlay>
              <OverlayItemName>{item.name}</OverlayItemName>
              <OverlayItemPosition>{item.position}</OverlayItemPosition>
              <OverlayItems />
            </Overlay>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default TeamFlex;
