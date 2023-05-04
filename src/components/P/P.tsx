import { PProps } from "./P.props"
import cn from "classnames";
import styles from "./P.module.css";

export const P = ({ className, size, color, children, ...props }: PProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.l]: size == 'l',
                [styles.white]: color == 'white',
                [styles.gray]: color == 'gray',
            })}
            {...props}
        >
            {children}
        </p>
    )
}