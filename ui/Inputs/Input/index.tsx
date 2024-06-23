import React from 'react'

import styles from './Input.module.scss'
import InputWrapper from '../InputWrapper'

type InputProps = {
  label: string;
} & React.ComponentProps<"input">

const Input: React.FC<InputProps> = ({ className, label, ...rest }) => (
  <InputWrapper label={label}>
    <input className={`${styles.input} ${className}`} {...rest} />
  </InputWrapper>
)

export default Input
