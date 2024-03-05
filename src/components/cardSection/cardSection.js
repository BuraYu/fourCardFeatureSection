import React from "react";
import "./cardSection.css";
import Card from "../cards/Card";
import teamBuilderSvg from "../../images/icon-team-builder.svg";
import calcSvg from "../../images/icon-calculator.svg";
import karmaSvg from "../../images/icon-karma.svg";
import supervisorSvg from "../../images/icon-supervisor.svg";

const cardSection = () => {
  const data = [
    {
      title: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
      logo: teamBuilderSvg,
      color: "#EA5454",
    },
    {
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      logo: calcSvg,
      color: "#549EF2",
    },
    {
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
      logo: karmaSvg,
      color: "#FCAE4A",
    },
    {
      title: "Superviser",
      text: "Monitors activity to identify project roadblocks",
      logo: supervisorSvg,
      color: "#00C8C8",
    },
  ];

  return (
    <div className="card-container">
      <Card
        title={data[3].title}
        description={data[3].text}
        logo={data[3].logo}
        color={data[3].color}
      />
      <div className="mid-cards">
        <Card
          title={data[0].title}
          description={data[0].text}
          logo={data[0].logo}
          color={data[0].color}
        />
        <Card
          title={data[2].title}
          description={data[2].text}
          logo={data[2].logo}
          color={data[2].color}
        />
      </div>

      <Card
        title={data[1].title}
        description={data[1].text}
        logo={data[1].logo}
        color={data[1].color}
      />
    </div>
  );
};

export default cardSection;
