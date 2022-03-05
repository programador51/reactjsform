import styled from "styled-components";
import Pass from ".";
import Icon from "../icons";

const border = "5px";
const borderLine = "0.125rem";

interface ShowPasswordPropsI {
    /**
     * Indicates if the input must show the button to reveal the password typed
     */
    showPassword: boolean;
}

export const Password = styled(Pass)`

    margin:0 0 1rem 0;
    display: inline-block;
    width: 100%;

    p{
        color:${({ theme }) => theme.primary_color};
        margin: 0 0 0.5rem 0;
    }

    label{
        display: block;
        color:${({ theme }) => theme.primary_color}
    }

    *{
        font-family:serif;

    }
`;

export const IsRequired = styled.span`
    color:${({ theme }) => theme.errorColor};
    margin:0 0 0 0.2rem;
`;

export const BulletValidation = styled(Icon)`
    margin: 0 5px 0 0;
`;

export const ShowPassword = styled.div<ShowPasswordPropsI>`
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    border-left:0;
    border-right:${borderLine};
    border-bottom:${borderLine};
    border-top:${borderLine};
    background-color:${({ theme }) => theme.input.bgColor};
    padding:0 10px;
    border-radius:0 ${border} ${border} 0;
    border-style:solid;
    border-color:${({ theme }) => theme.input.borderColor};
`;

export const PasswordField = styled.div<ShowPasswordPropsI>`
    display:flex;
    margin: 0 0 10px 0;

    input{
        border-radius:${({ showPassword }) => !showPassword ? border : `${border} 0 0 ${border}`};
        border:0.125rem solid ${({ theme }) => theme.input.borderColor};
        padding:0.5rem;
        background-color:${({ theme }) => theme.input.bgColor};  
        border-right:${({ showPassword }) => !showPassword ? "1" : "0"};      
        width:100%;
    }

    input:focus{
        outline:none;
    }
`;