import React from "react";
import TeamFlex from "./TeamFlex";

const TeamFlexItem = () => {
  const teamImg = [
    {
      img: "./img/professional-businessman-portrait-in-a-studio-WUFDDGT-1.png",
    },
    {
      img: "./img/professional-businessman-portrait-in-a-studio-TP6K6W7-1.png",
    },
    {
      img: "./img/businessman-adult-portrait-occupation-concept-LY785SH-1.png",
    },
  ];

  return <TeamFlex imgs={teamImg} />;
};

export default TeamFlexItem;
