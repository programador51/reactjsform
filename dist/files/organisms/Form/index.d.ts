/// <reference types="react" />
import RInputPassword from "files/atoms/password";
import { ThemesI } from "./styles";
export declare const Themes: {
    default: import("./styles").ThemeI;
};
export interface RInputFormProps {
    children: JSX.Element | JSX.Element[] | string;
    useFormProps?: object | null | any;
    theme?: keyof ThemesI;
    onSubmit?: any;
}
export declare function RInputForm(): JSX.Element;
export declare namespace RInputForm {
    var Password: typeof RInputPassword;
}
