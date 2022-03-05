import styled from "styled-components";

export const DefaultPassword = styled.div`
    input{
        font-size:100px;
    }
    color:{(props)=>{props.primary_color}};
    font-family:Arial;
`