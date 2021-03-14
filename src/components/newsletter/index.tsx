import { motion } from 'framer-motion'
import { Heading } from '../../styles/theme'
import { Button, Wrapper } from './styles'

const Newsletter: React.FC = () => {
    return (
        <Wrapper>
            <div>
                <Heading
                    level={4}
                    size="xsmall"
                    color="background"
                    fontWeight={700}
                >
                    Cadastre-se para receber nossas novidades e ofertas por
                    e-mail
                </Heading>
            </div>
            <form>
                <input
                    type="text"
                    placeholder="Digite seu e-mail"
                    name="newsletter"
                />
                <Button
                    as={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                >
                    cadastrar
                </Button>
            </form>
        </Wrapper>
    )
}

export default Newsletter
