import React from 'react';
import logo from '../img/logo.png';
import search from '../img/search.png';
import cart from '../img/cart.png';
import line from '../img/line.png';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <div className={classes.navigationAll}>
        <div className={classes.logoBox}>
          <img src={logo} alt='green logo' />
          <h3>GREENSHOP</h3>
        </div>
        <div className={classes.menuBox}>
          <div className={classes.menuBoxIn}>
            <h3>Home</h3>
          </div>
          <div className={classes.menuBoxIn}>
            <h3>Shop</h3>
          </div>
          <div className={classes.menuBoxIn}>
            <h3>Plant Care</h3>
          </div>
          <div className={classes.menuBoxIn}>
            <h3>Blogs</h3>
          </div>
        </div>
        <div className={classes.serachBox}>
          <img src={search} alt='search icon' />
          <img src={cart} alt='cart icon' />
          <button>
            <div className={classes.iconEnter}>
              <ion-icon name='enter-outline'></ion-icon>
            </div>
            <p>Login</p>
          </button>
        </div>
      </div>
      <img className={classes.line} src={line} />
    </div>
  );
};

export default Navigation;
