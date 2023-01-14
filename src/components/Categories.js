import React from 'react';
import classes from './Categories.module.css';
import image1 from '../img/1.png';
import image2 from '../img/2.png';
import image3 from '../img/3.png';
import image5 from '../img/5.png';
import image6 from '../img/6.png';
import image7 from '../img/7.png';
import image8 from '../img/8.png';
import image9 from '../img/9.png';
import linefilter from '../img/linefilter.png';
import dot from '../img/dot.png';
import linefilter2 from '../img/linefilter2.png';
import background from '../img/background.png';
import sidePlant from '../img/sideP.png';
import sale from '../img/sale.png';
import off from '../img/off.png';
import EachCategory from './EachCategory';
import apiCategories from '../DataCategory.json';
import { useSelector } from 'react-redux';

function Categories() {
  const pagination = useSelector((state) => state.category.pagination);
  const fakeApi = [
    { id: 1, img: image1, name: 'Barberton Daisy', price: '$169.00' },
    { id: 2, img: image2, name: 'Angel Wing Begonia', price: '$169.00' },
    { id: 3, img: image3, name: 'African Violet', price: '$169.00' },
    { id: 4, img: image3, name: 'African Violet', price: '$169.00' },
    { id: 5, img: image5, name: 'Blushing Bromeliad', price: '$169.00' },
    { id: 6, img: image6, name: 'Aluminum Plant', price: '$169.00' },
    { id: 7, img: image7, name: 'Birds Nest Fern', price: '$169.00' },
    { id: 8, img: image8, name: 'Broadleaf Lady Palm', price: '$169.00' },
    { id: 9, img: image9, name: 'Chinese Evergreen', price: '$169.00' },
    { id: 17, img: image8, name: 'Broadleaf Lady Palm', price: '$169.00' },
    { id: 12, img: image3, name: 'African Violet', price: '$169.00' },
    { id: 18, img: image9, name: 'test', price: '$169.00' },
    { id: 13, img: image3, name: 'African Violet', price: '$169.00' },
    { id: 16, img: image7, name: 'Birds Nest Fern', price: '$169.00' },
    { id: 15, img: image6, name: 'Aluminum Plant', price: '$169.00' },
    { id: 11, img: image2, name: 'Angel Wing Begonia', price: '$169.00' },
    { id: 14, img: image5, name: 'Blushing Bromeliad', price: '$169.00' },
    { id: 10, img: image1, name: 'Barberton Daisy', price: '$169.00' },
  ];
  fakeApi.splice(pagination, 9);
  return (
    <div id='shop' className={classes.CategoryBox}>
      <div className={classes.sideBar}>
        <h3>Categories</h3>
        {apiCategories.map((items) => (
          <div className={classes.nameCategory} key={items.id}>
            <p>
              {items.name} <span>{items.number}</span>
            </p>
          </div>
        ))}
        <h4>Price Range</h4>
        <div>
          <img className={classes.dot} src={dot} alt='dot' />
          <img
            className={classes.faded1}
            src={linefilter}
            alt='line for filter'
          />
          <img src={dot} alt='dot' />
          <img
            className={classes.faded}
            src={linefilter2}
            alt='line for filter'
          />
        </div>
        <p className={classes.priceRange}>
          Price: <span>$39 - $1230</span>
        </p>
        <button>Filter</button>
        <h4>Size</h4>
        <div className={classes.sizes}>
          <p>
            Small <span>(119)</span>
          </p>
          <p>
            Medium <span>(86)</span>
          </p>
          <p>
            Large <span>(78)</span>
          </p>
        </div>
        <div className={classes.sideImages}>
          <img
            className={classes.sideImage1}
            src={background}
            alt='background'
          />
          <img className={classes.sideImage2} src={sale} alt='sale word' />
          <img className={classes.sideImage3} src={off} alt='off sign' />
          <img
            className={classes.sideImage4}
            src={sidePlant}
            alt='plan on side'
          />
        </div>
      </div>
      <div className={classes.CategorySmallBoxes}>
        <div className={classes.CategoryNames}>
          <p>All Plants</p>
          <p>New Arrivals</p>
          <p>Sale</p>
        </div>
        <div></div>
        <div className={classes.CategorySort}>
          <p>
            Sort by: Default sorting{' '}
            <ion-icon name='chevron-down-outline'></ion-icon>
          </p>
        </div>
        {fakeApi.map((items) => (
          <EachCategory
            key={items.id}
            img={items.img}
            name={items.name}
            price={items.price}
            id={items.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
