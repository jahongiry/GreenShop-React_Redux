import React from 'react';
import round from '../img/round.png';
import potIcon from '../img/potIcon.png';
import logo from '../img/logo.png';
import classes from './Footer.module.css';
import faceBook from '../img/Facebook.png';
import linkedin from '../img/Linkedin.png';
import twitter from '../img/Twitter.png';
import payment from '../img/payment.png';

function Footer() {
  return (
    <div id='care' className={classes.footer}>
      <div className={classes.boxOne}>
        <img src={round} alt='round shape' />
        <img className={classes.potIcon} src={potIcon} alt='pot icon' />
        <h4>Garden Care</h4>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>

      <div className={classes.boxOne}>
        <img src={round} alt='round shape' />
        <img className={classes.potIcon} src={potIcon} alt='pot icon' />
        <h4>Garden Care</h4>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>

      <div className={classes.boxThree}>
        <img src={round} alt='round shape' />
        <img className={classes.potIcon} src={potIcon} alt='pot icon' />
        <h4>Garden Care</h4>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>

      <div className={classes.boxOne}>
        <h4>Would you like to join newsletters?</h4>
        <form className={classes.form}>
          <input type='text' placeholder='enter your address...' />
          <button>Join</button>
        </form>
        <p>
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
      <div className={classes.logoContainer}>
        <img src={logo} alt='logo' />
        <h2>LPGC greenshop</h2>
      </div>

      <div className={classes.locationContainer}>
        <div className={classes.locIcon}>
          <ion-icon name='location-outline'></ion-icon>
        </div>
        <p>
          70 West Buckingham Ave. <br /> Bankstown, NSW 2200
        </p>
      </div>

      <div className={classes.locationContainer}>
        <div className={classes.locIcon}>
          <ion-icon name='mail-outline'></ion-icon>
        </div>
        <p className={classes.email}>lpgc@greenshop.com</p>
      </div>

      <div className={classes.locationContainer}>
        <div className={classes.locIcon}>
          <ion-icon name='call-outline'></ion-icon>
        </div>
        <p className={classes.phone}>+91 01911 717 490</p>
      </div>

      <div className={classes.boxLast}>
        <h2>My Account</h2>
        <p>
          My Account <br /> Our stores <br /> Contact us <br /> Career <br />{' '}
          Specials
        </p>
      </div>
      <div className={classes.boxLast}>
        <h2>My Account</h2>
        <p>
          My Account <br /> Our stores <br /> Contact us <br /> Career <br />
          Specials
        </p>
      </div>
      <div className={classes.boxLast}>
        <h2>My Account</h2>
        <p>
          My Account <br /> Our stores <br /> Contact us <br /> Career
          <br /> Specials
        </p>
      </div>

      <div className={classes.boxLast}>
        <h2>Social Media</h2>
        <div className={classes.social}>
          <button>
            <img src={faceBook} alt='facebook logo' />
          </button>
          <button>
            <img src={linkedin} alt='facebook logo' />
          </button>
          <button>
            <img src={twitter} alt='facebook logo' />
          </button>
          <button>
            <img src={faceBook} alt='facebook logo' />
          </button>
        </div>
        <h2>We Accept</h2>
        <img src={payment} alt='payment icons' />
      </div>
    </div>
  );
}

export default Footer;
