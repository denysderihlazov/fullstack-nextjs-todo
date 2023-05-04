import { InputProps } from "./Input.props";
import styles from "./Input.module.css";


export const Input = ({ className, placeholder, ...props }: InputProps): JSX.Element => {
    return (
        <input placeholder={placeholder} {...props}></input>
    )
};