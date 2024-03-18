import { ChangeEventHandler } from "react";

export type InputProps = {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string | null;
  onBlur?: () => void;
};
