import React from 'react';
import classes from './SlideOne.module.css';
import lets from '../img/lets.png';
import plantBig from '../img/plantBig.png';
import plantSmall from '../img/plantSmall.png';

function SlideOne() {
  return (
    <div id='home' className={classes.SlideOneBox}>
      <div className={classes.boxOne}>
        <h6>WELCOME TO “Lovely Plants and Garden Centre (LPGC)</h6>
        <img src={lets} alt='motivational sentences' />
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use <br /> our plants to create an unique Urban Jungle. Order
          your favorite plants!
        </p>
        <button>SHOP NOW</button>
      </div>
      <div className={classes.boxTwo}>
        <img className={classes.imgOne} src={plantSmall} alt='small plants' />
        <img className={classes.imgTwo} src={plantBig} alt='big plants' />
      </div>
    </div>
  );
}

export default SlideOne;
