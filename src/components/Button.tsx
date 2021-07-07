import React from 'react'
import styles from './Button.module.css'

interface Props {
    onClick: () => void
}

const Button: React.FC<Props> = ({ onClick, children }) => {
    return <button className={styles.btn} onClick={onClick}>{children}</button>
}

export default Button