import styled from "styled-components";
import Btn, { ButtonPropsI } from "./index";
import { themes } from "files/organisms/Form/styles";

export const Button = styled(Btn)`
    border:none;
    font-family:${({ variant = "default" }) => themes[variant].font_family};
    background-color:${({ variant = "default" }) => themes[variant].button.bgColor};
    border-radius:${({ variant = "default" }) => themes[variant].button.borderRadius};
    color:${({ variant = "default" }) => themes[variant].button.color};
    font-weight:${({ variant = "default" }) => themes[variant].button.fontWeight};
    cursor:pointer;
    padding:10px 20px;
    transition:background 0.25s ease-in-out;
    &:hover{
        transition:background 0.25s ease-in-out;
        background-color:${({ variant = "default" }) => themes[variant].button.hover.bgColor};
    }

    &:disabled{
        cursor:not-allowed;
        background-color:${({ variant = "default" }) => themes[variant].button.disabled.bgColor};
        color:${({ variant = "default" }) => themes[variant].button.disabled.color};
    }
`

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