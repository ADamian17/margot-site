import React from 'react'
import styles from './TextArea.module.scss'

const TextArea: React.FC<React.ComponentProps<"textarea">> = ({ className, ...rest }) => (
  <textarea className={`${styles.textArea} ${className}`} {...rest} />
)

export default TextArea