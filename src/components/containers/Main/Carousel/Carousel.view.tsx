import React from 'react';
import Image from 'next/image';

import type { IProject } from '../../../../interfaces/responses';

import classes from './Carousel.module.scss';
import { imageUrl } from '@/utils/image-url';
import Link from 'next/link';
import { concatClasses } from '@/utils/component';

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

	const secondProjectId = props.projectsList[props.selectedImageIndex + 1]?.id;
	const secondProjectImage =
		props.projectsList[props.selectedImageIndex + 1]?.attributes?.media?.data[0]?.attributes?.url;
	const secondProjectImageUrl = secondProjectImage
		? imageUrl(secondProjectImage)
		: '/public/images/placeholder.png';
	const secondProjectName = props.projectsList[props.selectedImageIndex + 1]?.attributes?.name;
	const secondProjectDate =
		props.projectsList[props.selectedImageIndex + 1]?.attributes?.date.split('-')[0] ?? '';

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

			<div className={classes['mobileImageInfo']}>
				<span className={classes['mobileImageInfo__title']}>{projectName}</span>
				<span className={classes['mobileImageInfo_date']}>{projectDate}</span>
			</div>

			<Link className={classes['carouselImageMobile']} href={`/project/${secondProjectId}`}>
				<Image
					className={classes['carouselImageMobile__image']}
					src={secondProjectImageUrl}
					width={1384}
					height={778}
					alt="Carousel Image"
				/>
			</Link>

			<div className={concatClasses(classes, 'mobileImageInfo', 'mobileImageInfo--second')}>
				<span className={classes['mobileImageInfo__title']}>{secondProjectName}</span>
				<span className={classes['mobileImageInfo_date']}>{secondProjectDate}</span>
			</div>

			<Link className={classes['mobileMoreWorks']} href={'/portfolio/artwork'}>
				More Works {'>'}
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
