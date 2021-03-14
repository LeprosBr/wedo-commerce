import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100%;
    height: 90px;
    display: flex;
    margin: 0 auto;
    padding: 0 1%;
    align-items: center;
    max-width: ${props => props.theme.breakpoints.medium};
    background: ${props => props.theme.colors.theme};

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        display: none;
    }

    > div {
        flex: 1;
        width: 30%;
        overflow: hidden;
        text-align: justify;
    }

    form {
        flex: 2;
        display: flex;
        justify-content: space-between;
        background-color: transparent;
        margin-left: 5%;

        > input {
            width: 65%;
            border: none;
            border-radius: 2px;
            padding: 7.5px 8px;
            text-align: inherit;
            font-size: ${props => props.theme.sizes.small};
            &:focus {
                background: ${props => props.theme.colors.secondary};
                outline-color: ${props => props.theme.colors.sucess};
            }
        }
    }
`

export const Button = styled(motion.div)`
    border: 0;
    margin: 0;
    padding: 1% 4%;
    cursor: pointer;
    margin-right: 50px;
    border-radius: 2px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.sucess};
    border-left: 1px solid ${props => props.theme.colors.text};
    &:hover, :active{
        background: ${props => props.theme.colors.hover};
    }


`
