import React from "react";
import WhyCryptizeGrid from "./WhyCryptizeGrid";

const gridItems = [
  {
    img: "./img/icon_1_2.png",
    title: "Save & Secure",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.",
    border: "1px",
  },
  {
    img: "./img/icon_2_2.png",
    title: "24/7 Supports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.",
    border: "1px",
  },
  {
    img: "./img/icon_3.png",
    title: "Quick Exchange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.",
    border: "0",
    bgGradient:
      "linear(to-tr, #A55EFE, #724BFD, #3547F1, #3547F1, #2C79D5, #2C79D5)",
  },
  {
    img: "./img/icon_4_2.png",
    title: "Secure Wallet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.",
    border: "1px",
  },
  {
    img: "./img/icon_5_2.png",
    title: "Recurring Buys",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.",
    border: "1px",
  },
  {
    img: "./img/icon_6_2.png",
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perferendis exercitationem nemo quam nobis esse aliquam neque ipsa cumque.",
    border: "1px",
  },
];

const WhyCryptizeGridContent = () => {
  return <WhyCryptizeGrid gridContent={gridItems} />;
};

export default WhyCryptizeGridContent;
