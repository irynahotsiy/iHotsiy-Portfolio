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
            I'm looking forward to your prompt reply.<br/>
            You can find me on:
            </p>
            <div>
              {this.props.social.map(el => (
                <a key={el.id} href={el.href} target="_blank" rel="noopener noreferrer">
                  <i className={el.class} />
                </a>
              ))}
            </div>
            <p>or send message on e-mail:<br/> <strong>iryna.hotsiy@gmail.com</strong></p>
            </div>
          </section>
      </>
    );
  }
}

export default Contacts;
