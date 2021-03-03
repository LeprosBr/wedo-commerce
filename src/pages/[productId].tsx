import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'
import stripeConfig from '../../config/stripe'
import { Container } from '../styles/pages/home'
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
            <Heading level={1}>{product.name}</Heading>
            {product.images &&
                product.images.map(img => <img key={img} src={img} />)}
        </Container>
    )
}

export default Product
