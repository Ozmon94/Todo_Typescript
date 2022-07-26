import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: rgb(6, 99, 141);
    font-family: 'montserrat', sans-serif;
    overflow-x: hidden;
    color:white;
    min-height: 100vh;
  }

  button {
    font-family: 'montserrat', sans-serif;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid #444;
    -webkit-text-fill-color: #444;
    box-shadow: 0 0 0px 1000px white inset;
    transition: background-color 5000s ease-in-out 0s;
    font-family: 'montserrat', sans-serif;
  }
`;

export default GlobalStyle;
