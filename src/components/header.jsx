import React from "react";

export default function Header() {
  return (
    <div
      className="flex items-center justify-between-l justify-center ft-bg-black ph5 shadow-1 fixed top-0 w-100 z-2"
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
      <div className="flex-l items-center f4 white bold dn">
        <a href="#experience" className="mh4 pointer link white">
          Experience
        </a>
        <a href="#education" className="mh4 pointer link white">
          Education
        </a>
        <a href="#skills" className="mh4 pointer link white">
          Skills
        </a>
        <a href="#projects" className="mh4 pointer link white">
          Projects
        </a>
        <a href="#languages" className="mh4 pointer link white">
          Languages
        </a>
        <a href="#interests" className="mh4 pointer link white">
          Interests
        </a>
      </div>
    </div>
  );
}
