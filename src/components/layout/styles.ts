import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    max-width: ${props => props.theme.breakpoints.medium};

`
