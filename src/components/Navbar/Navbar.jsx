import React, { useRef } from "react";
import {
  Box,
  Flex,
  Hide,
  Show,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Icon,
} from "@chakra-ui/react";
import { NavLinks } from "./NavLinks";
import { NavBtn } from "./NavBtn";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box pos={"absolute"} w={"100%"}>
      <Box maxW={"1150px"} mx={"auto"} pt={"1.5rem"} px={"1.5rem"}>
        <Flex
          alignItems={"center"}
          gap={"8rem"}
          justifyContent={"space-between"}
        >
          <Box>
            <Image src="./img/logo_Asset-2_white.png" boxSize={"55px"} />
          </Box>
          <Hide below="lg">
            <Box>
              <Flex gap={"2.5rem"}>
                <NavLinks>Home</NavLinks>
                <NavLinks>About</NavLinks>
                <NavLinks>Services</NavLinks>
                <NavLinks>Pages</NavLinks>
                <NavLinks>Contact</NavLinks>
              </Flex>
            </Box>
          </Hide>
          <Hide below="lg">
            <Box ml={"auto"}>
              <NavBtn />
            </Box>
          </Hide>
            <Show below="lg">
              <Button
                ref={btnRef}
                bg={"transparent"}
                onClick={onOpen}
                _hover={{
                  bg: "transparent",
                }}
                _focus={{
                  outline: "none",
                }}
              >
                <Icon as={CgMenuLeft} fontSize={"2.5rem"} color={"white"} />
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent bg={"black"}>
                  <DrawerCloseButton
                  fontSize={'1.2rem'}
                    color={"white"}
                    _focus={{
                      outline: "none",
                    }}
                  />
                  <Flex
                    gap={"2.5rem"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    h={"100vh"}
                  >
                    <NavLinks>Home</NavLinks>
                    <NavLinks>About</NavLinks>
                    <NavLinks>Services</NavLinks>
                    <NavLinks>Pages</NavLinks>
                    <NavLinks>Contact</NavLinks>
                  </Flex>
                </DrawerContent>
              </Drawer>
            </Show>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
