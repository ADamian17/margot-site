import React from 'react'

import styles from './Grid.module.scss'
import Col from '../Col'

type GridProps = {
  children: React.ReactNode
}

const Grid = ({ children }: GridProps) => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  )
}

Grid.Col = Col

export default Grid
