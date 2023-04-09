import React from 'react';
import SSvg from '@/ui/SSvg';

import Project from './Project';

import type { IYear } from './interfaces/year';
import type { IProject } from 'src/interfaces/responses';
import { yearsList } from 'src/data/years-list';
import { concatClasses } from '@/utils/component';

import classes from './Artwork.module.scss';

interface IProps {
	readonly projectsList: IProject[];
	readonly selectedYears: IYear[];
	readonly onSelectYear: (year: IYear) => void;
	readonly onSelectAllYears: () => void;
}

const ArtworkView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<div className={classes['headerContainer']}>
				<h1 className={classes['headerContainer__title']}>Artworks</h1>
				<button type="button">
					<SSvg className={classes['headerContainer__icon']} name="arrowBold" />
				</button>
			</div>

			<div className={classes['yearsList']}>
				<button
					className={concatClasses(
						classes,
						'yearsList__item',
						props.selectedYears.length === 0 ? 'yearsList__item--selected' : '',
					)}
					type="button"
					onClick={props.onSelectAllYears}
				>
					All
				</button>
				{yearsList.map((year) => (
					<button
						key={year.year}
						className={concatClasses(
							classes,
							'yearsList__item',
							props.selectedYears.includes(year) ? 'yearsList__item--selected' : '',
						)}
						type="button"
						onClick={() => props.onSelectYear(year)}
					>
						{year.year}
					</button>
				))}
			</div>

			{props.projectsList.map((project, index) => {
				const projectDate = project?.attributes?.date.split('-')[0] ?? '';

				if (
					props.selectedYears.length > 0 &&
					!props.selectedYears.some((year) => year.year === projectDate)
				)
					return;

				return <Project key={index} index={index} project={project} />;
			})}
		</section>
	);
};

ArtworkView.displayName = 'ArtworkView';
ArtworkView.defaultProps = {};

export default React.memo(ArtworkView);
