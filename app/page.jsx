import Header from "../src/components/header";
import Start from "../src/components/start";
import About from "../src/components/about";
import Experience from "../src/components/experience";
import Education from "../src/components/education";
import Skills from "../src/components/skills";
import Projects from "../src/components/projects";
import Contact from "../src/components/contact";
import { getAllArticles } from "../src/lib/articles";
import {
  SITE_URL,
  name,
  role,
  shortBio,
  currentCompany,
  city,
  countryCode,
  sameAs,
  knowsAbout,
} from "../src/lib/site-config";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  url: SITE_URL,
  jobTitle: role,
  description: shortBio,
  worksFor: { "@type": "Organization", name: currentCompany },
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: countryCode,
  },
  sameAs,
  knowsAbout,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name,
  inLanguage: "en",
  author: { "@type": "Person", name },
};

export default function HomePage() {
  const latestArticles = getAllArticles()
    .slice(0, 3)
    .map(({ slug, title, date }) => ({ slug, title, date }));

  return (
    <div className="App">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Header />
      <Start latestArticles={latestArticles} />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
