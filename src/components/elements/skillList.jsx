import React from "react";

export default function SkillList({ skills }) {
  return (
    <div className="mv3">
      {skills.map((skill) => (
        <div key={skill} className="br2 ft-bg-orange bold pa3 dib ma1 shadow-1">
          {skill}
        </div>
      ))}
    </div>
  );
}
