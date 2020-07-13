import '@/css/compiled.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <div className="antialiased">
            <Head>
                <title>Cake or Not Cake</title>
                <meta name="description" content="Don't know whether something is cake? We've got you covered." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-screen h-screen bg-gray-100">
                <Component {...pageProps} />
            </div>
        </div>
    )
}
