import React from "react";
import { GridImg, GridDes } from "../../ReUsableComponents/ReUsableComponents";
import { Grid, GridItem, Text } from "@chakra-ui/react";

const AchievementGrid = (props) => {
  return (
    <Grid templateColumns={"repeat(4, 1fr)"} pt={'12rem'}>
      {props.items.map((item, index) => (
        <GridItem
          key={index}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <GridImg img={item.img} />
            <Text mt={'-.5rem'} mb={'.5rem'} color={"white"} fontSize={"45px"} fontWeight={"400"}>{item.title}</Text>
          <GridDes>{item.desc}</GridDes>
        </GridItem>
      ))}
    </Grid>
  );
};

export default AchievementGrid;
