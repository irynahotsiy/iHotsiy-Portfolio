import React, { Component } from "react";
import "./Jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <section className="jumbotron" id="main">
        <header>
          <h1>
            <span className="color-blue">Trainee</span>
            <span>Front-End / Full-Stack </span>
            <span className="color-green">Developer</span>
          </h1>
        </header>
        <blockquote>
          Hi, I'm <span className="accented-words color-blue">Iryna</span>!
          <br />
          I'd like to get a{" "}
          <span className="accented-words color-blue">web developer</span>{" "}
          position with an IT company <br />
          to use my skills in developing and maintaining functional{" "}
          <span className="accented-words color-blue">websites </span>
          <br />
          and learn new technology as well.
        </blockquote>
        <button className="btn-default">
          <a href="#contact"> Get in Touch </a>
        </button>
      </section>
    );
  }
}

export default Jumbotron;
