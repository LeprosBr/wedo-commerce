import { Head } from 'next/document'
import * as React from 'react'

const SEO: React.FC = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta property="og:title" content="Wedo Pet" />
            <meta property="og:type" content="website" />
            <meta
                name="description"
                content="Rações, acessórios, medicamentos e brinquedos estão na nossa listinha de prioridades; e tudo isso você encontra no Wedo Pet"
            />
            <meta property="og:site_name" content="Wedo Pet Market" />
            <meta
                property="og:description"
                content="Rações, acessórios, medicamentos e brinquedos estão na nossa listinha de prioridades; e tudo isso você encontra no Wedo Pet"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                rel="stylesheet"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
export default SEO
