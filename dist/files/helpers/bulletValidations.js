var minLength = function (text, length) { return text.length >= length; };
var maxLength = function (text, length) { return text.length <= length; };
var atLeastOneOfThisChars = function (text) { return /@|!|_|-|&|#|\$|%|\*|=/.test(text); };
var justLetters = function (text) { return /^[a-zA-zñ]*$/.test(text); };
/**
 * Validation for minimum characters in order to be valid
 * @param length - Min characters
 * @returns {BulletValidationI}
 */
export var bulletMinLegth = function (length) { return ({
    message: "At least ".concat(length, " characters"),
    validationFunction: function (text) { return minLength(text, length); },
    hideOnValid: false
}); };
/**
 * Validate that the password contains at least one of this characters:
 * @ , ! , _ , - , & , # , $ , % , * , =
 * @returns {BulletValidationI}
 */
export var bulletAtLeastOneOfThisChars = function () { return ({
    message: "At least one of this characters: @ , ! , _ , - , & , # , $ , % , * , =",
    validationFunction: function (text) { return atLeastOneOfThisChars(text); },
    hideOnValid: false
}); };
/**
 * Validate a max of characters for the password
 * @param length - Max characters allowed to type
 * @returns {BulletValidationI}
 */
export var bulletMaxLegth = function (length) { return ({
    message: "Max ".concat(length, " characters"),
    validationFunction: function (text) { return maxLength(text, length); },
    hideOnValid: false
}); };
/**
 * Validate the input contains just letters
 * @returns {BulletValidationI}
 */
export var bulletJustLetters = function () { return ({
    message: "Just letters",
    validationFunction: function (text) { return justLetters(text); },
    hideOnValid: false
}); };
