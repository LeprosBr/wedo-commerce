import styled from 'styled-components'

export const Container = styled.footer`
    background-color: ${props => props.theme.colors.primary};
    border-top: 1px solid ${props => props.theme.colors.secondary};

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        display: none;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 2% 1%;
    max-width: ${props => props.theme.breakpoints.medium};

    > div {
        display: flex;
        justify-content: center;
        > section {
            flex: 1;
            margin: 0 5px;
            text-align: start;
            > ul {
                list-style: none;

                > li {
                    margin: 12px 0;
                }

                .imgLogo {
                    margin-top: 20px;
                    text-align: center;
                }
            }
        }
    }
`
