import React from 'react'
import styles from './TextArea.module.scss'
import InputWrapper from '../InputWrapper'

type TextAreaProps = {
  label: string;
} & React.ComponentProps<"textarea">

const TextArea: React.FC<TextAreaProps> = ({ className, label, ...rest }) => (
  <InputWrapper label={label}>
    <textarea className={`${styles.textArea} ${className}`} {...rest} />
  </InputWrapper>
)

export default TextArea