import React from "react";
import SkillList from "./elements/skillList";
import Title from "./elements/title";

export default function Interests() {
  return (
    <div id="interests" className="mv6-l mv5 ph5-l ph3">
      <Title text={"interests"} />
      <div className="ph4-l flex flex-row-l flex-column justify-center tl tc-l">
        <SkillList
          skills={[
            "Piano practicing",
            "Mangas",
            "Basketball",
            "Video editing",
            "Graphic design",
          ]}
        />
      </div>
    </div>
  );
}
