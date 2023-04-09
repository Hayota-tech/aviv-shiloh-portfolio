import React from 'react';
import SSvg from '@/ui/SSvg';

import classes from './Artwork.module.scss';

interface IProps {}

const ArtworkView: React.FC<IProps> = () => {
	return (
		<section className={classes['container']}>
			<div className={classes['headerContainer']}>
				<h1 className={classes['headerContainer__title']}>Artworks</h1>
				<SSvg className={classes['headerContainer__icon']} name="arrowDown" />
			</div>
		</section>
	);
};

ArtworkView.displayName = 'ArtworkView';
ArtworkView.defaultProps = {};

export default React.memo(ArtworkView);
