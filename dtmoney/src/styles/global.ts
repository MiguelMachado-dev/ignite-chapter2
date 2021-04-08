import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%; // 1rem = 10px
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
