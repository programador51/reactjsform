import { MutableRefObject } from "react";
import { BulletValidationI, onChangePaswordI } from ".";
export interface usePasswordI {
    isRequired: boolean;
    bulletValidations: null | BulletValidationI[];
    onChange: (object: onChangePaswordI) => void;
}
interface PasswordStateI {
    /**
     * UUID generated to use it as id attribute for the HTMLInputElement
     */
    id: MutableRefObject<string>;
    /**
     * Password that the user have typed on the input
     */
    password: string;
    /**
     * A flag that indicates if the HTMLInputElement must show the password revealed
     */
    showPassword: boolean;
    /**
     * Indicates if the password input has some values
     */
    isValidRequired: boolean;
}
export default function usePassword({ isRequired, bulletValidations, onChange }: usePasswordI): {
    password: PasswordStateI;
    handleOnChange: (passParam: string) => void;
    id: string;
    toggleShowPassword: () => void;
    showPassword: boolean;
    node: import("react").RefObject<HTMLInputElement>;
};
export {};
