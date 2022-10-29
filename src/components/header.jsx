import React from "react";

export default function Header() {
  return (
    <div
      className="flex items-center justify-between ft-bg-black ph5 shadow-1 fixed top-0 w-100 z-max"
      style={{
        height: 80,
      }}
    >
      <img
        style={{ width: 50 }}
        src="/logo-ft.png"
        className="pointer"
        alt={"Logo"}
      />
      <div className="flex items-center f4 white bold">
        <div className="mh4 pointer link">Experience</div>
        <div className="mh4 pointer link">Education</div>
        <div className="mh4 pointer link">Skills</div>
        <div className="mh4 pointer link">Projects</div>
        <div className="mh4 pointer link">Languages</div>
        <div className="mh4 pointer link">Interests</div>
      </div>
    </div>
  );
}
