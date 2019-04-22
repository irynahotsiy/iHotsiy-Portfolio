import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <section className="blue-body" id="portfolio">
        <header>Portfolio</header>
        <blockquote>Here are a few examples of my projects.</blockquote>
        <div className="container">
          <div className="row">
            {this.props.projects.map(el => (
              <div className="box-project" key={el.id}>
                <div className="project-icon">
                  <img src={el.img} alt="project" />
                </div>

                <div className="project-background">
                  <article>{el.title}</article>

                  <div className="technologies">
                    {el.content.map(el => (
                      <span>{el}</span>
                    ))}
                  </div>
                  <p>{el.description}</p>
                  <div>
                      <a
                        href={el.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      <button className="gradiented-btn">GitHub</button>
                      </a>
                      <a
                        href={el.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       <button className="gradiented-btn">Demo</button>
                        
                      </a>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
