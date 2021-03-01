import * as React from 'react'
import { Heading } from '../../styles/theme'
import { Nav } from './style'

const Navbar: React.FC = () => {
    return (
        <Nav>
            <Heading level={4}>Logo</Heading>
            <Heading level={5}>LInk</Heading>

        </Nav>
    )
}
export default Navbar
