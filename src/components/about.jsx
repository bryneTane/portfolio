import React from "react";

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <h2 className="section-title">ABOUT</h2>
        <p className="section-subtitle">Background and personal profile</p>

        {/* Grid Layout */}
        <div className="grid-2">
          {/* Languages */}
          <div className="terminal-block">
            <div className="term-header">LANGUAGES</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "var(--term-orange)",
                    marginBottom: "8px",
                  }}
                >
                  FR
                </div>
                <div style={{ color: "var(--term-text)", fontSize: "13px" }}>
                  Native language
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "var(--term-text)",
                    marginBottom: "8px",
                  }}
                >
                  EN
                </div>
                <div style={{ color: "var(--term-text)", fontSize: "13px" }}>
                  Professional proficiency
                </div>
              </div>
            </div>
          </div>

          {/* Background */}
          <div className="terminal-block">
            <div className="term-header">INTERNATIONAL BACKGROUND</div>
            <div
              style={{
                color: "var(--term-text)",
                lineHeight: 1.7,
                fontSize: "13px",
              }}
            >
              Multicultural perspective shaped by experiences in{" "}
              <code style={{ color: "var(--term-orange)" }}>France</code>,{" "}
              <code style={{ color: "var(--term-orange)" }}>Germany</code>, and{" "}
              <code style={{ color: "var(--term-orange)" }}>Cameroon</code>.
              Bringing global insights to technology and collaboration.
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="terminal-block" style={{ marginTop: "20px" }}>
          <div className="prompt">interests</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "12px",
            }}
          >
            {[
              { icon: "🎹", name: "Piano" },
              { icon: "📚", name: "Mangas" },
              { icon: "🏀", name: "Basketball" },
              { icon: "🎬", name: "Video editing" },
              { icon: "🎨", name: "Graphic design" },
            ].map((interest) => (
              <span
                key={interest.name}
                className="tag"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span>{interest.icon}</span>
                <span>{interest.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
