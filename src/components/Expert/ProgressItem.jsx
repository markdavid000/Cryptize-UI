import React from "react";
import ExpertProgress from "./ExpertProgress";

const ProgressItem = () => {
  const progressItems = [
    {
      expertise: "Experience",
      percentage: "90%",
      percentValue: 90,
    },
    {
      expertise: "Technique",
      percentage: "93%",
      percentValue: 93,
    },
    {
      expertise: "Strategy",
      percentage: "87%",
      percentValue: 87,
    },
    {
      expertise: "Team",
      percentage: "95%",
      percentValue: 95,
    },
  ];

  return <ExpertProgress items={progressItems} />;
};

export default ProgressItem;
