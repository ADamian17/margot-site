import React from 'react'

import styles from './Col.module.scss'

type ColProps = {
  children: React.ReactNode
  span?: number | Record<"sm" | "md" | "lg", number>
  className?: string
}

const Col: React.FC<ColProps> = ({ children, span, className }) => {
  const colStyles: Record<string, any> = {
    ["--col-span-amount-sm"]: typeof span === "number" && span >= 12 ? 12 : (span ?? 1),
    ["--col-span-amount-md"]: typeof span === "number" && span >= 12 ? 12 : (span ?? 1),
    ["--col-span-amount-lg"]: typeof span === "number" && span >= 12 ? 12 : (span ?? 1),
  }

  if (typeof span === "object") {
    colStyles["--col-span-amount-sm"] = span.sm >= 4 ? 4 : span.sm
    colStyles["--col-span-amount-md"] = span.md >= 8 ? 8 : span.md
    colStyles["--col-span-amount-lg"] = span.lg >= 12 ? 12 : span.lg
  }

  return (
    <div
      className={`${styles.col} ${className}`}
      style={colStyles}
    >
      {children}
    </div>
  )
}

export default Col
