import * as React from 'react'
import { Heading } from '../../styles/theme'
import { Nav, Wrapper } from './style'

const Navbar: React.FC = () => {
    return (
        <Nav>
            <Wrapper>
                <Heading level={4}>Logo</Heading>
                <Heading level={5}>LInk</Heading>
            </Wrapper>
        </Nav>
    )
}
export default Navbar
