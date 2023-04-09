import React from 'react';

import GalleryView from './Gallery.view';
import { imageUrl } from '@/utils/image-url';

interface IProps {
	readonly image: string;
	readonly imageAlt: string;
}

const Gallery: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const imageBackendUrl = imageUrl(props.image);

	return <GalleryView image={imageBackendUrl} imageAlt={props.imageAlt} />;
};

Gallery.displayName = 'Gallery';
Gallery.defaultProps = {};

export default React.memo(Gallery);
