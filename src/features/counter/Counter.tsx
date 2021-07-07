import React from 'react'
import styles from './Counter.module.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { incremented, decremented } from './counterSlice'
import Button from '../../components/Button'

export default function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <section>
      <h2 className={styles.title}>Counter</h2>
      <div>
        <Button onClick={() => dispatch(decremented())}>-</Button>
        <span className={styles.count}>{count}</span>
        <Button onClick={() => dispatch(incremented())}>+</Button>
      </div>
    </section>
  )
}
