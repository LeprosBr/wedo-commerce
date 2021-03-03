import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {

        width: 100%;
        height: 100%;
        max-width: 100vw;
        max-height: 100vh;
        font: 400 16px Montserrat, sans-serif;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.background};


    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.link};
        font-size: ${props => props.theme.sizes.xxsmall};
    }

`
