import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <div className="header">
              <div className="menu-circle"></div>
              <div className="header-menu">
                  <a className="menu-link is-active" href="#">
                        <span className="menu-text">Jefferson</span>
                  </a>
                  <a className="menu-link notify" href="#">
                        <span className="menu-text">Coding Work</span>
                  </a>
                  <a className="menu-link is-active" href="#">
                        <span className="menu-text">Connect</span>
                  </a>
                  <a className="menu-link notify" href="#">
                        <span className="menu-text">GitHub Hub</span>
                  </a>
              </div>
          </div>
      </div>
    );
  }
}

export default Navbar;
