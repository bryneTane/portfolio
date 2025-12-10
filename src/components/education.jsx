import React from "react";

const educationData = [
  {
    degree: "Software Engineering Degree",
    school: "ESIGELEC",
    location: "Rouen, France",
    period: "2017 - 2020",
    logo: "/esigelec-logo.png",
    description: "Specialized in software development, web services (REST), and information system security. Gained hands-on experience with agile methodologies managing medium-scale software teams.",
    highlights: [
      "Software development (Java, JavaScript, Android, C#, C++)",
      "Web services & REST APIs",
      "Network architecture & Linux administration",
      "Information system security & Data encryption",
      "Agile project management",
    ],
  },
  {
    degree: "Classes Préparatoires (MPSI)",
    school: "PrépaVogt",
    location: "Yaoundé, Cameroon",
    period: "2015 - 2017",
    logo: "/prepavogt-logo.png",
    description: "Intensive two-year preparatory program in Mathematics and Physics for entrance to engineering schools.",
    highlights: [
      "Advanced Mathematics & Physics",
      "Engineering sciences",
      "Software development (C, HTML, CSS, JS, PHP)",
      "Electronics fundamentals",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>
        <p className="section-subtitle">Academic background and formal training</p>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="content-box">
                {/* Header */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      padding: '12px',
                      background: 'var(--term-bg-alt)',
                      border: '1px solid var(--term-border)',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      style={{ height: '40px', display: 'block' }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px', color: 'var(--term-orange)' }}>
                      {edu.degree}
                    </h3>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--term-text)', marginBottom: '4px' }}>
                      {edu.school}
                    </div>
                    <div style={{ color: 'var(--term-text-dim)', fontSize: '12px' }}>
                      {edu.location} • {edu.period}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--term-text)', lineHeight: 1.7, marginBottom: '16px', fontSize: '13px' }}>
                  {edu.description}
                </p>

                {/* Highlights */}
                <ul className="term-list">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} style={{ fontSize: '12px' }}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
