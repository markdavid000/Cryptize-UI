import React from "react";
import {
  WhyCryptizeGridImg,
  WhyCryptizeGridTitle,
  WhyCryptizeGridDes,
  WhyCryptizeGridLink,
} from "./WhyCryptizeGridItem";
import { Grid, GridItem } from "@chakra-ui/react";

const WhyCryptizeGrid = (props) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="2rem">
      {props.gridContent.map((item, index) => (
        <GridItem
          key={index}
          border={item.border}
          borderColor="whiteAlpha.300"
          transition="all"
          transitionDuration=".3s"
          _hover={{ borderColor: "#2729FC" }}
          p="45px"
          bgGradient={item.bgGradient}
        >
          <WhyCryptizeGridImg img={item.img} />
          <WhyCryptizeGridTitle>{item.title}</WhyCryptizeGridTitle>
          <WhyCryptizeGridDes>{item.description}</WhyCryptizeGridDes>
          <WhyCryptizeGridLink>Learn More</WhyCryptizeGridLink>
        </GridItem>
      ))}
    </Grid>
  );
};

export default WhyCryptizeGrid;
