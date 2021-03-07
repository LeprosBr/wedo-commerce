import { motion } from 'framer-motion'


const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
}

const Navigation: React.FC = () => {
    return (
        <motion.ul variants={variants}>
        {itemIds.map(i => (
            // <MenuItem i={i} key={i} />
            <> {i} </>
        ))}
    </motion.ul>
    )
}

const itemIds = [0, 1, 2, 3, 4]

export default Navigation
