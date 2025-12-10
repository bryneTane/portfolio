import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--term-bg-alt)" }}
    >
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Terminal Window */}
          <div className="term-window">
            <div className="term-window-header">
              <div className="term-dot red" />
              <div className="term-dot yellow" />
              <div className="term-dot green" />
              <span style={{ marginLeft: "8px" }}>contact.sh</span>
            </div>
            <div className="term-window-body">
              <div
                className="prompt cursor"
                style={{ marginBottom: "20px", fontSize: "16px" }}
              >
                contact
              </div>

              <div
                className="output"
                style={{ marginBottom: "24px", fontSize: "13px" }}
              >
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </div>

              <div className="prompt" style={{ marginBottom: "16px" }}>
                contact methods
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "40px",
                }}
              >
                <a
                  href="mailto:friedrich.tane@gmail.com"
                  className="btn"
                  style={{ textDecoration: "none" }}
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/bryne-tane"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-alt btn"
                  style={{ textDecoration: "none" }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bryneTane"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-alt btn"
                  style={{ textDecoration: "none" }}
                >
                  GitHub
                </a>
              </div>

              {/* Footer */}
              <div
                style={{
                  borderTop: "1px solid var(--term-border)",
                  paddingTop: "20px",
                  marginTop: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "16px",
                    fontSize: "12px",
                  }}
                >
                  <div style={{ color: "var(--term-text-dim)" }}>
                    © {new Date().getFullYear()} Friedrich Tane
                  </div>
                  <div style={{ display: "flex", gap: "16px" }}>
                    {[
                      { href: "https://github.com/bryneTane", label: "GitHub" },
                      {
                        href: "https://www.linkedin.com/in/bryne-tane",
                        label: "LinkedIn",
                      },
                      {
                        href: "mailto:friedrich.tane@gmail.com",
                        label: "Email",
                      },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        style={{
                          color: "var(--term-text-dim)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--term-orange)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--term-text-dim)")
                        }
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
