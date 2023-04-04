/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */

import Header from '../../components/layout/Header';

export const metadata = {
	title: 'Aviv Shiloh Portfolio',
	description: 'Some description',
	themeColor: '#000000',
	favicon: '/favicon.ico',
	appleTouchIcon: '/apple-touch-icon.png',
	ogImage: '/og-image.png',
	ogImageAlt: 'Aviv Shiloh Portfolio',
	ogImageWidth: 1200,
	ogImageHeight: 630,
	ogImageType: 'image/png',
	twitterImage: '/twitter-image.png',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content={metadata.themeColor} />
				<meta name="description" content={metadata.description} />
			</head>

			<Header />

			<body>{children}</body>
		</html>
	);
}
