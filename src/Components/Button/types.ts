import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children?: string | number;
  as?: React.ElementType;
} & ButtonType;
