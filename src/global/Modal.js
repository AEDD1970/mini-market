import React, { useRef } from 'react'
import styles from "./global.module.scss"

export default function Modal({open, children, onClosed}) {
  return (
    <div className={open ?  styles.modalShow : styles.modalDesable}>
    <div   className={styles.content}>
      <span  className={styles.close} onClick={onClosed}>&times;</span>
      {children}
    </div>
  
  </div>
  )
}
