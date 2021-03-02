import styled from 'styled-components'

export const Nav = styled.nav`
    height: 6vh;
    background-color: ${props => props.theme.colors.primary};
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    max-width: ${props => props.theme.breakpoints.medium};
`
