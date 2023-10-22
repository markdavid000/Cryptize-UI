import React from "react";
import Slider from "react-slick";
import "./TestimonialSlide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const CustomNextArrow = () => null;
const CustomPrevArrow = () => null;

const TestimonialSlide = (props) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Box
      bgGradient="linear(to-tr, #A55EFE, #3547F1, #3547F1, #2C79D5)"
      w={"100%"}
      pt={"30px"}
      pb={"50px"}
      px={"50px"}
    >
      <Slider {...settings}>
        {props.items.map((item, index) => (
          <Box key={index}>
            <Text
              color={"white"}
              mb={"2rem"}
              fontSize={"14px"}
              fontWeight={"400"}
            >
              {item.quote}
            </Text>
            <Flex alignItems={"center"} gap={"1rem"}>
              <Image src={item.img} boxSize={"60px"} borderRadius={"50%"} />
              <Box>
                <Text color={"white"} fontSize={"22px"} fontWeight={"400"}>
                  {item.name}
                </Text>
                <Text color={"white"} fontSize={"14px"} fontWeight={"400"}>
                  {item.details}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialSlide;
