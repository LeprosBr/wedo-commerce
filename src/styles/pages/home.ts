import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
    width: 100%;
    padding: 3% 2%;
    margin: 1% auto;
    background: ${props => props.theme.colors.primary};

    > div {
        margin-top: 4%;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        padding: 4%;

        > div {
            margin-bottom: 5%;
        }
    }
`

export const Card = styled.div`
    width: 250px;
    height: 414px;
    cursor: pointer;
    overflow: hidden;
    margin: 0 8px 16px;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.colors.background};
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px ${props => props.theme.colors.background},
            0 10px 10px ${props => props.theme.colors.background};
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        width: 45%;
        height: 300px;
    }
`

export const Img = styled.div`
    text-align: center;
    background: ${props => props.theme.colors.background};
    > img {
        width: 100%;
        height: 224px;
        margin: 0 8px 16px;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        display: flex;
        height: 130px;
        justify-content: center;

        > img {
            width: 100%;
            height: 100%;
        }
    }
`

export const CardText = styled.div`
    width: 100%;
    padding: 5%;
    height: 100px;
    text-align: justify;
    > h2 {
        overflow: hidden;
        display: -webkit-box;
        /* max-height: 800px; */
        -webkit-line-clamp: 4;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
    }
`
