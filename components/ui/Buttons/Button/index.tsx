import styles from "./Button.module.scss"

type ButtonProps = {
  children: React.ReactNode
} & React.ComponentProps<"button">

const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => (
  <button className={`${styles.button} ${className}`} {...rest}>
    {children}
  </button>
)

export default Button
