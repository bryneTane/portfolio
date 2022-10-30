import React from "react";
import SkillList from "./elements/skillList";
import Title from "./elements/title";

export default function Experience() {
  return (
    <div id="experience" className="mv6 ph5">
      <Title text={"work experience"} minWidth={520} />
      <div className="ph4">
        <div className="flex mv4">
          <div className="flex flex-column items-center w-30">
            <img
              src="/teamstarter-logo.png"
              style={{ width: 90 }}
              alt="teamstarter"
            />
            <div className="vline h-100 mt3" />
          </div>
          <div className="f4 tl w-70">
            <div className="f2">Software Engineer</div>
            <div className="f3 mv2 ft-orange">
              Teamstarter - Paris, France | Oct 2020 - Today
            </div>
            <div>
              <div className="mv1">Development of the Teamstarter product </div>
              <div className="mv1">
                Testing with <span className="ft-orange">Jest</span> (E2E test
                with <span className="ft-orange">Puppeteer</span> and functional
                tests)
              </div>
              <div className="mv1">Technical referent of the Dev Team</div>
              <div className="mv1">
                Writing of the internal technical documentation
              </div>
              <div className="mv1">
                Contributions to Teamstarter's open source libraries:{" "}
                <span className="ft-orange">
                  graphql-sequelize-generator, graphql-node-jobs,
                  graphql-web-hooks
                </span>
              </div>
              <div className="mv1">
                Agile team (<span className="ft-orange">SCRUM</span>)
              </div>
              <div className="mv1">
                <SkillList
                  skills={[
                    "TypeScript",
                    "Node.js",
                    "React.js",
                    "GraphQL (Apollo)",
                    "PostgreSQL",
                    "Sequelize",
                    "Docker",
                    "AWS (Elastic Beanstalk, Terraform)",
                    "Jest",
                    "Puppeteer",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mv4">
          <div className="flex flex-column items-center w-30">
            <img src="/nokia-logo.png" style={{ width: 150 }} alt="nokia" />
            <div className="vline h-100" />
          </div>
          <div className="f4 tl w-70">
            <div className="f2">Junior Software Engineer</div>
            <div className="f3 mv2 ft-orange">
              Nokia - Nozay, France | Sept 2018 - Sept 2020
            </div>
            <div>
              <div className="mv1">
                Development of the Nokia Learning Store (NokiaEDU training
                platform available{" "}
                <span className="underline pointer link">here</span>){" "}
              </div>
              <div className="mv1">
                Development of a training sessions scheduling tool on Outlook
                for the Nokia Learning Index tool
              </div>
              <div className="mv1">
                International experience (Nokia Stuttgart, Germany)
              </div>
              <div className="mv1">
                <SkillList
                  skills={[
                    "JavaScript",
                    "Node.js",
                    "React.js",
                    "CouchDB",
                    "Git",
                    "Antd Design",
                    "PDFKit",
                    "MS Flow",
                    "Outlook JavaScript API",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
