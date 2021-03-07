import {
    CartAlt,
    Home,
    SearchAlt,
    UserCircle
} from '@styled-icons/boxicons-regular'
import { FavoriteBorder as Favorite } from '@styled-icons/material'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import wedoLogo from '../../assets/logo-wedo-medium.svg'
import { Heading } from '../../styles/theme'
import NavbarCollapse from './navbar-collapse'
import { Aside, Nav, Wrapper } from './style'

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
        <input type="text" placeholder="Pesquisar" name="search" />
        <button type="submit">
            <SearchAlt />
        </button>
    </form>
)

const Navbar: React.FC = () => {
    return (
        <>
            <Info />
            <Nav>
                <Wrapper>
                    <section>
                        <Link href="/">
                            <Image
                                src={wedoLogo}
                                alt="Logo Wedo"
                                width={150}
                                height={50}
                            />
                        </Link>
                    </section>
                    <Form />
                    <section className="mobile">
                        <div>
                            <Link href="/">
                                <button className="mobileBtn">
                                    <Home />
                                </button>
                            </Link>
                            <button className="mobileBtn">
                                <SearchAlt />
                            </button>

                            <button className="cartBtn">
                                <CartAlt />
                                <Heading level={6} size="xsmall">
                                    carrinho
                                </Heading>
                            </button>

                            <button className="mobileBtn">
                                <Favorite />
                            </button>

                            <button>
                                <UserCircle />
                                <Heading level={6} size="xsmall">
                                    entrar
                                </Heading>
                            </button>
                        </div>
                    </section>
                </Wrapper>
            </Nav>
            <NavbarCollapse />

        </>
    )
}

export default Navbar
