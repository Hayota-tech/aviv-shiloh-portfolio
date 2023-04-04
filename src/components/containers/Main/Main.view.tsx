import React from 'react';
import Link from 'next/link';

import classes from './Main.module.scss';

interface IProps {}

const MainView: React.FC<IProps> = () => {
	return (
		<main className={classes['container']}>
			<span>Noa wait for me</span>
			<Link href="/about">Click me</Link>
		</main>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
