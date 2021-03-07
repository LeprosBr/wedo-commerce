import { useCycle } from 'framer-motion'
import { useRef } from 'react'
import { Collapse as Props } from '../../../data/navbar'
import { Heading } from '../../../styles/theme'
import { Collapse } from './styles'

const sidebar = {
    open: (height = 5000) => ({
        clipPath: `circle(${height * 2 + 500}px at 34px 34px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: 'circle(30px at 40px 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40
        }
    }
}

const NavbarCollapse: React.FC<Props> = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)
    const containerRef = useRef(null)

    return (
        <Collapse>
            <ul>
                {Props.map(link => (
                    <li key={link.title}>
                        <Heading
                            level={4}
                            size="small"
                            fontWeight={700}
                            color="primary"
                        >
                            {link.title}
                        </Heading>
                    </li>
                ))}
            </ul>
            {/* <Sidebar
                as={motion.div}
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                ref={containerRef}
            >
                <Navigation as={motion.div} variants={sidebar} />
                <Menu onClick={() => toggleOpen()}>Btn</Menu>
            </Sidebar> */}
        </Collapse>
    )
}

export default NavbarCollapse
