import Link from 'next/link'
import { Heading } from '../../styles/theme'
import { Benefit, Card, Crash, OK, Truck, Wrapper } from './styles'

const Benefits: React.FC = () => {
    return (
        <Wrapper>
            <Benefit>
                <Truck />
                <div>
                    <Heading
                        level={6}
                        size="xsmall"
                        fontWeight={700}
                        color="primary"
                    >
                        Frete Grátis
                    </Heading>
                    <Link href="/">saiba mais</Link>
                </div>
            </Benefit>
            <Benefit>
                <Card />
                <div>
                    <Heading
                        level={6}
                        size="xsmall"
                        fontWeight={700}
                        color="primary"
                    >
                        Até 10x sem juros
                    </Heading>
                    <Link href="/">saiba mais</Link>
                </div>
            </Benefit>
            <Benefit>
                <Crash />
                <div>
                    <Heading
                        level={6}
                        size="xsmall"
                        fontWeight={700}
                        color="primary"
                    >
                        Drive-Thru
                    </Heading>
                    <Link href="/">saiba mais</Link>
                </div>
            </Benefit>
            <Benefit>
                <OK />
                <div>
                    <Heading
                        level={6}
                        size="xsmall"
                        fontWeight={700}
                        color="primary"
                    >
                        Assinatura Wedo
                    </Heading>
                    <Link href="/">saiba mais</Link>
                </div>
            </Benefit>
        </Wrapper>
    )
}

export default Benefits
