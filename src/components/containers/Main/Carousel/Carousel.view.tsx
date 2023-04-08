import React from 'react';
import Image from 'next/image';

import type { IProject } from '../../../../interfaces/responses';

import classes from './Carousel.module.scss';
import { imageUrl } from '@/utils/image-url';

interface IProps {
	readonly selectedProject: IProject | undefined;
	readonly onNextImageClick: () => void;
	readonly onPreviousImageClick: () => void;
}

const CarouselView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const projectImage = props.selectedProject?.attributes?.media?.data[0]?.attributes?.url;
	const projectImageUrl = projectImage ? imageUrl(projectImage) : '/public/images/placeholder.png';
	const projectName = props.selectedProject?.attributes?.name;
	const projectDate = props.selectedProject?.attributes?.date;

	return (
		<section className={classes['container']}>
			<Image
				className={classes['container__image']}
				src={projectImageUrl}
				width={1384}
				height={778}
				alt="Carousel Image"
			/>
			<div className={classes['infoContainer']}>
				<div className={classes['leftSide']}>
					<span className={classes['leftSide__title']}>{projectName}</span>
					<span className={classes['leftSide_date']}>{projectDate}</span>
				</div>
				<div className={classes['rightSide']}>
					<button
						className={classes['rightSide__button']}
						type="button"
						onClick={props.onPreviousImageClick}
					>
						Previous Project
					</button>

					<button
						className={classes['rightSide__button']}
						type="button"
						onClick={props.onNextImageClick}
					>
						Next Project
					</button>
				</div>
			</div>
		</section>
	);
};

CarouselView.displayName = 'CarouselView';
CarouselView.defaultProps = {};

export default React.memo(CarouselView);
