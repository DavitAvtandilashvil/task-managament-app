import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  background: ${(props) => props.theme.body.bgColor};
}

html {
    font-size: 62.5%;
}
`;

export { GlobalStyles };
