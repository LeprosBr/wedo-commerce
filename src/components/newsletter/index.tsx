import { Heading } from '../../styles/theme'
import { Wrapper } from './styles'

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
                <button type="submit">cadastrar</button>
            </form>
        </Wrapper>
    )
}

export default Newsletter
