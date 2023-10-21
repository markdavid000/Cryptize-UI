import React from "react";
import FeaturesLayout from "./FeaturesLayout";

const FeaturesLayoutItem = () => {
  const featuresItem1 = [
    {
      img: "./img/icon_8_3.png",
      title: "Free Trial Account",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    },
    {
      img: "./img/icon_10_3.png",
      title: "Affordable Plans",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    },
  ];

  const featuresItem2 = [
    {
      img: "./img/icon_9_3.png",
      title: "Guided By Experts",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    },
    {
      img: "./img/icon_2_2.png",
      title: "24/7 Live Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    },
  ];

  return (
    <FeaturesLayout
      featuresItems1={featuresItem1}
      featuresItems2={featuresItem2}
    />
  );
};

export default FeaturesLayoutItem;
