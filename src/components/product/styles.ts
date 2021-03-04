import styled from 'styled-components'

export const Card = styled.div`
    width: 175px;
    height: 295px;

    cursor: pointer;
    overflow: hidden;
    margin: 0 8px 16px;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.colors.background};
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    .cardImg {
        height: 165px;
        padding: 10px;
        text-align: center;
        background: ${props => props.theme.colors.background};
        > img {
            width: 100%;
            height: 100%;
        }
    }

    .cardContent {
        width: 100%;
        padding: 5%;
        text-align: justify;

        > h2 {
            height: 55px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
        }

        > div {
            margin-top: 10px;
            height: 60px;
            display: flex;
            flex-direction: column;

            > strong {
                font-size: ${props => props.theme.sizes.small};
                color: ${props => props.theme.colors.sucess};
            }

            > label {
                font-size: ${props => props.theme.sizes.xxsmall};
            }
        }
    }

    &:hover {
        box-shadow: 0 14px 28px ${props => props.theme.colors.background},
            0 10px 10px ${props => props.theme.colors.background};
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        width: 45%;
        height: 265px;

        .cardImg {
            display: flex;
            height: 130px;
            justify-content: center;

            > img {
                width: 100%;
                height: 100%;
            }
        }
    }
`
