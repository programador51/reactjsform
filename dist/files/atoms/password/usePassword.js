var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function usePassword(_a) {
    var isRequired = _a.isRequired, bulletValidations = _a.bulletValidations, onChange = _a.onChange;
    var idNodeInput = useRef(uuidv4());
    var nodeInput = useRef(null);
    var _b = useState({
        id: idNodeInput,
        showPassword: false,
        isValidRequired: isRequired === true ? false : true,
        password: "",
    }), password = _b[0], setPassowrd = _b[1];
    /**
     * Set the toggle button in order to display the password typed
     * @returns {void}
     */
    var toggleShowPassword = function () {
        var newToggle = !password.showPassword;
        var element = document.getElementById(idNodeInput.current);
        setPassowrd(__assign(__assign({}, password), { showPassword: newToggle }));
        newToggle === true ? element.type = "text" : element.type = "password";
    };
    /**
 * Evaluate the password input
 * @param password - Password typed by the user
 */
    var handleOnChange = function (passParam) {
        var noErrors = 0;
        if (bulletValidations !== null) {
            noErrors = bulletValidations.reduce(function (noErrors, bullet) { return noErrors += bullet.validationFunction(passParam) === true ? 0 : 1; }, 0);
        }
        if (isRequired && passParam.length <= 0)
            noErrors += 1;
        setPassowrd(__assign(__assign({}, password), { password: passParam, isValidRequired: isRequired && passParam.length >= 1 ? true : false }));
        onChange({
            noErrors: noErrors,
            password: passParam
        });
    };
    return {
        password: password,
        handleOnChange: handleOnChange,
        id: idNodeInput.current,
        toggleShowPassword: toggleShowPassword,
        showPassword: password.showPassword,
        node: nodeInput
    };
}
