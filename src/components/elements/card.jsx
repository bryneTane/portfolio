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
        className="pointer relative mh3-l mh1 mv2"
        style={{
          width,
          height,
          background: `url("${imageUrl}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: isHovered ? "3px solid var(--electric-blue)" : "3px solid var(--terminal-green)",
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
          boxShadow: isHovered
            ? "0 0 30px rgba(0, 212, 255, 0.5), inset 0 0 100px rgba(0, 0, 0, 0.8)"
            : "0 0 20px rgba(0, 255, 65, 0.3), inset 0 -120px 130px -50px #000000",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered ? "translateY(-5px)" : "translateY(0)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsVisible(true)}
      >
        {/* Overlay */}
        <div
          className="absolute top-0 left-0 z-0"
          style={{
            width: isHovered ? "100%" : 0,
            height: isHovered ? "100%" : 0,
            background: "linear-gradient(135deg, rgba(5, 7, 9, 0.95), rgba(10, 14, 20, 0.92))",
            transition: "all 0.3s ease",
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
          }}
        />

        {/* Corner accent */}
        <div
          style={{
            position: "absolute",
            top: -3,
            right: -3,
            width: 23,
            height: 23,
            background: isHovered ? "var(--electric-blue)" : "var(--terminal-green)",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            transition: "background 0.3s"
          }}
        />

        {/* Hovered content */}
        <div
          className={`${
            isHovered ? "o-100" : "o-0"
          } flex flex-column justify-center items-center z-1 w-100 h-100 relative`}
          style={{ transition: "all 0.5s ease", padding: "20px" }}
        >
          <img
            className="z-1"
            width={width / 2.2}
            src={logoUrl}
            alt={title}
            style={{
              filter: "drop-shadow(0 0 10px rgba(0, 255, 65, 0.5))",
            }}
          />
          <div className="f2 mt3 z-1 mono ft-green crt-glow">{title}</div>
          <div className="mono ft-blue mt2" style={{fontSize: "0.85rem"}}>
            {'> '} Click to explore
          </div>
        </div>

        {/* Default title */}
        <div
          className={`tl f3 absolute bottom-0 left-0 pa3 mono ${
            isHovered ? "o-0" : "o-100"
          }`}
          style={{
            transition: "opacity 0.3s",
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent)",
            width: "100%",
            color: "var(--terminal-green)",
            textShadow: "0 0 8px rgba(0, 255, 65, 0.6)"
          }}
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
                className="btn-terminal no-underline"
                rel="noreferrer"
                style={{textDecoration: "none"}}
              >
                View Website →
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
