import React from "react";

export default function Title({ text, minWidth }) {
  return (
    <div className="flex items-center mb5">
      <div className="line w-20 dn dib-l" />
      <div className="f1 ft-orange w-100" style={{ minWidth }}>
        {text.toUpperCase()}
      </div>
      <div className="line w-100 dn dib-l" />
    </div>
  );
}
