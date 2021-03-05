import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    height: 80px;
    background-color: ${props => props.theme.colors.primary};
    justify-content: space-between;

    svg {
        width: 25px;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        bottom: 0;
        width: 100%;
        height: 60px;
        position: fixed;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 1%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    max-width: ${props => props.theme.breakpoints.medium};

    > section {
        flex: 1;
        cursor: pointer;

        > div {
            text-align: end;
            display: flex;
            justify-content: flex-end;

            > button {
                border: 0;
                display: flex;
                margin: 0 10px;
                background-color: hsl(0deg 0% 100% / 8%);
                font-size: ${props => props.theme.sizes.xsmall};

                > h6 {
                    margin-left: 5px;
                    text-transform: capitalize;
                }
            }

            .mobileBtn {
                display: none;
            }
        }
    }

    > form {
        flex: 2;
        width: 100%;
        display: flex;

        > input {
            border: 0;
            width: 90%;
            padding: 2px 6px;
            text-align: inherit;
            background-color: transparent;
            font-size: ${props => props.theme.sizes.small};
        }

        > button {
            border: 0;
            margin: 0;
            width: 10%;
            padding: 5px;
            border-left: 1px solid ${props => props.theme.colors.text};
        }

        background-color: ${props => props.theme.colors.background};
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        form {
            display: none;
        }

        > section {
            width: 100%;
            display: none;
        }

        .mobile {
            height: 100%;
            display: flex;
            padding: 0 1%;
            border-top: 1px solid ${props => props.theme.colors.text};

            > div {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                > button {
                    margin: 0;
                    display: flex;
                    margin: 0 auto;
                    align-items: center;
                    justify-content: center;

                    > h6 {
                        display: none;
                    }
                }
            }

            .cartBtn {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: ${props => props.theme.colors.sucess};
                color: ${props => props.theme.colors.primary};
            }

            .mobileBtn {
                display: block;
            }
        }
    }
`

export const Aside = styled.div`
    height: 40px;
    display: flex;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    max-width: ${props => props.theme.breakpoints.medium};

    > strong {
        display: flex;
        justify-content: space-between;
        font-size: ${props => props.theme.sizes.xxsmall};

        > span {
            margin: 0 10px;
            font-weight: 100;
        }
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        display: none;
    }
`
