import { BulletValidationI } from "../atoms/password/index";
const minLength = (text: string, length: number) => text.length >= length;
const maxLength = (text: string, length: number) => text.length <= length;
const atLeastOneOfThisChars = (text: string) => /@|!|_|-|&|#|\$|%|\*|=/.test(text);
const justLetters = (text: string) => /^[a-zA-zñ]*$/.test(text);


/**
 * Validation for minimum characters in order to be valid
 * @param length - Min characters
 * @returns {BulletValidationI}
 */
export const bulletMinLegth = (length: number): BulletValidationI => ({
    message: `At least ${length} characters`,
    validationFunction: (text: string) => minLength(text, length),
    hideOnValid: false
});

/**
 * Validate that the password contains at least one of this characters:
 * @ , ! , _ , - , & , # , $ , % , * , =
 * @returns {BulletValidationI}
 */
export const bulletAtLeastOneOfThisChars = (): BulletValidationI => ({
    message: `At least one of this characters: @ , ! , _ , - , & , # , $ , % , * , =`,
    validationFunction: (text: string) => atLeastOneOfThisChars(text),
    hideOnValid: false
});

/**
 * Validate a max of characters for the password
 * @param length - Max characters allowed to type
 * @returns {BulletValidationI}
 */
export const bulletMaxLegth = (length: number): BulletValidationI => ({
    message: `Max ${length} characters`,
    validationFunction: (text: string) => maxLength(text, length),
    hideOnValid: false
});

/**
 * Validate the input contains just letters
 * @returns {BulletValidationI}
 */
export const bulletJustLetters = (): BulletValidationI => ({
    message: `Just letters`,
    validationFunction: (text: string) => justLetters(text),
    hideOnValid: false
});