import React from "react";

export default function SkillList({ skills }) {
  return (
    <div className="mv3">
      {skills.map((skill) => (
        <div
          key={skill}
          className="skill-tag"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
