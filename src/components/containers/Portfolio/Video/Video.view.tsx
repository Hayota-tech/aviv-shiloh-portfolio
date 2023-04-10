import React from 'react';

import SSvg from '@/ui/SSvg';
import type { IVideoCategory, IVideoProject } from 'src/interfaces/responses';
import Menu from '../Menu';

import Gallery from '../Gallery';
import { concatClasses } from '@/utils/component';

import classes from './Video.module.scss';
import { IImage } from 'src/interfaces/image';
import VModal from '@/ui/VModal';

interface IProps {
	readonly projectsList: IVideoProject[];
	readonly categoriesList: IVideoCategory[];
	readonly selectedCategories: IVideoCategory[];
	readonly isMenuOpen: boolean;
	readonly isMenuVisible: boolean;
	readonly isModalOpen: boolean;
	readonly onSelectAllCategoris: () => void;
	readonly onSelectCategory: (category: IVideoCategory) => void;
	readonly onToggleMenu: () => void;
	readonly onToggleModal: (image?: IImage) => void;
	readonly selectedModalImage: IImage | null;
}

const VideoView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<>
			{props.isModalOpen && (
				<VModal image={props.selectedModalImage} onToggleModal={props.onToggleModal} />
			)}
			<section className={classes['container']}>
				<div className={classes['headerContainer']}>
					<h1 className={classes['headerContainer__title']}>Video</h1>
					<SSvg
						className={classes['headerContainer__icon']}
						name="arrowBold"
						onClick={props.onToggleMenu}
					/>
					{props.isMenuOpen && (
						<Menu
							isMenuOpen={props.isMenuVisible}
							lastLocation="/portfolio/video"
							onToggleMenu={props.onToggleMenu}
						/>
					)}
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
						const imageDetails = project.attributes.media.data[0];

						if (
							props.selectedCategories.length > 0 &&
							!props.selectedCategories.some((category) =>
								projectCategory?.some(
									(projectCategory) => projectCategory.id === category.id,
								),
							)
						)
							return;

						return (
							<Gallery
								className={classes['galleryContainer__innerContainer']}
								key={index}
								url={image}
								alt={imageAlt}
								onOpenModal={() => {
									props.onToggleModal(imageDetails as IImage);
								}}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

VideoView.displayName = 'VideoView';
VideoView.defaultProps = {};

export default React.memo(VideoView);