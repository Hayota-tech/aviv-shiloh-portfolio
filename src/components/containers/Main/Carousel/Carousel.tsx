import React, { useEffect, useState } from 'react';

import type { IProject } from '../../../../interfaces/responses';
import CarouselView from './Carousel.view';

interface IProps {
	readonly projectsList: IProject[];
}

const Carousel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedProjectState, setSelectedProjectState] = useState<IProject | undefined>(undefined);
	const [selectedImageIndexState, setSelectedImageIndexState] = useState<number>(0);

	const onNextImageClick = () => {
		setSelectedImageIndexState((prev) => {
			// if (prev === null) {
			// 	return null;
			// }

			if (prev === props.projectsList.length - 1) {
				return 0;
			}

			return prev + 1;
		});
	};

	const onPreviousImageClick = () => {
		setSelectedImageIndexState((prev) => {
			// if (prev === null) {
			// 	return null;
			// }

			if (prev === 0) {
				return props.projectsList.length - 1;
			}

			return prev - 1;
		});
	};

	useEffect(() => {
		props.projectsList && setSelectedProjectState(() => props.projectsList[selectedImageIndexState]);
	}, [selectedImageIndexState]);

	return (
		<CarouselView
			selectedProject={selectedProjectState}
			onNextImageClick={onNextImageClick}
			onPreviousImageClick={onPreviousImageClick}
		/>
	);
};

Carousel.displayName = 'Carousel';
Carousel.defaultProps = {};

export default React.memo(Carousel);
