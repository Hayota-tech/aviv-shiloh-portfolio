import React from 'react';

import GalleryView from './Gallery.view';

interface IProps {}

const Gallery: React.FC<IProps> = () => {
	return <GalleryView />;
};

Gallery.displayName = 'Gallery';
Gallery.defaultProps = {};

export default React.memo(Gallery);
