import { Cart, SearchAlt, UserCircle } from '@styled-icons/boxicons-regular'
import Link from 'next/link'
import * as React from 'react'
import wedoLogo from '../../assets/logo-wedo-medium.svg'
import { Heading } from '../../styles/theme'
import { Aside, Container, Nav, Strong, Wrapper } from './style'
const Navbar: React.FC = () => {
    return (
        <>
            <Aside>
                <Wrapper>
                    <Heading level={5}>
                        As ofertas são válidas por tempo determinado e/ou
                        enquanto durarem os estoques.
                    </Heading>
                </Wrapper>
            </Aside>
            <Nav>
                <Wrapper>
                    <Link href="/">
                        <img src={wedoLogo} alt="Wedo Logo" />
                    </Link>

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
                    <Strong>
                        <button>
                            <Cart /> carrinho
                        </button>
                        <button>
                            <UserCircle /> minha conta
                        </button>
                    </Strong>
                </Wrapper>
            </Nav>
        </>
    )
}
export default Navbar
