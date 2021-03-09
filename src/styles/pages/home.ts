import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(motion.div)`
    width: 100%;
    margin: 1% auto;
    padding: 10px;
    background: ${props => props.theme.colors.primary};
    max-width: ${props => props.theme.breakpoints.medium};

    > h2 {
        margin: 2%;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        padding: 4%;
    }
`
export const CardList = styled(motion.div)`
    width: 100%;
    display: flex;
    margin-top: 4%;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        margin-bottom: 5%;
    }
`
