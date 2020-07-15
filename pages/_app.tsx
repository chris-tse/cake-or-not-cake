import '@/css/tailwind.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <div className="antialiased">
            <Head>
                <title>Cake or Not Cake</title>
                <meta name="description" content="Don't know whether something is cake? We've got you covered." />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content="@ChrisMTse" />
                <meta name="twitter:title" content="Cake or Not Cake" />
                <meta
                    name="twitter:description"
                    content="Don't know whether something is cake? We've got you covered."
                />
                <meta name="twitter:image" content="https://cakeornotcake.christse.io/cake.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-screen h-screen bg-gray-100">
                <Component {...pageProps} />
            </div>
        </div>
    )
}
