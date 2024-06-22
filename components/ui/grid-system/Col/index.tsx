import React from 'react'

import styles from './Col.module.scss'

type ColProps = {
  children: React.ReactNode
  span: number
}

const Col = ({ children, span }: ColProps) => {
  const colStyles: React.CSSProperties = {
    ["--col-span-amount" as string]: span >= 12 ? 12 : span,
  }

  return (
    <div
      className={styles.col}
      style={colStyles}
    >
      {children}
    </div>
  )
}

export default Col
