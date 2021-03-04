import styled from 'styled-components'

export const Container = styled.div`
    margin: 1% auto;

    > ul {
        padding: 10px 16px;
        list-style: none;
        font-size: ${props => props.theme.sizes.xxsmall};
        > li {
            display: inline;

            &:before {
                padding: 8px;
                color: black;
                content: '/';
            }
        }
    }
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 1% auto;
    border-radius: 4px;
    padding: 20px 15px 50px 15px;
    background: ${props => props.theme.colors.primary};

    .productImg {
        flex: 2;
        height: 350px;
        display: flex;
        align-items: center;
        background: ${props => props.theme.colors.background};
    }

    .productContent {
        padding: 0 5%;
        flex: 2;
        text-align: center;
        text-align: justify;

        > div {
            margin-bottom: 50px;
            > h4 {
                margin-top: 20px;
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        display: block;
        border-radius: 0;
    }
`
export const Section = styled.section`
    padding: 20px 10px;
    margin-bottom: 20px;
    width: 280px;
    text-align: center;
    text-align: justify;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.colors.background};
    flex: 1;

    > strong {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        > button {
            padding: 0 24px;
            color: white;
            width: 100%;
            height: 50px;
            margin-top: 20px;
            text-align: center;
            border-radius: 6px;
            border-color: transparent;
            background: ${props => props.theme.colors.sucess};
            font-size: ${props => props.theme.sizes.small};
            cursor: pointer;
            transition: box-shadow 0.25s ease-out,
                background-color 0.2s ease-out;
            box-shadow: 0 0 0 0 #fff;

            > svg {
                width: 25px;
                margin-right: 10px;
            }
        }

        > a {
            text-align: center;
        }
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        width: 100%;
    }
`
