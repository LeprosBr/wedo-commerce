import styled from 'styled-components'

export const Nav = styled.nav`
    height: 100px;
    font-size: ${props => props.theme.sizes.small};
    background-color: ${props => props.theme.colors.primary};
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    max-width: ${props => props.theme.breakpoints.medium};

    > a {
        text-decoration: none;
        color: ${props => props.theme.colors.background};
    }
`

export const Container = styled.form`
    align-items: center;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    padding: 2px 6px;
    border: 1px solid;

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
        width: 45px;
        border-left: 1px solid rgb(48 48 48);
        background-color: hsl(0deg 0% 100% / 8%);
        border-radius: 0 2px 2px 0;
        margin: 0;
    }
`
