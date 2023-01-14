import React from 'react';
import classes from './EachCategory.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartAdd, likeAdd } from '../store/CategorySlice';

function EachCategory(props) {
  const dispatch = useDispatch();
  const like = useSelector((state) => state.category.like);
  let liked = false;
  if (like.includes(props.id)) {
    liked = true;
  } else {
    liked = false;
  }
  return (
    <div className={classes.eachAll}>
      <div className={classes.imageAll}>
        <div className={classes.plantImageBox}>
          <img src={props.img} alt='plant' />
        </div>

        <div className={classes.icons}>
          <div>
            <ion-icon
              onClick={() => {
                dispatch(cartAdd(props));
              }}
              name='cart-outline'
            ></ion-icon>
          </div>

          {!liked && (
            <div
              className={classes.like}
              onClick={() => {
                dispatch(likeAdd(props.id));
              }}
            >
              <ion-icon name='heart-outline'></ion-icon>
            </div>
          )}
          {liked && (
            <div className={classes.like}>
              <ion-icon name='heart-circle-outline'></ion-icon>
            </div>
          )}

          <div>
            <ion-icon name='search-outline'></ion-icon>
          </div>
        </div>
      </div>
      <div>
        <p>{props.name}</p>
        <h4>{props.price}</h4>
      </div>
    </div>
  );
}

export default EachCategory;
