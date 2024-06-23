import React from 'react'

import styles from './InputWrapper.module.scss'

type InputWrapperProps = {
  children: React.ReactNode;
  label: string;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ label, children }) => (
  <div className={styles.wrapper}>
    <label className={styles.inputLabel}>{label}</label>

    {children}
  </div>
)

export default InputWrapper
