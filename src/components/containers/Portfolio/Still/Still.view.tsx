import React from 'react';

import SSvg from '@/ui/SSvg';
import type { IStillCategory, IStillProject } from 'src/interfaces/responses';

import classes from './Still.module.scss';
import Gallery from '../Gallery';
import { concatClasses } from '@/utils/component';

interface IProps {
	readonly projectsList: IStillProject[];
	readonly categoriesList: IStillCategory[];
	readonly selectedCategories: IStillCategory[];
	readonly onSelectAllCategoris: () => void;
	readonly onSelectCategory: (category: IStillCategory) => void;
}

const StillView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<div className={classes['headerContainer']}>
				<h1 className={classes['headerContainer__title']}>Still</h1>
				<SSvg className={classes['headerContainer__icon']} name="arrowBold" />
			</div>

			<div className={classes['categoriesList']}>
				<button
					className={concatClasses(
						classes,
						'categoriesList__item',
						props.selectedCategories.length === 0 ? 'categoriesList__item--selected' : '',
					)}
					type="button"
					onClick={props.onSelectAllCategoris}
				>
					All
				</button>
				{props.categoriesList.map((category) => (
					<button
						key={category.id}
						className={concatClasses(
							classes,
							'categoriesList__item',
							props.selectedCategories.includes(category)
								? 'categoriesList__item--selected'
								: '',
						)}
						type="button"
						onClick={() => props.onSelectCategory(category)}
					>
						{category.attributes.name}
					</button>
				))}
			</div>
			<div className={classes['galleryContainer']}>
				{props.projectsList.map((project, index) => {
					const image = project.attributes.media.data[0]?.attributes.url ?? '';
					const imageAlt = project.attributes.media.data[0]?.attributes.caption ?? '';
					const projectCategory = project?.attributes.categories.data;

					if (
						props.selectedCategories.length > 0 &&
						!props.selectedCategories.some((category) =>
							projectCategory?.some((projectCategory) => projectCategory.id === category.id),
						)
					)
						return;

					return <Gallery key={index} image={image} imageAlt={imageAlt} />;
				})}
			</div>
		</section>
	);
};

StillView.displayName = 'StillView';
StillView.defaultProps = {};

export default React.memo(StillView);
