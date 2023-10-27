import React, { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const HeroNumbers = () => {
  const [counterOn, setCounterOn] = useState();
  return (
    <Stack direction={["column", "column", "row"]} spacing={"3rem"}>
      <Stack direction={"row"} align={"center"}>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Text color={"white"} fontSize={"45px"} fontWeight={"400"}>
            {counterOn && (
              <CountUp start={0} end={100} duration={5} delay={0} />
            )}
            +
          </Text>
        </ScrollTrigger>
        <Text fontWeight={"400"} fontSize={"14px"} color={"white"}>
          Worldwide <br /> Office
        </Text>
      </Stack>
      <Stack direction={"row"} align={"center"}>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Text color={"white"} fontSize={"45px"} fontWeight={"400"}>
            {counterOn && <CountUp start={0} end={52} duration={5} delay={0} />}
            +
          </Text>
        </ScrollTrigger>
        <Text fontWeight={"400"} fontSize={"14px"} color={"white"}>
          Award <br /> Winning
        </Text>
      </Stack>
    </Stack>
  );
};

export default HeroNumbers;
