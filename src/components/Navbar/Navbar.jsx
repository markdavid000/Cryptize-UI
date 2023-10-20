import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { NavLinks } from "./NavLinks";
import { NavBtn } from "./NavBtn";

const Navbar = () => {
  return (
    <Box pos={"absolute"} w={"100%"}>
      <Box maxW={"1150px"} mx={"auto"} pt={"1.5rem"}>
        <Flex alignItems={"center"} gap={"8rem"}>
          <Box>
            <Image src="./img/logo_Asset-2_white.png" boxSize={"55px"} />
          </Box>
          <Box>
            <Flex gap={"2.5rem"}>
              <NavLinks>Home</NavLinks>
              <NavLinks>About</NavLinks>
              <NavLinks>Services</NavLinks>
              <NavLinks>Pages</NavLinks>
              <NavLinks>Contact</NavLinks>
            </Flex>
          </Box>
          <Box ml={"auto"}>
            <NavBtn />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
