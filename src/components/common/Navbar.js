import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  state = {
    navbarOpen: false
  }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <a to="/" className="navbar-item"
            href="/" />

          <Link to="/" className="navbar-item">
            <img src="https://i.imgur.com/M0fInVz.png"
              alt="Four Horsemen Development Platform" />
          </Link>

          <a role="button" className={`navbar-burger${this.state.navbarOpen ? ' is-active' : ''}`} aria-label="menu" aria-expanded="false"
            onClick={this.toggleNavbar}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>


        <div className={`navbar-menu${this.state.navbarOpen ? ' is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/login" className="navbar-item">Login</Link>
            <Link to="/register" className="navbar-item">Register</Link>
            <Link to="/projects/new" className="navbar-item">New Project</Link>
            <Link to="/developers/index" className="navbar-item">All Developers</Link>
            <Link to="/developers/new" className="navbar-item">Create Developer Profile</Link>
          </div>
        </div>
      </nav>
    );
  }
}


export default withRouter(Navbar);
