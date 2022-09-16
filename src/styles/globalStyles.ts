import { createGlobalStyle } from "styled-components";
import "./reset.css";

export const GlobalStyle = createGlobalStyle`
 a,button,input {
  all:unset;
  cursor:pointer;
 }
 body {
  color:${({ theme }) => theme.fontColor};
  font-family: 'Roboto', sans-serif;
  #root {
    width: 390px;
   margin:0 auto;
   background-color: ${({ theme }) => theme.bgColor};
  }
 }
 `;
