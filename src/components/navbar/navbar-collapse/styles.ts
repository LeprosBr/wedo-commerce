import { MenuAltLeft } from '@styled-icons/boxicons-regular/MenuAltLeft'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Collapse = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.colors.sucess};

    > ul {
        width: 100%;
        height: 100%;
        padding: 0 1%;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        max-width: ${props => props.theme.breakpoints.medium};

        > li {
            margin: 0 20px;
            list-style: none;
        }

        h4 {
            cursor: pointer;
        }
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        > ul {
            display: none;
        }
        background-color: ${props => props.theme.colors.secondary};
        display: none;

    }
`

export const Menu = styled(MenuAltLeft)`
    width: 34px;
    height: 34px;
    outline: none;
    z-index: 3;

`

export const Sidebar = styled(motion.div)`
    width: 100%;
    height: 50px;
    padding: 0 1%;
    display: flex;
    align-items: center;
    background-color: red;
`

export const Navigation = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: blue;
    z-index: 2;
`
