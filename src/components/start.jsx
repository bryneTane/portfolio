import React from "react";

export default function Start() {
  return (
    <div
      className="pv6 flex items-center relative justify-between ph7 parallax"
      id="start"
      style={{ background: 'url("/computer.jpg")', marginTop: 80 }}
    >
      <div className="h-100 w-100 o-90 ft-bg-black absolute top-0 left-0 z-0" />
      <div
        className="relative overflow-hidden z1 w-100 fg1"
        style={{ minWidth: 300, height: 300, borderRadius: "50%" }}
      >
        <img
          src="./ft.jpg"
          alt="profile"
          className="w-100"
          style={{ marginTop: -50 }}
        />
      </div>
      <div className="f4 tl ml5 z-1">
        <div className="mb2" style={{ fontSize: 80 }}>
          Hi, I'm Friedrich 😁👋
        </div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
}
