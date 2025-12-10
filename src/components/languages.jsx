import React from "react";
import Title from "./elements/title";

export default function Languages() {
  return (
    <div id="languages" className="mv6-l mv5 ph5-l ph3">
      <Title text={"languages"} />
      <div className="ph4-l flex flex-row-l flex-column items-stretch justify-center">
        <div
          className="w-30-l w-100 mh3-l mh0 mv2"
          style={{
            padding: "30px",
            border: "3px solid var(--terminal-green)",
            background: "var(--bg-card)",
            clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)",
            boxShadow: "0 0 25px rgba(0, 255, 65, 0.3), inset 0 0 40px rgba(0, 255, 65, 0.05)",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -3,
              right: -3,
              width: 18,
              height: 18,
              background: "var(--terminal-green)",
              clipPath: "polygon(100% 0, 0 0, 100% 100%)"
            }}
          />
          <div className="f2 mb3 ft-green mono crt-glow">French</div>
          <div className="f4" style={{color: "var(--text-secondary)"}}>
            <span className="ft-blue mono">{'> '}</span>Native language
          </div>
        </div>
        <div
          className="w-30-l w-100 mh3-l mh0 mv2"
          style={{
            padding: "30px",
            border: "3px solid var(--electric-blue)",
            background: "var(--bg-card)",
            clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)",
            boxShadow: "0 0 25px rgba(0, 212, 255, 0.3), inset 0 0 40px rgba(0, 212, 255, 0.05)",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -3,
              right: -3,
              width: 18,
              height: 18,
              background: "var(--electric-blue)",
              clipPath: "polygon(100% 0, 0 0, 100% 100%)"
            }}
          />
          <div className="f2 mb3 ft-blue mono" style={{textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"}}>English</div>
          <div className="f4" style={{color: "var(--text-secondary)"}}>
            <span className="ft-green mono">{'> '}</span>Professional proficiency
          </div>
        </div>
      </div>
    </div>
  );
}
