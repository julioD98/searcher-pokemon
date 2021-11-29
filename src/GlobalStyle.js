import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto/900.css";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        font-family: Arial;
        background: #2f3640;
        color: #ffffff;
        font-family: "Roboto";
    }
    input{
        outline: none;
    }
`;