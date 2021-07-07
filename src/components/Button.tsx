import React from 'react'
import styles from './Button.module.css'

interface Props {
    onClick: () => {}
}

const Button = (props: Props) => {
    return <button className={styles.btn} onClick={props.onClick}>+</button>
}

export default Button