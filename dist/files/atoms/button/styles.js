var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import Btn from "./index";
import { themes } from "files/organisms/Form/styles";
export var Button = styled(Btn)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border:none;\n    font-family:", ";\n    background-color:", ";\n    border-radius:", ";\n    color:", ";\n    font-weight:", ";\n    cursor:pointer;\n    padding:10px 20px;\n    transition:background 0.25s ease-in-out;\n    &:hover{\n        transition:background 0.25s ease-in-out;\n        background-color:", ";\n    }\n\n    &:disabled{\n        cursor:not-allowed;\n        background-color:", ";\n        color:", ";\n    }\n"], ["\n    border:none;\n    font-family:", ";\n    background-color:", ";\n    border-radius:", ";\n    color:", ";\n    font-weight:", ";\n    cursor:pointer;\n    padding:10px 20px;\n    transition:background 0.25s ease-in-out;\n    &:hover{\n        transition:background 0.25s ease-in-out;\n        background-color:", ";\n    }\n\n    &:disabled{\n        cursor:not-allowed;\n        background-color:", ";\n        color:", ";\n    }\n"
    // export const Button = styled.button<ButtonPropsI>`
    //     border:none;
    //     font-family:${({ variant = "default" }) => themes[variant].font_family};
    //     background-color:${({ variant = "default" }) => themes[variant].button.bgColor};
    //     border-radius:${({ variant = "default" }) => themes[variant].button.borderRadius};
    //     color:${({ variant = "default" }) => themes[variant].button.color};
    //     font-weight:${({ variant = "default" }) => themes[variant].button.fontWeight};
    //     cursor:pointer;
    //     padding:10px 20px;
    //     transition:background 0.25s ease-in-out;
    //     &:hover{
    //         transition:background 0.25s ease-in-out;
    //         background-color:${({ variant = "default" }) => themes[variant].button.hover.bgColor};
    //     }
    //     &:disabled{
    //         cursor:not-allowed;
    //         background-color:${({ variant = "default" }) => themes[variant].button.disabled.bgColor};
    //         color:${({ variant = "default" }) => themes[variant].button.disabled.color};
    //     }
    // `])), function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return themes[variant].font_family;
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return themes[variant].button.bgColor;
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return themes[variant].button.borderRadius;
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return themes[variant].button.color;
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return themes[variant].button.fontWeight;
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return themes[variant].button.hover.bgColor;
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return themes[variant].button.disabled.bgColor;
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return themes[variant].button.disabled.color;
});
var templateObject_1;
// export const Button = styled.button<ButtonPropsI>`
//     border:none;
//     font-family:${({ variant = "default" }) => themes[variant].font_family};
//     background-color:${({ variant = "default" }) => themes[variant].button.bgColor};
//     border-radius:${({ variant = "default" }) => themes[variant].button.borderRadius};
//     color:${({ variant = "default" }) => themes[variant].button.color};
//     font-weight:${({ variant = "default" }) => themes[variant].button.fontWeight};
//     cursor:pointer;
//     padding:10px 20px;
//     transition:background 0.25s ease-in-out;
//     &:hover{
//         transition:background 0.25s ease-in-out;
//         background-color:${({ variant = "default" }) => themes[variant].button.hover.bgColor};
//     }
//     &:disabled{
//         cursor:not-allowed;
//         background-color:${({ variant = "default" }) => themes[variant].button.disabled.bgColor};
//         color:${({ variant = "default" }) => themes[variant].button.disabled.color};
//     }
// `
