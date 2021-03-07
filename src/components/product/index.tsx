import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { Heading } from '../../styles/theme'
import { fadeImg, fadeInUp } from '../animate'
import { Card } from './styles'

interface Props {
    product: Stripe.Product
}

const Product: React.FC<Props> = ({ product }) => {
    return (
        <Link href={product.id} key={product.id}>
            <Card as={motion.div} variants={fadeInUp} whileTap={{ scale: 0.9 }}>
                {product.images &&
                    product.images.map(img => (
                        <motion.div
                            variants={fadeImg}
                            className="cardImg"
                            key={img.length}
                            transition={{ delay: 0.2 }}
                        >
                            <Image
                                src={img}
                                alt={product.name}
                                width={500}
                                height={500}
                            />
                        </motion.div>
                    ))}
                <div className="cardContent">
                    <Heading
                        level={2}
                        size="xxsmall"
                        color="text"
                        fontWeight={700}
                    >
                        {product.name}
                    </Heading>
                    <div>
                        <strong>
                            R$ {Math.floor(Math.random() * 10) + 1},
                            {Math.floor(
                                Math.random() * Math.floor(Math.random() * 10)
                            )}
                            0
                        </strong>
                        <label>
                            Termina em {Math.floor(Math.random() * 10) + 1} dias
                        </label>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default Product
