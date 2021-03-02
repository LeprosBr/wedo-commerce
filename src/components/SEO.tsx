import { Head } from 'next/document'
import * as React from 'react'

const SEO: React.FC = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="description" content="{description}" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Wedo" />
            <meta property="og:description" content="{description}" />
            <meta property="og:site_name" content="{siteTitle}" />
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
