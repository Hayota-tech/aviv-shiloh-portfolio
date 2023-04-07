import React from 'react';
import Image from 'next/image';

import { ICarouselImage } from '../../../../interfaces/carousel-image';

import classes from './Carousel.module.scss';

interface IProps {
	readonly selectedProject: ICarouselImage | undefined;
	readonly onNextImageClick: () => void;
	readonly onPreviousImageClick: () => void;
}

const CarouselView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<Image
				className={classes['container__image']}
				src={props.selectedProject?.url ?? '/images/placeholder.png'}
				width={1384}
				height={778}
				alt="Carousel Image"
			/>
			<div className={classes['infoContainer']}>
				<div className={classes['leftSide']}>
					<span className={classes['leftSide__title']}>{props.selectedProject?.title}</span>
					<span className={classes['leftSide_date']}>{props.selectedProject?.date}</span>
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
