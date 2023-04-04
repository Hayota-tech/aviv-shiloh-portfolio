import React from 'react';

import classes from './About.module.scss';

interface IProps {}

const AboutView: React.FC<IProps> = () => {
	return (
		<section className={classes['container']}>
			<span>About page</span>
		</section>
	);
};

AboutView.displayName = 'AboutView';
AboutView.defaultProps = {};

export default React.memo(AboutView);
