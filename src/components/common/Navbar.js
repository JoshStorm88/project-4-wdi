import React from 'react';
import { a } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <a to="/" className="navbar-item"
            href="#">
            <img src="https://i.imgur.com/M0fInVz.png"
              alt="Bulma: a modern CSS framework based on Flexbox" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Login</a>
            <a className="navbar-item">Register</a>
            <a className="navbar-item">New project</a>

          </div>
        </div>

      </nav>
    );
  }
}


export default Navbar;
