import styled from 'styled-components'

export const Nav = styled.nav`
    height: 100px;
    background-color: ${props => props.theme.colors.primary};
`

export const Aside = styled.nav`
    height: 50px;
    display: flex;
    display: flex;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    max-width: ${props => props.theme.breakpoints.medium};

    > strong {
        display: flex;
        justify-content: space-between;

        > span {
            margin: 0 10px;
            font-weight: 100;
        }
    }
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    max-width: ${props => props.theme.breakpoints.medium};

    > img {
        width: 150px;
        cursor: pointer;
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
        width: 45px;
        padding: 5px;
        border-left: 1px solid rgb(48 48 48);
        margin: 0;
        > svg {
            width: 25px;
        }
    }
`

export const Strong = styled.nav`
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
        border: 0;
        margin: 0 10px;
        text-transform: capitalize;
        background-color: hsl(0deg 0% 100% / 8%);
        font-size: ${props => props.theme.sizes.xsmall};
        > svg {
            width: 25px;
        }
    }
`
