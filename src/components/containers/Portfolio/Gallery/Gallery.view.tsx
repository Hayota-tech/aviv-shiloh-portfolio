import React from 'react';
import Image from 'next/image';

import { galleryImages } from 'src/data/gallery-images';

import classes from './Gallery.module.scss';

interface IProps {}

const GalleryView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			{galleryImages.map((imageData, index) => (
				<Image
					key={index}
					className={classes['container__image']}
					src={imageData.url}
					alt={imageData.alt}
					width={100}
					height={100}
				/>
			))}
		</div>
	);
};

GalleryView.displayName = 'GalleryView';
GalleryView.defaultProps = {};

export default React.memo(GalleryView);
