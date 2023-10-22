import React from "react";
import TeamFlex from "./TeamFlex";

const TeamFlexItem = () => {
  const teamItems = [
    {
      img: "./img/professional-businessman-portrait-in-a-studio-WUFDDGT-1.png",
      name: "Adam Stark",
      position: "CEO Cryptize",
    },
    {
      img: "./img/professional-businessman-portrait-in-a-studio-TP6K6W7-1.png",
      name: "Paul John",
      position: "Branch Manager",
    },
    {
      img: "./img/businessman-adult-portrait-occupation-concept-LY785SH-1.png",
      name: "Steve Arlong",
      position: "Crypto Expert",
    },
  ];

  return <TeamFlex items={teamItems} />;
};

export default TeamFlexItem;
