import React from "react";
import { WhyCryptizeGridLink } from "./WhyCryptizeGridItem";
import { Grid } from "@chakra-ui/react";
import {
  ReUsableGrid,
  GridImg,
  GridTitle,
  GridDes,
} from "../ReUsableComponents/ReUsableComponents";

const WhyCryptizeGrid = (props) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="2rem">
      {props.gridContent.map((item, index) => (
        <ReUsableGrid
          key={index}
          border={item.border}
          bgGradient={item.bgGradient}
        >
          <GridImg img={item.img} />
          <GridTitle>{item.title}</GridTitle>
          <GridDes>{item.description}</GridDes>
          <WhyCryptizeGridLink>Learn More</WhyCryptizeGridLink>
        </ReUsableGrid>
      ))}
    </Grid>
  );
};

export default WhyCryptizeGrid;
