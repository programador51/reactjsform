import React from "react";

export interface ButtonPropsI
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: JSX.Element | JSX.Element[] | string;
  variant?: "default";
}

export default function Button({
  variant = "default",
  children,
  ...props
}: ButtonPropsI) {
  return <button {...props}>{children}</button>;
}
