import React from 'react';

import SSvg from '@/ui/SSvg';

import classes from './Still.module.scss';
import Gallery from '../Gallery';

interface IProps {}

const StillView: React.FC<IProps> = () => {
	return (
		<section className={classes['container']}>
			<div className={classes['headerContainer']}>
				<h1 className={classes['headerContainer__title']}>Still</h1>
				<SSvg className={classes['headerContainer__icon']} name="arrowBold" />
				<div className="categoriesContainer"></div>
			</div>
			<div className={classes['galleryContainer']}>
				<Gallery />
			</div>
		</section>
	);
};

StillView.displayName = 'StillView';
StillView.defaultProps = {};

export default React.memo(StillView);
