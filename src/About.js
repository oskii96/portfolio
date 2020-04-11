import React, { Component } from "react";
import Skillbars from "../src/components/Skillbars";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="padding">
        <div className="padding">
          <h2>About me</h2>
          <hr />
          <p>
            I'm a 24 year old informatics student at Örebro University. By the
            summer of 2020 I'm graduating with a bachelor's degree in
            Information Systems. Some of the courses I've had during my
            education have dealt with:
          </p>
          <ul>
            <li>Object-oriented programming with C#</li>
            <li>Object-oriented programming with Java</li>
            <li>Database management with SQL Server</li>
            <li>
              Client-side programming with JavaScript, jQuery, HTML and CSS
            </li>
            <li>Web-systems with .NET</li>
            <li>
              Agile software development with Scrum and eXtreme Programming
            </li>
            <li>Requirements engineering</li>
            <li>Object-oriented analysis and design</li>
            <li>Interaction design</li>
          </ul>
          <p>... amongst others.</p>
        </div>
        <div className="padding">
          <h2>Projects</h2>
          <hr />
          <p>
            You can find my projects over at{" "}
            <a href="https://github.com/oskarp96?tab=repositories">
              my github.
            </a>
          </p>
        </div>
        <div>
          <h2>Skills</h2>
          <hr />
          <Skillbars />
        </div>
      </div>
    );
  }
}

export default About;
