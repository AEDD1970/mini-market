import React from 'react'
import styles from './global.module.scss'

export default function Card({children, onClick}) {
  return (
    <div className={styles.card} onClick={onClick}>{children}</div>
  )
}
