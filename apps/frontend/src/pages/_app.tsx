/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/display-name */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import type { AppProps } from 'next/app';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

import '../styles/custom.scss';
import { useNextCssRemovalPrevention } from '@/utils/fix-css';

function MyApp({ Component, pageProps, router }: AppProps) {
	useNextCssRemovalPrevention();

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="theme-color" content="#000000" />

				<meta property="og:title" content="Aviv Shiloh Photographer" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/images/meta-image.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="685" />
				<meta property="og:image:height" content="685" />
				<meta property="og:image:alt" content="Aviv Shiloh Portfolio" />
				<meta
					name="description"
					content="Aviv Shiloh is a photographer focusing on the humane aspects of social and cultural issues."
				/>
				<meta property="og:keywords" content="Aviv, Shiloh, Photographer, Portfolio" />

				<title>Aviv Shiloh Photographer</title>

				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
				<Component {...pageProps} key={router.asPath} />
			</AnimatePresence>
		</>
	);
}

export default MyApp;
