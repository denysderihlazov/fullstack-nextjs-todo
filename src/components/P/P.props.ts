import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm' | 'l';
    color?: 'white' | 'gray';
    children: ReactNode;
}