import React from "react";
import SkillList from "./elements/skillList";
import Title from "./elements/title";

export default function Skills() {
  return (
    <div id="skills" className="mv6 ph5">
      <Title text={"skills"} minWidth={250} />
      <div
        className="ph4 flex items-center justify-center"
        style={{ height: 350 }}
      >
        <div className="w-30 h-100">
          <div className="f3">Languages</div>
          <SkillList
            skills={[
              "JavaScript",
              "TypeScript",
              "Java (JSE, JEE)",
              "PHP",
              "Dart",
              "C++",
              "C",
              "C#",
              "SQL",
            ]}
          />
        </div>
        <div className="vline mh2 h-100" />
        <div className="w-30 h-100">
          <div className="f3">Frameworks</div>
          <SkillList
            skills={[
              "NodeJS",
              "ReactJS",
              "NextJS",
              "Laravel",
              "Flutter",
              "React Native",
              "Terraform",
              "Serverless",
              "Maven",
              "Spring",
              "Hibernate",
              "Jest",
              "Puppeteer",
              "JUnit",
            ]}
          />
        </div>
        <div className="vline mh2 h-100" />
        <div className="w-30 h-100">
          <div className="f3">Tools</div>
          <SkillList
            skills={[
              "AWS",
              "Git",
              "Docker",
              "PostgreSQL",
              "MongoDB",
              "MySQL",
              "Firebase",
              "Oracle DB",
              "PuTTY",
              "Unity",
              "MS Flow",
              "Android Studio",
              "Figma",
              "Canva",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
