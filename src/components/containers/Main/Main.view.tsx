import React from 'react';

import NavMenu from '@/layout/NavMenu';
import classes from './Main.module.scss';

interface IProps {}

const MainView: React.FC<IProps> = () => {
	return (
		<main className={classes['container']}>
			<NavMenu />
		</main>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
