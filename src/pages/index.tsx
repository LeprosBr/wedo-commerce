import { GetStaticProps } from 'next'
import Link from 'next/link'
import Stripe from 'stripe'
import stripeConfig from '../../config/stripe'
import { Card, CardText, Container, Img } from '../styles/pages/home'
import { Heading } from '../styles/theme'
interface Props {
    products: Stripe.Product[]
}

export const getStaticProps: GetStaticProps = async () => {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2020-08-27'
    })

    const products = await stripe.products.list()

    return {
        props: {
            products: products.data
        }
    }
}

const Home: React.FC<Props> = ({ products }) => {
    console.log(products)

    return (
        <Container>
            {products.map(product => (
                <Link href={product.id}>
                    <Card>
                        {product.images &&
                            product.images.map(img => (
                                <Img>
                                    <img key={img} src={img} />
                                </Img>
                            ))}
                        <CardText>
                            <Heading level={2} size="xsmall" color="text">
                                {product.name}
                            </Heading>
                        </CardText>
                        <Heading
                            level={3}
                            color="text"
                            size="normal"
                            fontWeight={400}
                        >
                        </Heading>
                    </Card>
                </Link>
            ))}
        </Container>
    )
}

export default Home
