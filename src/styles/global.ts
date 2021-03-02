import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        background: ${props => props.theme.colors.background};
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
        font: 400 16px Montserrat, sans-serif;
    }

`
