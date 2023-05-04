import { InputProps } from "./Input.props";
import styles from "./Input.module.css";


export const Input = ({ className, ...props }: InputProps): JSX.Element => {
    return (
        <input placeholder="Enter value" {...props}></input>
    )
};