import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <section className="blue-body" id="skills">
        <header>Technical Skills</header>
        <blockquote>Good understanding of web-related tools and technologies.</blockquote>
        <div className="container">
          <div className="row">
            {this.props.skills.map(li => (
              <figure key={li.id} className="box">
                <img src={li.img} className="img-size" alt="skills" />
                <figcaption>{li.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
