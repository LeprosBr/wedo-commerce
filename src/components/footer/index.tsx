import React from 'react'
import { Heading } from '../../styles/theme'
import { Container, Wrapper } from './styles'

const Footer = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <div>
                        <section>
                            <Heading level={6} size="small" fontWeight={700}>
                                Institucional
                            </Heading>
                            <ul>
                                <li>Empresa</li>
                                <li>Como comprar</li>
                                <li>Segurança</li>
                                <li>Envio</li>
                                <li>Pagamento</li>
                                <li>Política de troca e devolução</li>
                                <li>Contato</li>
                            </ul>
                        </section>
                        <section>
                            <Heading level={6} size="small" fontWeight={700}>
                                Contato
                            </Heading>

                            <ul>
                                <li>
                                    Atendimento de segunda a sexta - 08h às 18h
                                    sábado 08h às 12h
                                </li>
                                <li>(52) 99888-9999</li>
                                <li>emailcontato@gmail.com</li>
                            </ul>
                        </section>
                        <section>
                            <Heading level={6} size="small" fontWeight={700}>
                                Pagamento
                            </Heading>
                        </section>
                        <section>
                            <Heading level={6} size="small" fontWeight={700}>
                                Segurança
                            </Heading>
                        </section>
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}

export default Footer
