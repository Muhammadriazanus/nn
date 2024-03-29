import styled from "styled-components"

export const Button = styled.button`
    padding: 10px 18px;
    background: #000000;
    border-radius : 5px;
    color : white;
    min-width : 220px;
    border : none;
    cursor: pointer;
    font-size : 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color : black;
        transition: 0.4s background ease-in;
    }
`