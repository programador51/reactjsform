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
import { jsx as _jsx } from "react/jsx-runtime";
import RInputPassword from "files/atoms/password";
import { useForm, FormProvider } from "react-hook-form";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles";
export var Themes = {
    default: themes.default,
};
export function RInputForm(_a) {
    var children = _a.children, _b = _a.useFormProps, useFormProps = _b === void 0 ? null : _b, _c = _a.theme, theme = _c === void 0 ? "default" : _c, _d = _a.onSubmit, onSubmit = _d === void 0 ? null : _d;
    var methods = useForm(useFormProps);
    return (_jsx(ThemeProvider, __assign({ theme: Themes[theme] }, { children: _jsx(FormProvider, __assign({}, methods, { children: _jsx("form", __assign({ noValidate: true, onSubmit: methods.handleSubmit(function (data) { return onSubmit(data); }, function (errors, event) { return onSubmit(errors, event); }) }, { children: children }), void 0) }), void 0) }), void 0));
}
RInputForm.Password = RInputPassword;
