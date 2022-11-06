import React from "react";
import Title from "./elements/title";

export default function Languages() {
  return (
    <div id="languages" className="mv6-l mv5 ph5-l ph3">
      <Title text={"languages"} />
      <div className="ph4-l flex flex-row-l flex-column items-center justify-center ft-black">
        <div className="w-30-l w-100 br3 ba pa3 shadow-1 mh3 mv2">
          <div className="f2 mb2 white ft-orange">French</div>
          <div className="f4 white">Native language</div>
        </div>
        <div className="w-30-l w-100 br3 ba pa3 shadow-1 mh3 mv2">
          <div className="f2 mb2 white ft-orange">English</div>
          <div className="f4 white">Professional proficiency</div>
        </div>
      </div>
    </div>
  );
}
