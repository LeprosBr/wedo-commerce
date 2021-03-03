import { Cart, SearchAlt, UserCircle } from '@styled-icons/boxicons-regular'
import Link from 'next/link'
import * as React from 'react'
import wedoLogo from '../../assets/logo-wedo-medium.svg'
import { Aside, Container, Nav, Search, Strong, Wrapper } from './style'

const Info: React.FC = () => (
    <Aside>
        <strong>
            <span>Seja um Entregador</span>
            <span>Carreiras</span>
            <span>Wedo Empresas</span>
        </strong>
    </Aside>
)

const Form: React.FC = () => (
    <form>
        <Container>
            <input type="text" placeholder="Pesquisar" name="search" />
            <button type="submit">
                <SearchAlt />
            </button>
        </Container>
    </form>
)

const Navbar: React.FC = () => {
    return (
        <>
            <Info />
            <Nav>
                <Wrapper>
                    <Link href="/">
                        <img src={wedoLogo} alt="Wedo Logo" />
                    </Link>
                    <Form />
                    <Strong>
                        <button>
                            <UserCircle /> Entrar
                        </button>

                        <Search>
                            <SearchAlt />
                        </Search>

                        <button>
                            <Cart /> carrinho
                        </button>
                    </Strong>
                </Wrapper>
            </Nav>
        </>
    )
}

export default Navbar
