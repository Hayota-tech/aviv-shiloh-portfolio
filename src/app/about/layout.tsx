/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/display-name */
/* eslint-disable react/destructuring-assignment */
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
