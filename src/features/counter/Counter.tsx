import React from 'react'
import styles from './Counter.module.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { incremented, decremented } from './counterSlice'

export default function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <section>
      <h2 className={styles.title}>Counter</h2>
      <div>
        <button onClick={() => dispatch(decremented())}>-</button>
        <span className={styles.count}>{count}</span>
        <button onClick={() => dispatch(incremented())}>+</button>
      </div>
    </section>
  )
}
