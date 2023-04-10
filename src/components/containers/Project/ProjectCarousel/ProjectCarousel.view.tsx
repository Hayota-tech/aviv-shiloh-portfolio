import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { concatClasses } from '@/utils/component';

import type { IImage } from 'src/interfaces/image';

import ProjectCarouselItem from '../ProjectCarouselItem';

import classes from './ProjectCarousel.module.scss';

interface IProps {
	readonly imagesList: IImage[];
	readonly selectedItemIndex: number;
	readonly setSelectedItemIndex: (_: number) => void;
}

const ProjectCarouselView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const renderIndicator = (
		_: (e: React.MouseEvent | React.KeyboardEvent) => void,
		isSelected: boolean,
		index: number,
	) => {
		if (isSelected) {
			return (
				<button
					className={concatClasses(classes, 'indicator', 'indicator--selected')}
					type="button"
					role="button"
				/>
			);
		}

		return (
			<button
				className={classes['indicator']}
				type="button"
				role="button"
				onClick={() => props.setSelectedItemIndex(index)}
			/>
		);
	};

	return (
		<Carousel
			className={classes['carousel']}
			selectedItem={props.selectedItemIndex}
			showThumbs={false}
			showStatus={false}
			renderIndicator={renderIndicator}
		>
			{props.imagesList.map((image, index) => {
				return (
					<ProjectCarouselItem
						key={`${image.attributes.url}-${index}`}
						index={index}
						image={image}
					/>
				);
			})}
		</Carousel>
	);
};

ProjectCarouselView.displayName = 'ProjectCarouselView';
ProjectCarouselView.defaultProps = {};

export default React.memo(ProjectCarouselView);
