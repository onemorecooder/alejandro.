import React from "react";
import Title from "../Title";
import Card from "./Card";
import data from "../../data/SkillsData.json";

const Skills = () => {
  return (
    <div>
      <Title text="Skills" />
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          intro={item.intro}
          description={item.description}
          item1={item.item1}
          item2={item.item2}
        />
      ))}
    </div>
  );
};

export default Skills;
