import React from "react";
import Title from "./elements/title";

export default function Education() {
  return (
    <div id="education" className="mv6-l mv5 ph5-l ph3">
      <Title text={"education"} />
      <div className="ph4-l">
        <div className="flex mv4">
          <div className="flex-l dn flex-column items-center w-30">
            <img
              src="/esigelec-logo.png"
              style={{ width: 180 }}
              alt="esigelec"
            />
            <div className="vline h-100 mt3" />
          </div>
          <div className="f4 tl w-70-l w-100">
            <img
              src="/esigelec-logo.png"
              style={{ width: 180 }}
              alt="esigelec"
              className="dn-l mb3"
            />
            <div className="f2">Software Engineering Degree</div>
            <div className="f3 mv2 ft-orange">
              ESIGELEC - Rouen, France | Sept 2017 - Sept 2020
            </div>
            <div>
              <div className="mv1">
                Software development (
                <span className="ft-orange">
                  Java, JavaScript, Android, C#, C++
                </span>
                ), Web services (<span className="ft-orange">REST</span>)
              </div>
              <div className="mv1">
                Software projects management (medium scale agile software teams)
              </div>
              <div className="mv1">
                Networks and Operating systems (
                <span className="ft-orange">
                  Network architecture, Linux, Web servers, Raspberry
                </span>
                )
              </div>
              <div className="mv1">
                Informaion System security (
                <span className="ft-orange">Data Encryption</span>)
              </div>
            </div>
          </div>
        </div>
        <div className="flex mv4">
          <div className="flex-l dn flex-column items-center w-30">
            <img
              src="/prepavogt-logo.png"
              style={{ width: 60 }}
              alt="prepavogt"
            />
            <div className="vline h-100 mt3" />
          </div>
          <div className="f4 tl w-70-l w-100">
            <img
              src="/prepavogt-logo.png"
              style={{ width: 60 }}
              alt="prepavogt"
              className="dn-l"
            />
            <div className="f2">
              Classes Préparatoires aux Grandes Écoles, MPSI
            </div>
            <div className="f3 mv2 ft-orange">
              PrépaVogt - Yaoundé, Cameroon | Sept 2015 - Juin 2017
            </div>
            <div>
              <div className="mv1">
                Mathematics, Physics, Engineering sciences, Software development
                (C, HTML, CSS, JS, PHP), Electronics
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
