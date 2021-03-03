import styled from 'styled-components'

export const Container = styled.footer`
    height: 100px;
    background-color: ${props => props.theme.colors.secondary};

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        display: none;
    }
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
`
