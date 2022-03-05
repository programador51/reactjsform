import RInputPassword from "files/atoms/password";
import { themes, ThemesI } from "./styles";

export const Themes = {
  default: themes.default,
};

export interface RInputFormProps {
  children: JSX.Element | JSX.Element[] | string;
  useFormProps?: object | null | any;
  theme?: keyof ThemesI;
  onSubmit?: any;
}

export function RInputForm() {
  return <p>Na</p>;
}

RInputForm.Password = RInputPassword;
