import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={["Hi, nice to meet you. I'm Samu"]}
      wrapper="span"
      speed={60}
      cursor={false}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={0}
    />
  );
};

export default TypeAnimationComponent;
