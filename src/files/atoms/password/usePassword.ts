import { MutableRefObject, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BulletValidationI, onChangePaswordI } from ".";

export interface usePasswordI {
    isRequired: boolean;
    bulletValidations: null | BulletValidationI[];
    onChange: (object: onChangePaswordI) => void
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

export default function usePassword({
    isRequired,
    bulletValidations,
    onChange
}: usePasswordI) {

    const idNodeInput = useRef(uuidv4());
    const nodeInput = useRef<HTMLInputElement>(null)

    const [password, setPassowrd] = useState<PasswordStateI>({
        id: idNodeInput,
        showPassword: false,
        isValidRequired: isRequired === true ? false : true,
        password: "",
    });

    /**
     * Set the toggle button in order to display the password typed
     * @returns {void}
     */
    const toggleShowPassword = () => {

        const newToggle = !password.showPassword;

        const element = <HTMLInputElement>document.getElementById(idNodeInput.current);

        setPassowrd({
            ...password,
            showPassword: newToggle
        });

        newToggle === true ? element.type = "text" : element.type = "password"
    }

    /**
 * Evaluate the password input
 * @param password - Password typed by the user
 */
    const handleOnChange = (passParam: string) => {

        let noErrors = 0;

        if (bulletValidations !== null) {
            noErrors = bulletValidations.reduce((noErrors, bullet) => noErrors += bullet.validationFunction(passParam) === true ? 0 : 1, 0);
        }

        if (isRequired && passParam.length <= 0) noErrors += 1;

        setPassowrd({
            ...password,
            password: passParam,
            isValidRequired: isRequired && passParam.length >= 1 ? true : false,
        });

        onChange({
            noErrors,
            password: passParam
        })
    };

    return {
        password,
        handleOnChange,
        id: idNodeInput.current,
        toggleShowPassword,
        showPassword: password.showPassword,
        node: nodeInput
    }
}