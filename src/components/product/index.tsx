import Link from 'next/link'
import Stripe from 'stripe'
import { Heading } from '../../styles/theme'
import { Card } from './styles'

interface Props {
    product: Stripe.Product
}

const Product: React.FC<Props> = ({ product }) => {
    return (
        <Link href={product.id} key={product.id}>
            <Card>
                {product.images &&
                    product.images.map(img => (
                        <div className="cardImg" key={img.length}>
                            <img key={img} src={img} />
                        </div>
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
                        <strong>R$ 10,00</strong>
                        <label>Termina em 2 dias</label>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default Product
