import '@openbanking.vn/styles/globals.css';
import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Open Banking in Vietnam</title>
			</Head>
			<div>
				<Component {...pageProps} />
			</div>
		</>
	);
};

export default App;
