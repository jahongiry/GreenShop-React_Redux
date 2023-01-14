import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readLess } from '../store/CategorySlice';
import classes from './BlogPop.module.css';

function BlogPop(props) {
  const like = useSelector((state) => state.category.readMore);
  const dispatch = useDispatch();
  return (
    <div className={classes.popUp}>
      <div>
        <img src={like.img} alt={like.title} />
        <h4>{like.date}</h4>
      </div>
      <div className={classes.description}>
        <div className={classes.close} onClick={() => dispatch(readLess())}>
          <ion-icon name='close-outline'></ion-icon>
        </div>
        <h3>{like.title}</h3>
        <p>{like.description}</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default BlogPop;
