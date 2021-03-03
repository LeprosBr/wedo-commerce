import { Head } from 'next/document'
import * as React from 'react'

const SEO: React.FC = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta property="og:title" content="Wedo" />
            <meta property="og:type" content="website" />
            <meta name="description" content="e-commerce" />
            <meta property="og:site_name" content="Wedo Market" />
            <meta property="og:description" content="e-commerce" />
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
