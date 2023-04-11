import React from 'react';

import classes from './Loader.module.scss';

interface IProps {}

const LoaderView: React.FC<IProps> = () => {
	return (
		<section className={classes['container']}>
			<span>This is a loader</span>
		</section>
	);
};

LoaderView.displayName = 'LoaderView';
LoaderView.defaultProps = {};

export default React.memo(LoaderView);
