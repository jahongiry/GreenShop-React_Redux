import React from 'react';
import classes from './Card.module.css';
import card1 from '../img/card1.png';
import card2 from '../img/card2.png';

function Card() {
  return (
    <div className={classes.cardBox}>
      <div className={classes.boxOne}>
        <img src={card1} alt='card plant' />{' '}
        <div className={classes.cardText}>
          <h3>
            SUMMER CACTUS
            <br /> & SUCCULENT
          </h3>
          <p>
            We are online plant shop offering a wide <br />
            range of cheap and trendy platns.
          </p>
          <button>
            <a href='https://en.wikipedia.org/wiki/Cactus' target='_blank' rel="noreferrer">
              FIND MORE <ion-icon name='arrow-forward-outline'></ion-icon>
            </a>
          </button>
        </div>
      </div>
      <div className={classes.boxOne}>
        <img src={card2} alt='card plant' />
        <div className={classes.cardText}>
          <h3>
            SUMMER CACTUS
            <br /> & SUCCULENT
          </h3>
          <p>
            We are online plant shop offering a wide <br />
            range of cheap and trendy platns.
          </p>
          <button>
            <a href='https://en.wikipedia.org/wiki/Cactus' target='_blank' rel="noreferrer">
              FIND MORE <ion-icon name='arrow-forward-outline'></ion-icon>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
