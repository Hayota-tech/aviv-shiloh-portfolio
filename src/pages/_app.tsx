/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/display-name */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import type { AppProps } from 'next/app';
import React from 'react';

import '../styles/custom.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="theme-color" content="#000000" />

				<meta property="og:title" content="Exlint.io" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/images/meta-image.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="685" />
				<meta property="og:image:height" content="685" />
				<meta property="og:image:alt" content="Aviv Shiloh Portfolio" />
				<meta property="og:url" content="https://exlint.io/" />
				<meta name="description" content="Aviv Shiloh Portfolio" />

				<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
				<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

				<title>Aviv Shiloh Portfolio</title>

				<link rel="canonical" href="https://www.exlint.io/" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
