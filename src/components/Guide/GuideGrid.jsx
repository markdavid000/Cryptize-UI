import React from "react";
import { Grid } from "@chakra-ui/react";
import { ReUsableGrid, GridImg, GridTitle, GridDes } from "../ReUsableComponents/ReUsableComponents";

const GuideGrid = (props) => {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap={"2rem"}>
      {props.items.map((item, index) => (
        <ReUsableGrid
          key={index}
          border={item.border}
          bgGradient={item.bgGradient}
        >
            <GridImg img={item.img} />
            <GridTitle>{item.title}</GridTitle>
            <GridDes>{item.desc}</GridDes>
        </ReUsableGrid>
      ))}
    </Grid>
  );
};

export default GuideGrid;
