import { CreditCard } from '@styled-icons/boxicons-regular'
import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'
import stripeConfig from '../../config/stripe'
import { Box, Container, Img, Payment, Text } from '../styles/pages/product'
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

const Product: React.FC<Props> = ({ product }) => {
    console.log(product)
    return (
        <Container>
            <Img>
                {product.images &&
                    product.images.map(img => <img key={img} src={img} />)}
            </Img>

            <Text>
                <Heading level={1} fontWeight={700} size="small">
                    {product.name}
                </Heading>
            </Text>

            <Payments />
        </Container>
    )
}

const Payments: React.FC = () => (
    <Box>
        <Payment>
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
        </Payment>
        <Payment>
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
        </Payment>
    </Box>
)

export default Product
