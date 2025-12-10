import React, { useState } from "react";
import Modal from "./elements/modal";

const projects = [
  {
    id: 1,
    title: "La Mater",
    subtitle: "Groceries Delivery Service",
    image: "/lamater.png",
    description:
      "Co-founded a groceries delivery service in Cameroon with 18 employees. Full-stack development of web and mobile applications.",
    longDescription:
      "La Mater is a comprehensive groceries delivery service that I launched in Cameroon with friends in 2019. Today, La Mater has grown to a team of 18 employees working in delivery and software development. This experience has allowed me to develop skills in full-stack engineering, graphic design, video editing, and team management.",
    tech: ["React", "Node.js", "Mobile Development", "AWS"],
    link: "https://lamater.net",
  },
  {
    id: 2,
    title: "Hostme.space",
    subtitle: "Web Hosting Platform",
    image: "/hostme.png",
    description:
      "Built a web hosting service with billing integration, making deployment easier for developers.",
    longDescription:
      "Hostme.space is a web hosting service built with friends to simplify website deployments. Initially created for ourselves, we later added a billing system with Stripe to open it to other users.",
    tech: ["PHP", "Laravel", "MySQL", "Stripe API", "Apache"],
    link: "https://hostme.space",
  },
  {
    id: 3,
    title: "Kulturbot",
    subtitle: "Twitter Bot & Game Platform",
    image: "/kulturbot.png",
    description:
      "Created an interactive Twitter bot for Q&A games with a participative React web app.",
    longDescription:
      "The Kulturbot is a Twitter bot (@bot_kultur) that runs a questions/answers game. Built a React app (https://kulturbot.app) to make it participative, allowing users to submit their own questions.",
    tech: ["TypeScript", "React.js", "AWS Lambda", "Serverless", "Firebase"],
    link: "https://kulturbot.app",
  },
  {
    id: 4,
    title: "Joke-Cam",
    subtitle: "Private Social Media App",
    image: "/joke.png",
    description:
      "Social media app built during COVID-19 lockdown for friends to share jokes and videos privately.",
    longDescription:
      "Joke-Cam is a social media-like web app I built during the 2020 lockdown. It allowed my friends to share jokes and funny videos in a private environment without posting on public social media.",
    tech: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Service Workers",
    ],
    link: null,
  },
  {
    id: 5,
    title: "REACH Blockchain",
    subtitle: "Chemical Tracing System",
    image: "/reach.png",
    description:
      "Blockchain solution for tracing chemical substances in Airbus Defence and Space items.",
    longDescription:
      "My final ESIGELEC project was a blockchain-based tool for tracing chemical substances in Airbus Defence and Space items. Worked in a team of 6 students, implementing an Ethereum blockchain with Proof of Authority method, developing smart contracts and a REST API.",
    tech: ["Node.js", "Ethereum", "Solidity", "Docker", "Laravel", "AWS EC2"],
    link: null,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-subtitle">
          Personal projects and entrepreneurial ventures
        </p>

        <div className="grid-3">
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                border: "1px solid var(--term-border)",
                background: "var(--term-bg)",
                padding: 0,
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--term-orange)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(246, 139, 72, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--term-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Project Image */}
              <div
                style={{
                  height: "180px",
                  background: `url(${project.image}) center/cover`,
                  position: "relative",
                  filter: "grayscale(0.5)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
                    padding: "40px 16px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "var(--term-orange)",
                      marginBottom: "4px",
                    }}
                  >
                    {project.title}
                  </div>
                  <div
                    style={{ fontSize: "11px", color: "var(--term-text-dim)" }}
                  >
                    {project.subtitle}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ padding: "16px" }}>
                <p
                  style={{
                    color: "var(--term-text)",
                    marginBottom: "12px",
                    fontSize: "12px",
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="tag"
                      style={{ fontSize: "10px", padding: "3px 8px" }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span
                      className="tag"
                      style={{ fontSize: "10px", padding: "3px 8px" }}
                    >
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal
          isVisible={!!selectedProject}
          hide={() => setSelectedProject(null)}
          title={selectedProject.title}
          cta={
            selectedProject.link && (
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--term-border)",
                }}
              >
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ textDecoration: "none" }}
                >
                  Visit Website
                </a>
              </div>
            )
          }
        >
          <div
            style={{
              color: "var(--term-text)",
              lineHeight: 1.7,
              marginBottom: "24px",
              fontSize: "13px",
            }}
          >
            {selectedProject.longDescription}
          </div>
          <div>
            <div className="prompt" style={{ marginBottom: "12px" }}>
              Technologies
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {selectedProject.tech.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
