import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    appearance: 'primary' | 'violet';
}