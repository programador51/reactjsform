/// <reference types="react" />
import { ThemesI } from "files/organisms/Form/styles";
export interface onChangePaswordI {
    /**
     * Number of errors in case the required and bulletValidations was passed on the component
     */
    noErrors: number;
    /**
     * Value of the input password typed
     */
    password: string;
}
export interface BulletValidationI {
    /**
     * If the function you pass as argument returns true, it means that the password
     * typed by the user is correct, otherwise has an error
     */
    validationFunction: (passwordText: string) => boolean;
    /**
     * Message to display on the bullet
     */
    message: string;
    /**
     * If true, when the password is correct, the bullet will disappear
     */
    hideOnValid?: boolean;
}
export interface RequiredI {
    /**
     * Indicates if the password is required
     */
    isRequired: boolean;
    /**
     * Message to display in case the password haven't been supplied
     */
    message: string;
}
export interface RInputPasswordProps {
    /**
     * Name attribute of the input
     */
    name?: string;
    theme: keyof ThemesI;
    /**
     * True if a button to show the password typed must me
     */
    showPasswordButton?: boolean;
    /**
     * Class name of the div conainer. Can use styled components
     */
    className?: string;
    /**
     * Label to show
     */
    label: string;
    required?: {
        isRequired: boolean;
        message: string;
    };
    /**
     * Information in order to render bullet validations for the password
     */
    bulletValidations?: BulletValidationI[] | null;
    /**
     * Information of the password when the user types something
     */
    onChange: (object: onChangePaswordI) => void;
}
export default function RInputPassword({ name, label, showPasswordButton, className, required, theme, bulletValidations, onChange, }: RInputPasswordProps): JSX.Element;
