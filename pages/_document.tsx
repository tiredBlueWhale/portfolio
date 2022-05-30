import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className='bg-blue-700 text-white'>
            <Head>
                <title>Tired Blue Whale Portfolio</title>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}