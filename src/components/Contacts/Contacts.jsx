import React, { Component } from "react";
import "./Contacts.css";

class Contacts extends Component {
 
  render() {
    return (
      <>
        <section id="contact">
          <div className="end">
            <h1>
              <span className="color-blue">Iryna </span>
              <span className="color-green">
                <strong>Hotsiy</strong>
              </span>
            </h1>
            <p>
              Web developer, designer, tech writer and problem solver. I love
              <br />
              hiking, recording music, and building communities.
            </p>
            <div>
              {this.props.social.map(el => (
                <a key={el.id} href={el.href} target="_blank" rel="noopener noreferrer">
                  <i className={el.class} />
                </a>
              ))}
            </div>
            </div>
          </section>
      </>
    );
  }
}

export default Contacts;
