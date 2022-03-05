import React from "react";
export interface ButtonPropsI extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: JSX.Element | JSX.Element[] | string;
    variant?: "default";
}
export default function Button({ variant, children, ...props }: ButtonPropsI): JSX.Element;
