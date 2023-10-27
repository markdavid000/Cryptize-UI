import React from "react";
import AchievementGrid from "./AchievementGrid";

const AchievementItems = () => {
  const achievementItems = [
    {
      img: "./img/icon_10_3.png",
      title: "100",
      desc: "Worldwide Office",
    },
    {
      img: "./img/icon_10_3.png",
      title: "52",
      desc: "Award Winning",
    },
    {
      img: "./img/icon_10_3.png",
      title: "1000",
      desc: "Active User",
    },
    {
      img: "./img/icon_10_3.png",
      title: "84",
      desc: "Crypto Experts",
    },
  ];

  return <AchievementGrid items={achievementItems} />;
};

export default AchievementItems;
