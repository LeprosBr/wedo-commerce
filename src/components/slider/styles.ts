import { NavigateBefore, NavigateNext } from '@styled-icons/material-outlined'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    max-width: ${props => props.theme.breakpoints.medium};

`


export const Sliders = styled(motion.div)`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .slide {
        opacity: 0;
        transition-duration: 1s ease;
    }

    .slide.active {
        opacity: 1;
        transition-duration: 1s;
        translate: scale(1.08);
    }
`
const generalIconCss = css`
    top: 50%;
    z-index: 2;
    width: 25px;
    cursor: pointer;
    user-select: none;
    position: absolute;
    border-radius: 50%;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.theme};
`
export const Next = styled(NavigateNext)`
    right: 32px;
    ${generalIconCss}
`
export const Before = styled(NavigateBefore)`
    left: 32px;
    ${generalIconCss}
`
