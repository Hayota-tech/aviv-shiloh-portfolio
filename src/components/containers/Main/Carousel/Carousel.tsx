import React, { useEffect, useState } from 'react';

import CarouselView from './Carousel.view';
import { ICarouselImage } from '../../../../interfaces/carousel-image';

interface IProps {}

const Carousel: React.FC<IProps> = () => {
	const imagesDummy: ICarouselImage[] = [
		{
			url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmy.alfred.edu%2Fzoom%2F_images%2Ffoster-lake.jpg&f=1&nofb=1&ipt=bd7b953c190eb28583c4100a502a447b8a5ecee9b079af6157cc6d6a90c0bb49&ipo=images',
			title: 'Foster Lake',
			date: '2021-01-01',
		},
		{
			url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages4.alphacoders.com%2F115%2Fthumb-1920-115716.jpg&f=1&nofb=1&ipt=c1f58c6e5b7be411ecd2ea0bdde5d22f4905eeca610198e93701d75e2451abe5&ipo=images',
			title: 'Doza Lake',
			date: '2021-01-01',
		},
	];

	const [selectedImageIndexState, setSelectedImageIndexState] = useState<number | null>(null);
	const [selectedProjectState, setSelectedProjectState] = useState<ICarouselImage | undefined>(undefined);

	const onNextImageClick = () => {
		setSelectedImageIndexState((prev) => {
			if (prev === null) {
				console.log('in');

				return null;
			}

			if (prev === imagesDummy.length - 1) {
				return 0;
			}

			return prev + 1;
		});
	};

	const onPreviousImageClick = () => {
		setSelectedImageIndexState((prev) => {
			if (prev === null) {
				return null;
			}

			if (prev === 0) {
				return imagesDummy.length - 1;
			}

			return prev - 1;
		});
	};

	useEffect(() => {
		setSelectedImageIndexState(() => 0);
	}, []);

	useEffect(() => {
		setSelectedProjectState(() => imagesDummy[selectedImageIndexState ?? 0]);
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
