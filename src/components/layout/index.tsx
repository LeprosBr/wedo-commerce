import * as React from 'react'
import { Footer, Navbar } from '../index'
import { Container } from './styles'

const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <Container>
            <Navbar />
            {children}
            {/* <Wrapper>{children}</Wrapper> */}
            <Footer />
        </Container>
    )
}
export default Layout
