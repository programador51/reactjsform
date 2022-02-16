import { MutableRefObject, useRef, useState } from "react";
import { RInputPasswordAtLeastI } from ".";
import { v4 as uuidv4 } from "uuid";

export interface usePasswordI {
    /**
   * Min length of characters in order to be valid
   */
    min: {
        /**
         * Minimum characters to be valid
         */
        length: number;
        /**
         * "Message to display in case the validation its wrong"
         */
        message: string;
    };

    max: number | null;

    atLeast?: RInputPasswordAtLeastI[] | null;

    isRequired: boolean;
}

interface ErrorAtLeastI {

    /**
     * Regex expression
     */
    character: string;

    /**
     * Message to display on the bullet validation message
     */
    message: string;

    /**
     * Indicates if that regex expression (on particular) is valid
     * according the input value from the input password
     */
    isValid: boolean;
}

interface PasswordStateI {
    /**
     * UUID generated to use it as id attribute for the HTMLInputElement
     */
    id: MutableRefObject<string>;

    /**
     * A flag that indicates if the HTMLInputElement must show the password revealed
     */
    showPassword: boolean;

    /**
     * Indicates if the max characters to type are correct
     */
    isValidMax: boolean;

    /**
     * Indicates if the password input has some values
     */
    isValidRequired: boolean;

    /**
     * Indicates if the min characters to type are correct
     */
    isValidMin: boolean;

    atLeast: {

        errors: RInputPasswordAtLeastI[];

        /**
         * Indicates if ALL the regex validations were correct
         */
        isValid: boolean;
    }
}

export default function usePassword({
    min,
    max,
    atLeast,
    isRequired
}: usePasswordI) {

    const idNodeInput = useRef(uuidv4());
    const nodeInput = useRef<HTMLInputElement>(null)

    const [password, setPassowrd] = useState<PasswordStateI>({
        id: idNodeInput,
        showPassword: false,
        isValidMax: true,
        isValidRequired: isRequired === true ? false : true,
        isValidMin: false,
        atLeast: {
            errors: atLeast === null ? [] : atLeast!.map(element => ({ ...element, isValid: false })),
            isValid: atLeast === null ? true : false
        }
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
        const isValidMin = checkValidMin(passParam);
        const validationAtLeast = validateAtLeast(passParam);
        const isValidMax = checkValidMax(passParam)


        setPassowrd({
            ...password,
            isValidMin,
            isValidRequired: isRequired && passParam.length >= 1 ? true : false,
            atLeast: validationAtLeast,
            isValidMax
        });
    };

    /**
   * Check the "min" length password
   * @param password - Password to evaluate
   * @returns {boolean}
   */
    function checkValidMin(password: string) {
        //  Min of 0
        if (min.length <= 0) return true;

        // Against user input
        if (password.length < min.length) return false;

        return true;
    }

    function checkValidMax(password: string) {
        if (max === null) return true

        if (password.length > max) {
            return false
        }
        return true
    }

    function validateAtLeast(password: string) {

        if (atLeast === null) {
            return {
                errors: [],
                isValid: true
            }
        }

        if (password.length <= 0) {
            return {
                errors: atLeast,
                isValid: false
            }
        }

        let isValid = true;


        const regexValidated = atLeast!.reduce((acumulator: any, validation) => {

            let regexExpression = new RegExp(validation.character, 'gi');

            const isValidExpression = regexExpression.test(password);

            if (!isValidExpression) {
                isValid = false
                return {
                    errors: [{ ...validation, isValid: false }, ...acumulator.errors],
                    isValid: false
                }
            } else {
                return {
                    errors: [{ ...validation, isValid: true }, ...acumulator.errors],
                    isValid: false
                }
            }
        }, {
            errors: [],
            isValid: true
        })

        return {
            ...regexValidated,
            isValid
        }
    }

    return {
        password,
        handleOnChange,
        id: idNodeInput.current,
        toggleShowPassword,
        showPassword: password.showPassword,
        node: nodeInput
    }
}