import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className='bg-blue-700 text-white snap-proximity	snap-y overflow-y-scroll h-full w-full'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}