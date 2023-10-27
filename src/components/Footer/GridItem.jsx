import React from "react";
import { ImMap2 } from "react-icons/im";
import { LiaEnvelopeOpenTextSolid, LiaClockSolid } from "react-icons/lia";
import { HiOutlinePhone } from "react-icons/hi2";
import { FooterGrid1, FooterGrid2 } from "./FooterGrid";
import { Box } from "@chakra-ui/react";

export const GridContent1 = () => {
  const footerGrid1 = [
    {
      icon: ImMap2,
      text: "Yusuf Dambazua Crescent, Kubwa",
    },
    {
      icon: LiaEnvelopeOpenTextSolid,
      text: "davidojukwu59@gmail.com",
    },
    {
      icon: HiOutlinePhone,
      text: "+234 916 5135 178",
    },
    {
      icon: LiaClockSolid,
      text: "09.00 AM - 17.00 PM",
    },
  ];

  return (
    <Box>
      <FooterGrid1 items1={footerGrid1} />
    </Box>
  );
};

export const GridContent2 = () => {
  const footerGrid2 = [
    {
      text: "Home",
    },
    {
      text: "About",
    },
    {
      text: "FAQs",
    },
    {
      text: "Blog",
    },
    {
      text: "Contact",
    },
  ];

  return (
    <Box>
      <FooterGrid2 items2={footerGrid2} />
    </Box>
  );
};
