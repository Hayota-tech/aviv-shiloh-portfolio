import React from 'react';

import classes from './Gallery.module.scss';
import { galleryImages } from 'src/data/gallery-images';

interface IProps {}

const GalleryView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			{galleryImages.map((imageData, i) => (
				<img
					key={i}
					className={classes['container__image']}
					src={imageData.url}
					alt={imageData.alt}
				/>
			))}
		</div>
	);
};

GalleryView.displayName = 'GalleryView';
GalleryView.defaultProps = {};

export default React.memo(GalleryView);
