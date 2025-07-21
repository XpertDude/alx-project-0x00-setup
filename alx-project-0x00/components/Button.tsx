import { ButtonProps } from "@/interfaces"

const Button:React.FC<ButtonProps>= ({title, styles}) => {
  return (
    <button className={styles}>Button</button>
  )
}

export default Button