import React from 'react';

import classes from './Header.module.scss';

interface IProps {}

const HeaderView: React.FC<IProps> = () => {
	return (
		<header className={classes['container']}>
			<span>header</span>
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
