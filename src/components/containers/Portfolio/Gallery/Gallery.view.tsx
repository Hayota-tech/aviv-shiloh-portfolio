import React from 'react';
import Image from 'next/image';

import classes from './Gallery.module.scss';

interface IProps {
	readonly image: string;
	readonly imageAlt: string;
}

const GalleryView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<Image
				className={classes['container__image']}
				src={props.image}
				alt={props.imageAlt}
				width={100}
				height={100}
			/>
		</div>
	);
};

GalleryView.displayName = 'GalleryView';
GalleryView.defaultProps = {};

export default React.memo(GalleryView);
