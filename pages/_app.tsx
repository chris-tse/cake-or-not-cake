import '@/css/compiled.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <div className="antialiased">
            <Head>
                <title>Cake or Not Cake</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <div className="w-screen h-screen bg-gray-100">
                <Component {...pageProps} />
            </div>
        </div>
    )
}