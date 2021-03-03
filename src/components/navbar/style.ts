import styled from 'styled-components'

export const Nav = styled.nav`
    height: 100px;
    /* overflow: hidden; */
    background-color: ${props => props.theme.colors.primary};
    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        bottom: 0;
        height: 55px;
        width: 100%;
        position: fixed;
        background: ${props => props.theme.colors.secondary};

        img,
        form {
            display: none;
        }

        > div {
            width: 100%;
        }
    }
`

export const Aside = styled.div`
    height: 50px;
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

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        display: none;
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

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        width: 100%;

        > button {
            > svg {
                width: 35px;
            }
        }
    }
`
export const Search = styled.button`
    display: none;

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        width: 80px;
        height: 80px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.colors.sucess} !important;
        border: 8px solid ${props => props.theme.colors.primary} !important;
        > svg {
            color: ${props => props.theme.colors.background} !important;
        }
        margin-bottom: 45px !important;
    }
`
