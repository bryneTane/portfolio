import React from "react";

const experiences = [
  {
    company: "Teamstarter",
    logo: "/teamstarter-logo.png",
    role: "Software Engineer",
    location: "Paris, France",
    period: "Oct 2020 - Present",
    description:
      "Leading technical development and team management for the Teamstarter platform.",
    achievements: [
      "Development of the Teamstarter product with modern web technologies",
      "Implemented comprehensive testing strategy with Jest and Puppeteer (E2E + functional tests)",
      "Technical referent for the development team, mentoring junior developers",
      "Authored internal technical documentation and best practices",
      "Contributed to open source libraries: graphql-sequelize-generator, graphql-node-jobs, graphql-web-hooks",
      "Agile team collaboration using SCRUM methodology",
    ],
    skills: [
      "TypeScript",
      "Node.js",
      "React.js",
      "GraphQL (Apollo)",
      "PostgreSQL",
      "Sequelize",
      "Docker",
      "AWS",
      "Jest",
      "Puppeteer",
    ],
  },
  {
    company: "Nokia",
    logo: "/nokia-logo.png",
    role: "Junior Software Engineer",
    location: "Nozay, France",
    period: "Sept 2018 - Sept 2020",
    description:
      "Developed training platforms and tools for Nokia's global learning ecosystem.",
    achievements: [
      "Built the Nokia Learning Store (NokiaEDU training platform)",
      "Developed training session scheduling tool integrated with Outlook",
      "International experience working with Nokia Stuttgart, Germany",
    ],
    skills: [
      "JavaScript",
      "Node.js",
      "React.js",
      "CouchDB",
      "Ant Design",
      "PDFKit",
      "MS Flow",
      "Outlook API",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">EXPERIENCE</h2>
        <p className="section-subtitle">
          Professional journey in software engineering
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="timeline-item">
              <div className="content-box">
                {/* Header with Logo and Info */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px",
                      background: "var(--term-bg-alt)",
                      border: "1px solid var(--term-border)",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      style={{ height: "40px", display: "block" }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        marginBottom: "6px",
                        color: "var(--term-orange)",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--term-text)",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.company}
                    </div>
                    <div
                      style={{
                        color: "var(--term-text-dim)",
                        fontSize: "12px",
                      }}
                    >
                      {exp.location} • {exp.period}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "var(--term-text)",
                    marginBottom: "16px",
                    fontSize: "13px",
                    lineHeight: 1.7,
                  }}
                >
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="term-list" style={{ marginBottom: "20px" }}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} style={{ fontSize: "12px" }}>
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div>
                  <div className="prompt" style={{ marginBottom: "12px" }}>
                    tech stack
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
