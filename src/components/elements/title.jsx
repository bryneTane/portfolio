import React from "react";

export default function Title({ text, minWidth }) {
  return (
    <div className="flex items-center mb5-l mb4 relative">
      <div className="line w-10-l dn dib-l" />
      <div
        className="f1 tc-l tl mono"
        style={{
          minWidth,
          color: "var(--terminal-green)",
          textShadow: "0 0 10px rgba(0, 255, 65, 0.5)",
          letterSpacing: "4px",
          fontWeight: 700
        }}
      >
        <div className="nowrap-l mh4-l relative">
          <span className="ft-blue" style={{fontSize: "0.7em", marginRight: "10px"}}>//</span>
          {text.toUpperCase()}
          <div
            style={{
              position: "absolute",
              bottom: -8,
              left: 0,
              height: "3px",
              width: "60%",
              background: "linear-gradient(90deg, var(--electric-blue), transparent)",
            }}
          />
        </div>
      </div>
      <div className="line w-100 dn dib-l" />
    </div>
  );
}
