import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'
import Link from 'next/link'
import * as React from 'react'
import { Container, Nav, Wrapper } from './style'

const Navbar: React.FC = () => {
    return (
        <Nav>
            <Wrapper>
                <Link href="/">Logo</Link>

                <form>
                    <Container>
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            name="search"
                        />
                        <button type="submit">
                            <SearchAlt />
                        </button>
                    </Container>
                </form>
                <Link href="/car">Meu Carrinho</Link>
            </Wrapper>
        </Nav>
    )
}
export default Navbar
