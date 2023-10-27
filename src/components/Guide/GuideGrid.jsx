import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import {
  ReUsableGrid,
  GridImg,
  GridTitle,
  GridDes,
} from "../ReUsableComponents/ReUsableComponents";

const GuideGrid = (props) => {
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
      gap={"2rem"}
    >
      {props.items.map((item, index) => (
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
            <GridDes>{item.desc}</GridDes>
          </Box>
        </ReUsableGrid>
      ))}
    </Grid>
  );
};

export default GuideGrid;
