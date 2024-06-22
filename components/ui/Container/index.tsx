import React from 'react';

import styles from "./Container.module.scss";

type ContainerType = {
  children: React.ReactNode;
  className?: string;
  isCentered?: boolean;
  isFullWidth?: boolean;
} & React.DetailedHTMLProps<
  React.AllHTMLAttributes<HTMLElement>,
  HTMLElement
>

type ContentType = {
  className?: string;
  children: React.ReactNode;
  noGap?: boolean;
} & React.DetailedHTMLProps<
  React.AllHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const Container = ({
  children,
  className,
  isCentered,
  isFullWidth,
  ...rest
}: ContainerType) => (
  <section className={`${styles.container} ${isCentered && styles.isCentered} ${isFullWidth && styles.isFullWidth} ${className}`} {...rest}>
    {children}
  </section>
)

const FullWidth: React.FC<ContentType> = ({ className, children, noGap, ...rest }) => (
  <div className={`${styles.fullWidth} ${noGap && styles.noGap} ${className}`} {...rest}>
    {children}
  </div>
)

const Centered: React.FC<ContentType> = ({ className, children, noGap, ...rest }) => (
  <div className={`${styles.centered} ${noGap && styles.noGap} ${className}`} {...rest}>
    {children}
  </div>
)

Container.FullWidth = FullWidth
Container.Centered = Centered

export default Container;
