import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './SliderBox.module.css';
import SlideOne from './SlideOne';

function SliderBox() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.slickDots}>
      <Slider {...settings}>
        <div>
          <SlideOne />
        </div>
        <div>
          <SlideOne />
        </div>
        <div>
          <SlideOne />
        </div>
      </Slider>
    </div>
  );
}

export default SliderBox;
