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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import usePassword from "./usePassword";
import Icon from "../icons";
import { ThemeProvider } from "styled-components";
import { themes } from "files/organisms/Form/styles";
import { Themes } from "files/organisms/Form";
import { IsRequired, BulletValidation, ShowPassword, PasswordField, } from "./styles";
export default function RInputPassword(_a) {
    var _b = _a.name, name = _b === void 0 ? "password" : _b, _c = _a.label, label = _c === void 0 ? "No label" : _c, _d = _a.showPasswordButton, showPasswordButton = _d === void 0 ? true : _d, _e = _a.className, className = _e === void 0 ? "" : _e, _f = _a.required, required = _f === void 0 ? {
        isRequired: false,
        message: "",
    } : _f, _g = _a.theme, theme = _g === void 0 ? "default" : _g, _h = _a.bulletValidations, bulletValidations = _h === void 0 ? null : _h, _j = _a.onChange, onChange = _j === void 0 ? function () { } : _j;
    var _k = usePassword({
        isRequired: required.isRequired,
        bulletValidations: bulletValidations,
        onChange: onChange,
    }), password = _k.password, handleOnChange = _k.handleOnChange, id = _k.id, toggleShowPassword = _k.toggleShowPassword, showPassword = _k.showPassword;
    return (_jsx(ThemeProvider, __assign({ theme: Themes[theme] }, { children: _jsxs("div", __assign({ className: className }, { children: [_jsxs("label", __assign({ htmlFor: id }, { children: [label, _jsx(IsRequired, { children: required.isRequired
                                ? password.isValidRequired
                                    ? null
                                    : required.message
                                : null }, void 0)] }), void 0), _jsxs(PasswordField, __assign({ showPassword: showPasswordButton }, { children: [_jsx("input", { id: id, type: "password", name: name, onChange: function (e) { return handleOnChange(e.target.value); } }, void 0), showPasswordButton ? (_jsx(ShowPassword, __assign({ showPassword: showPassword, onClick: toggleShowPassword }, { children: _jsx(Icon, { icon: showPassword ? "eyeSlash" : "eye" }, void 0) }), void 0)) : null] }), void 0), bulletValidations !== null
                    ? bulletValidations.map(function (validation) {
                        var isValid = validation.validationFunction(password.password);
                        return isValid ? (validation.hideOnValid ? null : (_jsxs("p", { children: [_jsx(BulletValidation, { icon: "checkCircle", color: themes[theme].successColor }, void 0), _jsx("span", { children: validation.message }, void 0)] }, void 0))) : (_jsxs("p", { children: [_jsx(BulletValidation, { icon: "timesCircle", color: themes[theme].errorColor }, void 0), _jsx("span", { children: validation.message }, void 0)] }, void 0));
                    })
                    : null] }), void 0) }), void 0));
}
