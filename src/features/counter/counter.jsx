import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSelector } from './counterSlice';
import {
  decrement,
  increment,
  incrementByAmount,
//   incrementAsync,
} from './counterSlice';
import styles from './counter.module.css';

export function Counter() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();
  const incrementAsync = amount => dispatch => {
    setTimeout(()=>{
      dispatch(incrementByAmount(amount))
    }, 1000);
  }
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())} //in the dispatch function we pass in the action creater
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
