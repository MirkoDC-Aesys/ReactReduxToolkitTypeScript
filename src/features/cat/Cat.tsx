import React from 'react'
import Button from '../../components/Button'
import styles from './Cat.module.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getCatSaga } from '../../features/cat/catSlice'

export default function Cat() {
    const dispatch = useAppDispatch()
    const cat = useAppSelector(state => state.cat.value)

    return (
        <section>
            <Button onClick={() => dispatch(getCatSaga())}>Cat</Button>
            <div>
                <img className={styles.cat} src={cat} alt="" />
            </div>
        </section>
    )
}