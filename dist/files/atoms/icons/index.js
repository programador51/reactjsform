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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCheckCircle, faEye, faEyeSlash, } from "@fortawesome/free-solid-svg-icons";
// import { Icon } from "@fortawesome/fontawesome-svg-core";
var icons = {
    timesCircle: faTimesCircle,
    checkCircle: faCheckCircle,
    eye: faEye,
    eyeSlash: faEyeSlash,
};
export default function Icon(_a) {
    var icon = _a.icon, iconProps = __rest(_a, ["icon"]);
    return _jsx(FontAwesomeIcon, __assign({ icon: icons[icon] }, iconProps), void 0);
}
