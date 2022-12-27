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
        <div className="mt2 flex">
          <a
            href="mailto:friedrich.tane@gmail.com"
            className="bg-white br2 flex items-center justify-center shadow-1 pointer grow"
            style={{ width: 40, height: 40 }}
          >
            <img className="w-90" src="./email-logo.png" alt="email" />
          </a>
          <a
            href="tel:+33612825998"
            className="bg-white br2 ml2 flex items-center justify-center shadow-1 pointer grow"
            style={{ width: 40, height: 40 }}
          >
            <img className="w-90" src="./phone-logo.png" alt="phone" />
          </a>
          <a
            href="https://www.linkedin.com/in/bryne-tane"
            target="_blank"
            className="bg-white br2 ml2 flex items-center justify-center shadow-1 pointer grow"
            style={{ width: 40, height: 40 }}
            rel="noreferrer"
          >
            <img className="w-90" src="./linkedin-logo.png" alt="linkedin" />
          </a>
          <a
            href="https://github.com/bryneTane"
            target="_blank"
            className="bg-white br2 ml2 flex items-center justify-center shadow-1 pointer grow"
            style={{ width: 40, height: 40 }}
            rel="noreferrer"
          >
            <img className="w-90" src="./github-logo.png" alt="github" />
          </a>
          {/* <a
            href="https://gitlab.com/FriedrichB"
            target="_blank"
            className="bg-white br2 ml2 flex items-center justify-center shadow-1 pointer grow"
            style={{ width: 40, height: 40 }}
            rel="noreferrer"
          >
            <img className="w-90" src="./gitlab-logo.png" alt="gitlab" />
          </a> */}
        </div>
      </div>
    </div>
  );
}
