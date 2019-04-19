import React, { Component } from "react";
import "./Navbar.css";
import image from "./portfolio.jpg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <a href="#main" className="navbar-brand">
            <span>
              <img src={image} className="profile-image" alt="Profile" />
            </span>
            <span>
              Iryna
              <span>
                <strong>Hotsiy</strong>
              </span>
            </span>
          </a>
          <div className="navbar-burger align-right">
            <i
              onClick={this.toggleClass}
              className="nav-toggle fa fa-2x fa-bars"
            />
          </div>
          <ul className={this.state.isOpen ? "navbar-nav nav" : "navbar-nav"}>
            {this.props.pages.map(li => (
              <li key={li.id} className="nav-item" onClick={this.toggleClass}>
                <a href={li.href}>{li.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
