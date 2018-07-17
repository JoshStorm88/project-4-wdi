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
            alt="Four Horsemen Development Platform" />C&A</h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="http://cdn.instantshift.com/wp-content/uploads/2012/04/facpwdfi-04.jpg"
            alt="Four Horsemen Development Platform" />M&S</h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://www.webdesign-inspiration.com/uploads/design/2017-12/bachoy-com-46054.jpg"
            alt="Four Horsemen Development Platform" />J&G</h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="http://www.onextrapixel.com/wp-content/uploads/2015/06/6-NewsTech.jpg"
            alt="Four Horsemen Development Platform" />M&N</h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://cdn.shopify.com/s/files/1/0533/2089/files/dark-ui-luxury.png?v=1521140794"
            alt="Four Horsemen Development Platform" />Network Code</h3>
        </div>
        <div>
          <h3><img className="sliderImage" src="https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/html5-portfolio-website-templates.jpg"
            alt="Four Horsemen Development Platform" />Mi6</h3>
        </div>
      </Slider>

    );
  }
}

export default SimpleSlider;
