import React from "react";

export default function Title({ text, minWidth }) {
  return (
    <div className="flex items-center mb5-l mb4">
      <div className="line w-20 dn dib-l" />
      <div className="f1 tc-l tl ft-orange" style={{ minWidth }}>
        <div className="nowrap-l mh4-l">{text.toUpperCase()}</div>
      </div>
      <div className="line w-100 dn dib-l" />
    </div>
  );
}
