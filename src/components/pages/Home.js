import React from 'react';

const Home = () => {
  return (
    <section className="hero is-primary is-large">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">

            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">
                  Home
                </a>
                <a className="navbar-item">
                  Login
                </a>
                <a className="navbar-item">
                  Register
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Home;
