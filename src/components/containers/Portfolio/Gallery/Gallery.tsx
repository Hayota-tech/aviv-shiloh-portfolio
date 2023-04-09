import React from 'react';

import GalleryView from './Gallery.view';
import { imageUrl } from '@/utils/image-url';

interface IProps {
	readonly image: string;
	readonly imageAlt: string;
	readonly className?: string;
	readonly onOpenModal: () => void;
}

const Gallery: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const imageBackendUrl = imageUrl(props.image);

	return (
		<GalleryView
			className={props.className}
			image={imageBackendUrl}
			imageAlt={props.imageAlt}
			onOpenModal={props.onOpenModal}
		/>
	);
};

Gallery.displayName = 'Gallery';
Gallery.defaultProps = {};

export default React.memo(Gallery);
