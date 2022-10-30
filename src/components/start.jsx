import React from "react";

export default function Start() {
  return (
    <div
      className="pv6-l pv3 flex flex-row-l flex-column-reverse items-center relative justify-center ph4-l parallax"
      id="start"
      style={{ backgroundImage: 'url("/computer.jpg")', marginTop: 80 }}
    >
      <div className="h-100 w-100 o-90 ft-bg-black absolute top-0 left-0 z-0" />
      <div
        className="relative overflow-hidden z-1 w-40 mb0-l mb4"
        style={{ width: 300, height: 300, borderRadius: "50%" }}
      >
        <img
          src="./ft.jpg"
          alt="profile"
          className="w-100"
          style={{ marginTop: -50 }}
        />
      </div>
      <div className="f4 tl-l ml5-l z-1 w-60-l w-90 mb0-l mb5">
        <div className="mb2" style={{ fontSize: 80 }}>
          Hi, I'm Friedrich 😁👋
        </div>
        <div>
          I am a Fullstack Software Engineer based in Paris and currently
          working at Teamstarter (teamstarter.co).
        </div>
        <div></div>
      </div>
    </div>
  );
}
