var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import Pass from ".";
import Icon from "../icons";
var border = "5px";
var borderLine = "0.125rem";
export var Password = styled(Pass)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    margin:0 0 1rem 0;\n    display: inline-block;\n    width: 100%;\n\n    p{\n        color:", ";\n        margin: 0 0 0.5rem 0;\n    }\n\n    label{\n        display: block;\n        color:", "\n    }\n\n    *{\n        font-family:serif;\n\n    }\n"], ["\n\n    margin:0 0 1rem 0;\n    display: inline-block;\n    width: 100%;\n\n    p{\n        color:", ";\n        margin: 0 0 0.5rem 0;\n    }\n\n    label{\n        display: block;\n        color:", "\n    }\n\n    *{\n        font-family:serif;\n\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary_color;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary_color;
});
export var IsRequired = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color:", ";\n    margin:0 0 0 0.2rem;\n"], ["\n    color:", ";\n    margin:0 0 0 0.2rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.errorColor;
});
export var BulletValidation = styled(Icon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin: 0 5px 0 0;\n"], ["\n    margin: 0 5px 0 0;\n"])));
export var ShowPassword = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    cursor:pointer;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    border-left:0;\n    border-right:", ";\n    border-bottom:", ";\n    border-top:", ";\n    background-color:", ";\n    padding:0 10px;\n    border-radius:0 ", " ", " 0;\n    border-style:solid;\n    border-color:", ";\n"], ["\n    cursor:pointer;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    border-left:0;\n    border-right:", ";\n    border-bottom:", ";\n    border-top:", ";\n    background-color:", ";\n    padding:0 10px;\n    border-radius:0 ", " ", " 0;\n    border-style:solid;\n    border-color:", ";\n"])), borderLine, borderLine, borderLine, function (_a) {
    var theme = _a.theme;
    return theme.input.bgColor;
}, border, border, function (_a) {
    var theme = _a.theme;
    return theme.input.borderColor;
});
export var PasswordField = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display:flex;\n    margin: 0 0 10px 0;\n\n    input{\n        border-radius:", ";\n        border:0.125rem solid ", ";\n        padding:0.5rem;\n        background-color:", ";  \n        border-right:", ";      \n        width:100%;\n    }\n\n    input:focus{\n        outline:none;\n    }\n"], ["\n    display:flex;\n    margin: 0 0 10px 0;\n\n    input{\n        border-radius:", ";\n        border:0.125rem solid ", ";\n        padding:0.5rem;\n        background-color:", ";  \n        border-right:", ";      \n        width:100%;\n    }\n\n    input:focus{\n        outline:none;\n    }\n"])), function (_a) {
    var showPassword = _a.showPassword;
    return !showPassword ? border : "".concat(border, " 0 0 ").concat(border);
}, function (_a) {
    var theme = _a.theme;
    return theme.input.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.input.bgColor;
}, function (_a) {
    var showPassword = _a.showPassword;
    return !showPassword ? "1" : "0";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
