import Image from 'next/image'
import React from 'react'
import Medal from '../../assets/safety/medalha_ouro_otima.png'
import { Props } from '../../data/footer'
import { Heading } from '../../styles/theme'
import { Container, Wrapper } from './styles'
const Footer: React.FC<Props> = () => {
    return (
        <Container>
            <Wrapper>
                <div>
                    {Props.map(prop => (
                        <section key={prop.title.length}>
                            <Heading level={5} size="small" fontWeight={700}>
                                {prop.title}
                            </Heading>
                            <ul>
                                {prop.datas.map(data => (
                                    <>
                                        <li>
                                            <Heading
                                                level={6}
                                                size="xsmall"
                                                fontWeight={100}
                                            >
                                                {data.text}
                                            </Heading>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </section>
                    ))}

                    <section>
                        <ul>
                            <Heading level={5} size="small" fontWeight={700}>
                                Segurança
                            </Heading>
                            <li className="imgLogo">
                                <Image
                                    src={Medal}
                                    alt="Logo Wedo"
                                    width={100}
                                    height={100}
                                />
                            </li>
                        </ul>
                    </section>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Footer
