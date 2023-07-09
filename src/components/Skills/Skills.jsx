import React from "react";
import Title from "../Title";
import Card from "./Card";
import data from "../../data/SkillsData.json";

const Skills = () => {
  return (
    <div className="md:px-16 gap-14 flex flex-col">
      <Title text="Skills" />
      {data.map((item, index) => (
        <Card
          key={item.id}
          title={item.title}
          intro={item.intro}
          description={item.description}
          item1={item.item1}
          item2={item.item2}
          orientation={index%2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
};

export default Skills;
