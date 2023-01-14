import React from 'react';
import classes from './Blog.module.css';
import blog1 from '../img/blog1.png';
import blog2 from '../img/blog2.png';
import blog3 from '../img/blog3.png';
import blog4 from '../img/blog4.png';
import { readMore } from '../store/CategorySlice';
import { useDispatch } from 'react-redux';

function Blog() {
  const dispatch = useDispatch();
  const blogApi = [
    {
      img: blog1,
      date: 'September 12 | Read in 6 minutes',
      title: 'Cactus & Succulen',
      location: 'Care Tips',
      description:
        'Cacti are succulents are easy care plants for any home or patio',
    },
    {
      img: blog2,
      date: 'September 12 | Read in 6 minutes',
      title: 'Top 10 Succulents for',
      location: 'Your Home',
      description:
        'Cacti are succulents are easy care plants for any home or patio',
    },
    {
      img: blog3,
      date: 'September 12 | Read in 6 minutes',
      title: 'Cactus & Succulent',
      location: 'Care Tips',
      description:
        'Cacti are succulents are easy care plants for any home or patio',
    },
    {
      img: blog4,
      date: 'September 12 | Read in 6 minutes',
      title: 'Cactus & Succulent',
      location: 'Care Tips',
      description:
        'Cacti are succulents are easy care plants for any home or patio',
    },
  ];
  return (
    <div id='blog'>
      <div className={classes.blogBox}>
        <h2>Our Blog Posts</h2>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className={classes.eachBlog}>
        {blogApi.map((items) => (
          <div key={items.img}>
            <img src={items.img} alt='green' />
            <div className={classes.blogText}>
              <p>{items.date}</p>
              <h4>{items.title}</h4>
              <h4>{items.location}</h4>
              <h6>{items.description}</h6>
              <button
                onClick={() => {
                  dispatch(readMore(items));
                }}
              >
                Read more
                <div className={classes.icon}>
                  <ion-icon name='arrow-forward-outline'></ion-icon>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
