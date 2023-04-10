import React, { useState } from 'react';

import ProjectCarouselView from './ProjectCarousel.view';
import { IImage } from 'src/interfaces/image';

interface IProps {
	readonly imagesList: IImage[];
}

const ProjectCarousel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedItemIndexState, setSelectedItemIndexState] = useState<number>(0);

	const setSelectedItemIndex = (index: number) => setSelectedItemIndexState(() => index);

	return (
		<ProjectCarouselView
			imagesList={props.imagesList}
			selectedItemIndex={selectedItemIndexState}
			setSelectedItemIndex={setSelectedItemIndex}
		/>
	);
};

ProjectCarousel.displayName = 'ProjectCarousel';
ProjectCarousel.defaultProps = {};

export default React.memo(ProjectCarousel);
