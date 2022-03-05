import { BulletValidationI } from "../atoms/password/index";
/**
 * Validation for minimum characters in order to be valid
 * @param length - Min characters
 * @returns {BulletValidationI}
 */
export declare const bulletMinLegth: (length: number) => BulletValidationI;
/**
 * Validate that the password contains at least one of this characters:
 * @ , ! , _ , - , & , # , $ , % , * , =
 * @returns {BulletValidationI}
 */
export declare const bulletAtLeastOneOfThisChars: () => BulletValidationI;
/**
 * Validate a max of characters for the password
 * @param length - Max characters allowed to type
 * @returns {BulletValidationI}
 */
export declare const bulletMaxLegth: (length: number) => BulletValidationI;
/**
 * Validate the input contains just letters
 * @returns {BulletValidationI}
 */
export declare const bulletJustLetters: () => BulletValidationI;
