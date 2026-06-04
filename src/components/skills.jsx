"use client";

import React from "react";

// Comprehensive list of all technologies with logos
const skills = [
  // Programming Languages
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C#",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Dart",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },

  // Frontend Frameworks & Libraries
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  // Backend & Runtime
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },

  // Databases
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Oracle DB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },

  // APIs & Query Languages
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },

  // DevOps & Cloud
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "GCP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Terraform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  },
  {
    name: "Datadog",
    logo: "https://cdn.simpleicons.org/datadog",
  },
  {
    name: "Sentry",
    logo: "https://cdn.simpleicons.org/sentry",
  },

  // AI / LLM
  {
    name: "Claude API",
    logo: "https://cdn.simpleicons.org/anthropic",
  },
  {
    name: "LangGraph",
    logo: "https://cdn.simpleicons.org/langchain",
  },
  {
    name: "Replicate",
    logo: "https://cdn.simpleicons.org/replicate",
  },

  // Mobile Development
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Android",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },

  // Backend as a Service
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // Operating Systems
  {
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

const tools = [
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Jenkins",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },
  {
    name: "Jest",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Cypress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
  },
  {
    name: "Expo",
    logo: "https://cdn.simpleicons.org/expo",
  },
  {
    name: "Puppeteer",
    logo: "https://cdn.simpleicons.org/puppeteer",
  },
  {
    name: "Serverless",
    logo: "https://cdn.simpleicons.org/serverless",
  },
];

const additionalTools = [
  {
    name: "Power Automate (MS Flow)",
    logo: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/microsoft-power-automate.svg",
  },
  {
    name: "Make",
    logo: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/make-color.svg",
  },
  {
    name: "Zapier",
    logo: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/zapier.svg",
  },
  {
    name: "Adobe Premiere",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        {/* Skill Cards Grid */}
        <div className="grid-4">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <img
                src={skill.logo}
                alt={skill.name}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Tools (dev) - same card style as main skills */}
        <div style={{ marginTop: "40px" }}>
          <div className="prompt" style={{ marginBottom: "12px" }}>
            tools
          </div>
          <div className="grid-4">
            {tools.map((tool) => (
              <div key={tool.name} className="skill-card">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Tools (non-dev) */}
        <div style={{ marginTop: "40px" }}>
          <div className="prompt">additional tools</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "12px",
            }}
          >
            {additionalTools.map((tool) => (
              <span
                key={tool.name}
                className="tag"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {tool.logo && (
                  <img
                    src={tool.logo}
                    alt=""
                    style={{
                      width: 14,
                      height: 14,
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                )}
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
