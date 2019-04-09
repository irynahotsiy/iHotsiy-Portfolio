import React, { Component } from "react";
import "./Jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <section className="jumbotron" id="main">
        <header>
          <h1>
            <span className="color-blue">Trainee </span>
            <span>Front-End </span>
            <span className="color-green">Developer</span>
          </h1>
        </header>
        <blockquote>
          Hi, I'm <span className="accented-words color-blue">Iryna</span>! I
          design and develop{" "}
          <span className="accented-words color-blue">websites.</span>
        </blockquote>
        <button className="btn-default">
          <a href="#contact"> Get in Touch </a>
        </button>
      </section>
    );
  }
}

export default Jumbotron;
