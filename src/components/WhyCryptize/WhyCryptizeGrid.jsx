import React from "react";
import { WhyCryptizeGridLink } from "./WhyCryptizeGridItem";
import { Box, Grid } from "@chakra-ui/react";
import {
  ReUsableGrid,
  GridImg,
  GridTitle,
  GridDes,
} from "../ReUsableComponents/ReUsableComponents";

const WhyCryptizeGrid = (props) => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap="2rem"
    >
      {props.gridContent.map((item, index) => (
        <ReUsableGrid
          key={index}
          border={item.border}
          bgGradient={item.bgGradient}
        >
          <Box
            textAlign={["center", "center", "left", "left"]}
            display={"flex"}
            flexDirection={["column"]}
            alignItems={["center", "center", "start", "start"]}
          >
            <GridImg img={item.img} />
            <GridTitle>{item.title}</GridTitle>
            <GridDes>{item.description}</GridDes>
            <WhyCryptizeGridLink>Learn More</WhyCryptizeGridLink>
          </Box>
        </ReUsableGrid>
      ))}
    </Grid>
  );
};

export default WhyCryptizeGrid;
