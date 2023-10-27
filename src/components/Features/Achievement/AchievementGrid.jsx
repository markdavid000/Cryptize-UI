import React, { useState } from "react";
import { GridImg, GridDes } from "../../ReUsableComponents/ReUsableComponents";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AchievementGrid = (props) => {
  const [counterOn, setCounterOn] = useState();

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      gap={'3rem'}
      pt={"12rem"}
    >
      {props.items.map((item, index) => (
        <GridItem
          key={index}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <GridImg img={item.img} />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
          >
            <Text
              mt={"-.5rem"}
              mb={".5rem"}
              color={"white"}
              fontSize={"45px"}
              fontWeight={"400"}
            >
              {counterOn && (
                <CountUp start={0} end={item.title} duration={5} delay={0} />
              )}
              +
            </Text>
          </ScrollTrigger>
          <GridDes>{item.desc}</GridDes>
        </GridItem>
      ))}
    </Grid>
  );
};

export default AchievementGrid;
