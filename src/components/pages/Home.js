import React from 'react';
import SimpleSlider from '../images/Slider';
import Footer from '../common/Footer';

const Home = () => {
  return (

    <div className="hero-body">
      <div className="container">

        <h1 className="title homeTitle">
          Four Horsemen Development Platform
        </h1>
        <h2 className="subtitle homeSubtitle">

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
                <span className="am1 nl">Four Horsemen</span>
              </strong>
            </div>
            <div className="animateWordLast"></div>
          </div>
          <div>
            <hr />
            {/* <img className="HomeLogo" src="https://i.imgur.com/tV2rzLl.png"
              alt="Four Horsemen Development Platform" /> */}
            <SimpleSlider/>
            <hr />
            <p className="clickMe"> Click the left of right buttons to check out some of this weeks featured work.. </p>

          </div>
          <Footer />
        </h2>
      </div>
    </div>

  );
};

export default Home;
