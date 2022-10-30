import React from "react";
import { useState } from "react";
import Modal from "./modal";
import useModal from "./useModal";

export default function Card({
  title,
  logoUrl,
  imageUrl,
  width,
  height,
  Content,
  link,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { isVisible, setIsVisible } = useModal();
  return (
    <>
      <div
        className={`pointer relative shadow-1 br3 pa4 mh3-l mh1 mv2`}
        style={{
          width,
          height,
          background: `url("${imageUrl}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: isHovered
            ? undefined
            : "inset 0 -120px 130px -50px #000000",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsVisible(true)}
      >
        <div
          className={`ft-bg-black o-90 absolute top-0 left-0 z-0 br3`}
          style={{
            width: isHovered ? "100%" : 0,
            height: isHovered ? "100%" : 0,
            transition: "all 0.1s ease",
          }}
        />
        <div
          className={`${
            isHovered ? "o-100" : "o-0"
          } flex flex-column justify-center items-center z-1 w-100 h-100`}
          style={{ transition: "all 0.5s ease" }}
        >
          <img
            className="z-1 br3"
            width={width / 2}
            src={logoUrl}
            alt={title}
          />
          <div className={`f2 mt2 z-1`}>{title}</div>
        </div>
        <div
          className={`tl f3 absolute bottom-2 left-2 ${
            isHovered ? "o-0" : "o-100"
          }`}
        >
          {title}
        </div>
      </div>
      <Modal
        isVisible={isVisible}
        hide={() => setIsVisible(false)}
        title={title}
        cta={
          link && (
            <div className="flex items-center flex-row-reverse w-100">
              <a
                target="_blank"
                href={link}
                className="br3 shadow-1 ft-bg-black pa3 mt3 f5 white no-underline"
                rel="noreferrer"
              >
                ▶️ View the website
              </a>
            </div>
          )
        }
      >
        <Content />
      </Modal>
    </>
  );
}
