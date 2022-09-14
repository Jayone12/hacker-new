import { createGlobalStyle } from "styled-components";
import "./reset.css";

export const GlobalStyle = createGlobalStyle`
 a,button,input {
  all:unset;
  cursor:pointer;
 }
 body {
  color:${({ theme }) => theme.fontColor};
 }
 `;
