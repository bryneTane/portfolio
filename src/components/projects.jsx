import React from "react";
import Card from "./elements/card";
import SkillList from "./elements/skillList";
import Title from "./elements/title";

const projects = [
  {
    title: "La Mater",
    imageUrl: "lamater.png",
    logoUrl: "/lamater-logo-white.png",
    Content: () => (
      <div className="f5 tl w-70-l mv3">
        <div className="f3 mv2 ft-orange">
          La Mater Service - Remote (Cameroon) | Jan 2019 - Today
        </div>
        <div>
          <div className="mv1">
            Co-founder of a groceries delivery service.{" "}
            <span className="ft-orange underline pointer">
              https://lamater.net
            </span>{" "}
            I launched this service in Cameroon with some friends in 2019.
            Today, La Mater is a team of 18 employees working in delivery and
            software development. With this experience I develop my skills in
            Fullstack Software Engineering (
            <span className="ft-orange">Web, Mobile, Infrastructure</span>),
            Graphic Design (<span className="ft-orange">Canva</span>), Video
            Editing (
            <span className="ft-orange">Adobe Premiere Pro, Powtoon</span>) and{" "}
            <span className="ft-orange">Team Management</span>.
          </div>
        </div>
      </div>
    ),
    link: "https://lamater.net",
  },
  {
    title: "Hostme.space",
    imageUrl: "hostme.png",
    logoUrl: "/hostme-logo.png",
    Content: () => (
      <div className="f5 tl w-70-l mv3">
        <div className="f3 mv2 ft-orange">
          La Mater Service - Remote (Cameroon) | Jan 2019 - Today
        </div>
        <div>
          <div className="mv1">
            Hostme.space is a web hosting service I built with friends.{" "}
            <span className="ft-orange underline pointer">
              https://hostme.space
            </span>
            . We first built it for ourselves (to ease our own websites
            deployments) and then later added a billing system (with{" "}
            <span className="ft-orange">Stripe</span>) to open it to other
            people.
          </div>
          <div className="mv1 white">
            <SkillList
              skills={[
                "PHP",
                "Laravel",
                "MySQL",
                "Apache",
                "Stripe API",
                "Github/Gitlab APIs",
              ]}
            />
          </div>
        </div>
      </div>
    ),
    link: "https://hostme.space",
  },
  {
    title: "Kulturbot",
    imageUrl: "kulturbot.png",
    logoUrl: "/kulturbot-logo.png",
    Content: () => (
      <div className="f5 tl w-70-l mv3">
        <div className="f3 mv2 ft-orange">
          Paris, France | Sept 2022 - Today
        </div>
        <div>
          <div className="mv1">
            The Kulturbot is a Twitter bot (
            <span className="ft-orange">@bot_kultur</span>) I built to launch a
            questions/answers game on Twitter. I also made a React app (
            <span className="ft-orange underline pointer">
              https://kulturbot.app
            </span>
            ) to make it participative, allowing users to submit questions.
          </div>
          <div className="mv1 white">
            <SkillList
              skills={[
                "TypeScript",
                "React.js",
                "Node.js",
                "Terraform",
                "AWS Lambda",
                "AWS S3",
                "AWS Cloudfront",
                "Serverless",
                "Firebase",
              ]}
            />
          </div>
        </div>
      </div>
    ),
    link: "https://kulturbot.app",
  },
  {
    title: "Joke-Cam",
    imageUrl: "joke.png",
    logoUrl: "/joke-logo.png",
    Content: () => (
      <div className="f5 tl w-70-l mv3">
        <div className="f3 mv2 ft-orange">
          Élancourt, France | Mars 2020 - Avril 2020
        </div>
        <div>
          <div className="mv1">
            Joke-Cam is a social media like web app I built during the lockdown
            in 2020 (Covid 19). I made this app for my friends who were bored
            during the lockdown. They were able to share jokes and funny video
            of themselves through Joke-Cam without publishing it on other social
            media.
          </div>
          <div className="mv1 white">
            <SkillList
              skills={[
                "Node.js",
                "React.js",
                "Express.js",
                "Docker",
                "MongoDB",
                "Git",
                "Apache",
                "letsencrypt",
                "Service Workers",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "REACH Blockchain",
    imageUrl: "reach.png",
    logoUrl: "/reach-logo.png",
    Content: () => (
      <div className="f5 tl w-70-l mv3">
        <div className="f3 mv2 ft-orange">
          ESIGELEC / Airbus Defense And Space - Rouen, France | Dec 2019 - Jan
          2020
        </div>
        <div>
          <div className="mv1">
            My last project at ESIGELEC was a tool for tracing chemical
            substances in Airbus Defence and Space items through a Blockchain. I
            worked on this project in a group of 6 students and at the end of
            the project we went to Airbus Defense and Space to do a presentation
            of the solution and deliver it.
          </div>
          <div className="mv1">
            Implementation of an <span className="ft-orange">Ethereum</span>{" "}
            blockchain,{" "}
            <span className="ft-orange">Proof of Authority method</span>
          </div>
          <div className="mv1">
            Development of a <span className="ft-orange">REST API</span>
          </div>
          <div className="mv1">
            Development of <span className="ft-orange">Smart Contracts</span>{" "}
          </div>
          <div className="mv1">
            Work in a team of <span className="ft-orange">six</span>, project
            management in <span className="ft-orange">agile method</span>,
            interactions with the customer (Airbus Defence and Space){" "}
          </div>
          <div className="mv1 white">
            <SkillList
              skills={[
                "Node.js",
                "Geth",
                "Docker",
                "Solidity",
                "Laravel",
                "Linux",
                "AWS EC2",
                "Git",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <div id="projects" className="mv6-l mv5 ph5-l ph3">
      <Title text={"side projects"} />
      <div className="ph4-l">
        {projects.map((project) => (
          <div className="dib">
            <Card key={project.title} width={300} height={300} {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
