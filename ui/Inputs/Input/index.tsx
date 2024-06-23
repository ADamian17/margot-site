import React from 'react'

import styles from './Input.module.scss'

const Input: React.FC<React.ComponentProps<"input">> = ({ className, ...rest }) => (
  <input className={`${styles.input} ${className}`} {...rest} />
)

export default Input
