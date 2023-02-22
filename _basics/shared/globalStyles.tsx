import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;

    :focus {
      outline: none;
    }
  }
`;

export default GlobalStyles;
