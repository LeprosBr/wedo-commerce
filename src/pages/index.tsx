import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Stripe from 'stripe'
import stripeConfig from '../../config/stripe'
import { fadeInUp, stagger } from '../components/animate'
import Product from '../components/product'
import { Container } from '../styles/pages/home'
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
    // console.log(products)

    return (
        <Container initial="initial" animate="animate" exit={{ opacity: 0 }}>
            <Head>
                <title>Wedo Pet | Home </title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <motion.div variants={fadeInUp}>
                <Heading level={2} size="xsmall" fontWeight={700}>
                    MELHORES OFERTAS E PROMOÇÕES
                </Heading>
            </motion.div>

            <motion.div variants={stagger}>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </motion.div>
        </Container>
    )
}

export default Home
