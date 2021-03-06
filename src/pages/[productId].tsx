import { CreditCard } from '@styled-icons/boxicons-regular'
import { motion } from 'framer-motion'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import stripeConfig from '../../config/stripe'
import { Layout } from '../components'
import { Container, Section, Wrapper } from '../styles/pages/product'
import { Heading } from '../styles/theme'

interface Props {
    product: Stripe.Product
}

export const getStaticPaths: GetStaticPaths = async () => {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2020-08-27'
    })

    const products = await stripe.products.list()
    const paths = products.data.map(product => ({
        params: {
            productId: product.id
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2020-08-27'
    })

    const { productId } = params

    const product = await stripe.products.retrieve(productId as string)
    return {
        props: {
            product
        }
    }
}

const Payments: React.FC = () => (
    <div>
        <Section>
            <Heading level={2} fontWeight={400} size="xsmall" color="sucess">
                Frete grátis LPRS FULL
            </Heading>
            <Heading level={3} fontWeight={100} size="xxsmall">
                Saiba os prazos de entrega e as formas de envio.
            </Heading>

            <strong>
                <button>Comprar</button>
                <button>Adicionar ao carrinho</button>
            </strong>

            <strong>
                <Heading level={5} fontWeight={100} size="xxsmall">
                    Devolução grátis. Você tem 7 dias a partir da data de
                    recebimento.
                </Heading>
            </strong>
            <strong>
                <Heading level={5} fontWeight={100} size="xxsmall">
                    Compra Garantida, receba o produto que está esperando ou
                    devolvemos o dinheiro.
                </Heading>
            </strong>
            <strong>
                <Heading level={5} fontWeight={100} size="xxsmall">
                    12.0 meses de garantia de fábrica.
                </Heading>
            </strong>
        </Section>
        <Section>
            <Heading level={4} fontWeight={100} size="xsmall">
                Meios de pagamento
            </Heading>
            <strong>
                <button>
                    <CreditCard />
                    até 12x sem juros
                </button>
            </strong>
            <strong>
                <a href="https://www.danielbispo.com/">
                    Conheça outros meios de pagamento
                </a>
            </strong>
        </Section>
    </div>
)

const Breadcrumbs: React.FC<Props> = ({ product }) => (
    <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/">{product.type}</Link>
        </li>
        <li>
            <strong>Produto</strong>
        </li>
    </ul>
)

const Product: React.FC<Props> = ({ product }) => {
    // console.log(product)
    return (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <Layout>
                <Container>
                    <Head>
                        <title>{product.name}</title>
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <Breadcrumbs product={product} />
                    <Wrapper>
                        <div className="productImg">
                            {product.images &&
                                product.images.map(img => (
                                    <Image
                                        key={img.length}
                                        src={img}
                                        alt={product.name}
                                        width={600}
                                        height={600}
                                    />
                                ))}
                        </div>

                        <div className="productContent">
                            <div>
                                <Heading
                                    level={1}
                                    fontWeight={700}
                                    size="small"
                                >
                                    {product.name}
                                </Heading>
                            </div>

                            <div>
                                <Heading
                                    level={3}
                                    fontWeight={700}
                                    size="xsmall"
                                >
                                    O que você precisa saber sobre este produto
                                </Heading>

                                <Heading
                                    level={4}
                                    fontWeight={100}
                                    size="xsmall"
                                >
                                    {product.description}
                                </Heading>
                            </div>
                        </div>

                        <Payments />
                    </Wrapper>
                </Container>
            </Layout>
        </motion.div>
    )
}

export default Product
