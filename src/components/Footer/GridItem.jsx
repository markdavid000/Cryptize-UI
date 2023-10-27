import React from "react";
import { ImMap2 } from "react-icons/im";
import { LiaEnvelopeOpenTextSolid, LiaClockSolid } from "react-icons/lia";
import { HiOutlinePhone } from "react-icons/hi2";
import { FooterGrid } from "./FooterGrid";
import { Box } from "@chakra-ui/react";

export const GridContent = () => {
  const footerGrid = [
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
      <FooterGrid items={footerGrid} />
    </Box>
  );
};
