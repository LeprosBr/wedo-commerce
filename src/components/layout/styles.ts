import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    margin: 2% auto;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);
    max-width: ${props => props.theme.breakpoints.medium};
    background: ${props => props.theme.colors.primary};

`
