import React from "react";

const experiences = [
  {
    company: "TheFork",
    logo: "/thefork-logo.png",
    role: "Software Engineer",
    location: "Paris, France",
    period: "June 2023 - Present",
    description:
      "TheFork Manager (TFM): SaaS used by restaurant staff live during service. React + Apollo frontend, ~25 Node.js microservices and a legacy PHP system behind a GraphQL API, on Kubernetes.",
    achievements: [
      "Led TFM's frontend performance initiative on the booking module: built the perf instrumentation (Datadog RUM tracking LCP, INP, and long tasks on booking views), authored the analysis and the Quick Wins catalogue and shipped the heaviest fixes: booking-page DOM down 52 to 68% across views (reservation list by 88.7%) for the heaviest accounts.",
      "Set up the team's monitoring and alerting process (Datadog dashboard + dedicated Slack channel) so regressions get caught and paged.",
      "Authored cross-service design analyses (service-override payment, preset menus on overrides) and led the decommissioning of the legacy lafourchette-core PHP dependency inside messaging-worker.",
      "Shipped reservation features (first visit, grouped reservations, smart cancellation, no-show flow), preset menus management, mobile-app extensions (click-to-call, contextual menu, simplified-Chinese locale), and a FullCalendar-based calendar revamp.",
      "Innovation week: prototyped a no-show prediction AI and Ask-TFM MCP. Upgraded the QA stack to Playwright + Allure v3 with a preconditions API.",
    ],
    skills: [
      "TypeScript",
      "React",
      "GraphQL (Apollo)",
      "Node.js",
      "Microservices",
      "PostgreSQL",
      "Kubernetes",
      "Docker",
      "AWS",
      "Datadog",
      "Playwright",
      "Cypress",
    ],
  },
  {
    company: "Teamstarter",
    logo: "/teamstarter-logo.png",
    role: "Software Engineer",
    location: "Paris, France",
    period: "Oct 2020 - June 2023",
    description:
      "Led technical development on the Teamstarter platform and the internal tools that scaled its Customer Success operations.",
    achievements: [
      "Tech-led an agile (SCRUM) team of 4 devs to automate Customer Success workflows. Max users a coach could manage went from 3,000 to 4,500.",
      "Designed and built the Customer Success staffing platform. Staffing errors went to 0 over the last year.",
      "Built the billing automation platform now used for all 80 clients.",
      "Led the new AWS infrastructure setup (IaC with Terraform, CI/CD) and rolled the corresponding code changes across services.",
      "Wrote 15 internal articles on security, databases, architecture, and testing to define code standards and reduce technical debt.",
      "Technical referent and mentor for the dev team. Contributed to open-source GraphQL libraries: graphql-sequelize-generator, graphql-node-jobs, graphql-web-hooks.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "GraphQL (Apollo)",
      "PostgreSQL",
      "Sequelize",
      "Docker",
      "AWS",
      "Terraform",
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
