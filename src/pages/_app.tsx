import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='viewport-fit=30%' />
        {/* <meta name="viewport" content="initial-scale=0.3" /> */}
			</Head>
			<Component {...pageProps} />
		</>
	)
}
