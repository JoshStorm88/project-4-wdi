import React from 'react';

const Home = () => {
  return (
    <section className="hero is-large is-tablet is-mobile">
      <div className="hero-body">
        <div className="container">
          <h1 className="homeTitle">
            Four Horsemen Development Platform
          </h1>
          <h2 className="homeSubtitle">
            No Design experience? Its not the end of the world.
            <div className="text-wrapper">We are&nbsp;
              <div className="animated-words">
                <strong>
                  <span className="am1 nl">Creators</span>
                  <span className="am1 nl">Innovators</span>
                  <span className="am1 nl">Mind Changers</span>
                  <span className="am1 nl">Dragon slayers</span>
                  <span className="am1 nl">Dream weavers</span>
                  <span className="am1 nl">Heart breakers</span>
                </strong>
              </div>
              <div className="animateWordLast"></div>
            </div>
            <div>
              <img className="HomeLogo" src="https://i.imgur.com/tV2rzLl.png"
                alt="Four Horsemen Development Platform" />
            </div>
          </h2>



        </div>
      </div>
    </section>
  );
};

export default Home;
