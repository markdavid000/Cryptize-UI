import React from "react";
import TestimonialSlide from "./TestimonialSlide";

const TestimonialItems = () => {
  const testimonialItems = [
    {
      quote:
        "Aenean egestas metus et magna pretium lacinia. Aenean vitae metus tortor. Sed vel quam quam. Fusce dignissim libero quis varius fermentum. Ut eget porttitor orci, vel porta massa. Aliquam posuere nulla mi, eu vestibulum nisi pellentesque sit amet. Aliquam venenatis tellus eu ipsum faucibus mattis. Phasellus gravida vitae lacus sit amet tincidunt.",
      img: "./img/portrait-of-young-businessman-standing-in-conferen-WZTJAPZ.jpeg",
      name: "Abraham Park",
      details: "client",
    },
    {
      quote:
        "Aenean egestas metus et magna pretium lacinia. Aenean vitae metus tortor. Sed vel quam quam. Fusce dignissim libero quis varius fermentum. Ut eget porttitor orci, vel porta massa. Aliquam posuere nulla mi, eu vestibulum nisi pellentesque sit amet. Aliquam venenatis tellus eu ipsum faucibus mattis. Phasellus gravida vitae lacus sit amet tincidunt.",
      img: "./img/portrait-of-beautiful-woman-35ZXLWE.jpeg",
      name: "April Timm",
      details: "client",
    },
    {
      quote:
        "Aenean egestas metus et magna pretium lacinia. Aenean vitae metus tortor. Sed vel quam quam. Fusce dignissim libero quis varius fermentum. Ut eget porttitor orci, vel porta massa. Aliquam posuere nulla mi, eu vestibulum nisi pellentesque sit amet. Aliquam venenatis tellus eu ipsum faucibus mattis. Phasellus gravida vitae lacus sit amet tincidunt.",
      img: "./img/portrait-KUEFHPY.jpeg",
      name: "Jordan Mike",
      details: "client",
    },
  ];
  return <TestimonialSlide items={testimonialItems} />;
};

export default TestimonialItems;
