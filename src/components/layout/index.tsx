import * as React from 'react'
import Main from '../../pages/main'
import Navbar from '../navbar'
import { Container, Wrapper } from './styles'

const Layout: React.FunctionComponent = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Main />
            </Wrapper>
            {/* <Footer /> */}
        </Container>
    )
}
export default Layout
