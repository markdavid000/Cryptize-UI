import React from "react";
import GuideGrid from "./GuideGrid";

const GuideGridItems = () => {
  const gridItems = [
    {
      img: "./img/icon_4_2.png",
      title: "Create Your Wallet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      border: "1px",
    },
    {
      img: "./img/icon_5_2.png",
      title: "Create Your Wallet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      border: "1px",
    },
    {
      img: "./img/icon_7_3.png",
      title: "Create Your Wallet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      border: "0",
      bgGradient:
        "linear(to-tr, #A55EFE, #724BFD, #3547F1, #3547F1, #2C79D5, #2C79D5)",
    },
  ];

  return <GuideGrid items={gridItems} />;
};

export default GuideGridItems;
