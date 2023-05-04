import { TextareaProps } from "./TextArea.props";
import styles from "./TextArea.module.css";


export const Textarea = ({ className, placeholder, ...props }: TextareaProps): JSX.Element => {
    return (
        <textarea placeholder={placeholder} {...props}></textarea>
    )
};