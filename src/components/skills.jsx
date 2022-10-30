import React from "react";
import SkillList from "./elements/skillList";
import Title from "./elements/title";

export default function Skills() {
  return (
    <div id="skills" className="mv6-l mv5 ph5-l ph3">
      <Title text={"skills"} />
      <div className="ph4-l flex flex-row-l flex-column items-center justify-center">
        <div className="w-30-l h-100">
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
        <div className="vline mh2 h-100 dn dib-l" />
        <div className="w-30-l h-100">
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
        <div className="vline mh2 h-100 dn dib-l" />
        <div className="w-30-l h-100">
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
