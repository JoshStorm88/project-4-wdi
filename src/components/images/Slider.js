import React from 'react';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="sliderDiv">
        <div>
          <h3><img className="sliderImage" src="https://richwp.com/wp-content/uploads/2013/07/handsome-portfolio-website.jpg"
            alt="Four Horsemen Development Platform" /></h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="http://cdn.instantshift.com/wp-content/uploads/2012/04/facpwdfi-04.jpg"
            alt="Four Horsemen Development Platform" /></h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://i.imgur.com/tV2rzLl.png"
            alt="Four Horsemen Development Platform" /></h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://i.imgur.com/tV2rzLl.png"
            alt="Four Horsemen Development Platform" /></h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://i.imgur.com/tV2rzLl.png"
            alt="Four Horsemen Development Platform" /></h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://i.imgur.com/tV2rzLl.png"
            alt="Four Horsemen Development Platform" /></h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
