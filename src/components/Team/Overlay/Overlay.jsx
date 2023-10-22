import React from "react";
import { Box } from "@chakra-ui/react";

const Overlay = (props) => {
  return (
    <Box>
      <Box
        pb={"2.5rem"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        position={"absolute"}
        top={"0"}
        left={"0"}
        w={"100%"}
        h={"100%"}
        transition={"all"}
        transitionDuration={".6s"}
        bgGradient="linear(to-tr, #a65efe88, #3548f188, #3548f188, #2c78d588  )"
        transform="translateY(100%)"
        sx={{
          ".team_box:hover &": {
            transform: "translateY(0)",
          },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Overlay;
