import React from "react";
import { generateAsciiArt } from "../utils/asciiArt";

export default function Start() {
  return (
    <section
      id="start"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--term-bg)",
        paddingTop: "80px",
      }}
    >
      <div className="container">
        {/* ASCII Art Header */}
        <pre
          style={{
            color: "var(--term-orange)",
            fontSize: "10px",
            lineHeight: 1,
            marginBottom: "40px",
            overflow: "hidden",
            textShadow: "0 0 10px rgba(246, 139, 72, 0.3)",
          }}
        >
          {generateAsciiArt("Software engineer")}
        </pre>

        {/* Main Content - Asymmetric Layout */}
        <div className="grid-asymmetric" style={{ alignItems: "start" }}>
          {/* Left: Terminal Session */}
          <div>
            <div className="terminal-block">
              <div className="term-header">[friedrich@portfolio ~]$ intro</div>

              <div className="prompt cursor">whoami</div>
              <div className="output" style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    color: "var(--term-orange)",
                    fontSize: "28px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  FRIEDRICH TANE
                </div>
                <div style={{ color: "var(--term-text)", fontSize: "15px" }}>
                  Full Stack Software Engineer
                </div>
                <div
                  style={{
                    color: "var(--term-text-dim)",
                    fontSize: "13px",
                    marginTop: "4px",
                  }}
                >
                  Paris, France | @Teamstarter
                </div>
              </div>

              <div className="prompt cursor">bio</div>
              <div
                className="output"
                style={{ marginBottom: "20px", fontSize: "13px" }}
              >
                Building modern web applications and leading technical teams.
                Passionate about clean code, scalable architecture, and shipping
                products that users actually want to use.
              </div>

              {/* <div className="prompt cursor">ls -la skills/</div>
              <div
                className="output output-success"
                style={{ fontSize: "12px", marginBottom: "20px" }}
              >
                drwxr-xr-x TypeScript Node.js React.js GraphQL drwxr-xr-x
                PostgreSQL MongoDB Docker AWS drwxr-xr-x Jest Puppeteer Git
                CI/CD
              </div> */}

              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                <a href="#contact" className="btn">
                  Contact
                </a>
                <a href="#projects" className="btn-alt btn">
                  Projects
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="terminal-block" style={{ marginTop: "20px" }}>
              <div className="prompt">social links</div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "12px",
                }}
              >
                {[
                  { href: "https://github.com/bryneTane", label: "github" },
                  {
                    href: "https://www.linkedin.com/in/bryne-tane",
                    label: "linkedin",
                  },
                  { href: "mailto:friedrich.tane@gmail.com", label: "email" },
                  { href: "tel:+33612825998", label: "phone" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="tag"
                    style={{ textDecoration: "none" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: System Info + Image */}
          <div>
            {/* Profile Image in Terminal Window */}
            <div
              className="term-window mobile-hide"
              style={{ marginBottom: "20px" }}
            >
              <div className="term-window-header">
                <div className="term-dot red" />
                <div className="term-dot yellow" />
                <div className="term-dot green" />
                <span style={{ marginLeft: "8px" }}>friedrich.jpg</span>
              </div>
              <div style={{ padding: 0, height: "300px", overflow: "hidden" }}>
                <img
                  src="./ft.jpg"
                  alt="Friedrich Tane"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center 35%", // Adjust these values: horizontal% vertical%
                    filter: "grayscale(0.3) contrast(1.1)",
                  }}
                />
              </div>
            </div>

            {/* System Status */}
            <div className="terminal-block">
              <div className="term-header">SYSTEM STATUS</div>
              <div style={{ fontSize: "12px", lineHeight: 1.8 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "var(--term-text-dim)" }}>
                    location:
                  </span>
                  <span style={{ color: "var(--term-orange)" }}>Paris, FR</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "var(--term-text-dim)" }}>status:</span>
                  <span style={{ color: "var(--term-green)" }}>AVAILABLE</span>
                </div>
                {/* <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "var(--term-text-dim)" }}>coffee:</span>
                  <span>☕☕☕</span>
                </div> */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "var(--term-text-dim)" }}>mode:</span>
                  <span style={{ color: "var(--term-cyan)" }}>FULL_STACK</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "var(--term-text-dim)" }}>uptime:</span>
                  <span style={{ color: "var(--term-text)" }}>
                    {new Date().getFullYear() - 2017}y coding
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 968px) {
          pre {
            font-size: 6px !important;
          }
        }
      `}</style>
    </section>
  );
}
