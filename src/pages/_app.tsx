import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Layout } from '../components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <AnimatePresence exitBeforeEnter>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <GlobalStyle />
            </AnimatePresence>
        </ThemeProvider>
    )
}

export default MyApp
