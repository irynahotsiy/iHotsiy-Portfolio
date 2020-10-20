import React, { Component } from "react";
import "./Experience.css" 

class Experience extends Component {
  render() {
    return (
      <section className="blue-body" id="experience">
        <header>Experience</header>
        <blockquote>
          My job experience
        </blockquote>
      <div className="container">
        {this.props.experience.map(el => (
          <div key={el.id} className="experience">
            <div className="image-box">
              <img src={el.img} alt="company-logo" width="100"/>
            </div>
            <div className="information-box">
              <h3 className="title">{el.company}</h3>
              <div className="period">{el.period}</div>
              <div className="position">{el.position}</div>
              <div className="description">{el.description}</div>
              <div>
                <span className="tools">Tools & Technologies: </span>
                {el.technologies.map((item) => 
                <span key={el.technologies.indexOf(item)}>{item} / </span>
              )}</div>
            </div>
        </div>
        ))}
     
    </div>
    </section>
    );
  }
}

export default Experience;
