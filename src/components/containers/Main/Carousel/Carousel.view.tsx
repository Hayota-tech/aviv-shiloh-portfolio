import React from 'react';
import Image from 'next/image';

import type { IProject } from '../../../../interfaces/responses';

import classes from './Carousel.module.scss';
import { imageUrl } from '@/utils/image-url';
import Link from 'next/link';

interface IProps {
	readonly projectsList: IProject[];
	readonly selectedImageIndex: number;
	readonly onNextImageClick: () => void;
	readonly onPreviousImageClick: () => void;
}

const CarouselView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const projectId = props.projectsList[props.selectedImageIndex]?.id;
	const projectImage =
		props.projectsList[props.selectedImageIndex]?.attributes?.media?.data[0]?.attributes?.url;
	const projectImageUrl = projectImage ? imageUrl(projectImage) : '/public/images/placeholder.png';
	const projectName = props.projectsList[props.selectedImageIndex]?.attributes?.name;
	const projectDate = props.projectsList[props.selectedImageIndex]?.attributes?.date.split('-')[0] ?? '';

	return (
		<section className={classes['container']}>
			<Link className={classes['carouselImage']} href={`/project/${projectId}`}>
				<Image
					className={classes['carouselImage__image']}
					src={projectImageUrl}
					width={1384}
					height={778}
					alt="Carousel Image"
				/>
			</Link>
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
