import React from 'react';
import classes from './Pagination.module.css';
import { useDispatch } from 'react-redux';
import { paginationForward, paginationBackward } from '../store/CategorySlice';

function Pagination() {
  const dispatch = useDispatch();
  return (
    <div className={classes.pagination}>
      <button
        onClick={() => {
          dispatch(paginationBackward());
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          dispatch(paginationForward());
        }}
      >
        2
      </button>
      {/* <button>3</button>
      <button>4</button> */}
      <button>
        <ion-icon name='chevron-forward-outline'></ion-icon>
      </button>
    </div>
  );
}

export default Pagination;
