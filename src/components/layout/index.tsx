import * as React from 'react'
import Navbar from '../navbar'
import { Container, Wrapper } from './styles'

const Layout: React.FunctionComponent = ({children}) => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
               {children}
            </Wrapper>
            {/* <Footer /> */}
        </Container>
    )
}
export default Layout
