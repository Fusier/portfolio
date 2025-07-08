import React from "react";
import Marquee from "react-fast-marquee";
import StackIcon from "tech-stack-icons";

type IconNameMap = {
  Spring: string;
  PostgreSQL: string;
  Javascript: string;
  Typescript: string;
  Angular: string;
  React: string;
  Java: string;
  Python: string;
  Kotlin: string;
  HTML: string;
  Git: string;
  AWS: string;
  CSS: string;
  Cypress: string;
  Jest: string;
  SASS: string;
};

const iconNameMap: IconNameMap = {
  Spring: "spring",
  PostgreSQL: "postgresql",
  Javascript: "js",
  Typescript: "typescript",
  Angular: "angular",
  React: "reactjs",
  Java: "java",
  Python: "python",
  Kotlin: "kotlin",
  HTML: "html5",
  Git: "git",
  AWS: "aws",
  CSS: "css3",
  Cypress: "cypress",
  Jest: "jest",
  SASS: "sass",
} as const;

const keywords = [
  "Javascript",
  "Typescript",
  "Angular",
  "React",
  "Java",
  "Python",
  "Kotlin",
  "HTML",
  "Spring",
  "Git",
  "AWS",
  "CSS",
  "PostgreSQL",
  "Cypress",
  "Jest",
  "SASS",
] as const;

const TechMarquee = () => (
  <Marquee gradient={false} speed={40} pauseOnHover={true}>
    {keywords.map((keyword, index) => {
      const iconName = iconNameMap[keyword];

      return (
        <div key={index} style={{ margin: "0 30px", textAlign: "center" }}>
          <StackIcon
            name={iconName}
            style={{
              height: 50,
              width: 50,
              display: "block",
              marginBottom: 8,
            }}
          />
          <span style={{ fontSize: 12, color: "#666" }}>{keyword}</span>
        </div>
      );
    })}
  </Marquee>
);

export default TechMarquee;
