import styled from 'styled-components'

export const Nav = styled.nav`
    height: 100px;
    font-size: ${props => props.theme.sizes.small};
    background-color: ${props => props.theme.colors.primary};
`

export const Aside = styled.nav`
    height: 40px;
    display: flex;
    text-align: center;
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    max-width: ${props => props.theme.breakpoints.medium};

    > img {
        width: 200px;
    }

    > form {
        width: 45vw;
        margin: 0 20px 0 40px;
    }
`

export const Container = styled.form`
    align-items: center;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    padding: 2px 6px;
    border: 1px solid;
    flex-grow: 2;

    > input {
        width: 100%;
        max-width: 100%;
        padding: 2px 6px;
        margin-left: 4px;
        border: 0;
        text-align: inherit;
        background-color: transparent;
        font-size: ${props => props.theme.sizes.small};
    }

    > button {
        border: 0;
        padding: 5px;
        width: 45px;
        border-left: 1px solid rgb(48 48 48);
        background-color: hsl(0deg 0% 100% / 8%);
        border-radius: 0 2px 2px 0;
        margin: 0;
    }
`

export const Strong = styled.nav`
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
        border: 0;
        width: 10vw;
        height: 100%;
        text-transform: capitalize;
        background-color: hsl(0deg 0% 100% / 8%);
        font-size: ${props => props.theme.sizes.small};
        margin: 0 10px;
        > svg {
            width: 30px;
        }
    }
`
