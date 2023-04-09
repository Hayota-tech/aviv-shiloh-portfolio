import React from 'react';
import SSvg from '@/ui/SSvg';

import classes from './Artwork.module.scss';
import { yearsList } from 'src/data/years-list';
import { concatClasses } from '@/utils/component';

interface IProps {
	readonly selectedYearIndex: number;
	readonly onSelectYear: (index: number) => void;
}

const ArtworkView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<div className={classes['headerContainer']}>
				<h1 className={classes['headerContainer__title']}>Artworks</h1>
				<SSvg className={classes['headerContainer__icon']} name="arrowDown" />
			</div>

			<div className={classes['yearsList']}>
				<button
					className={concatClasses(
						classes,
						'yearsList__item',
						props.selectedYearIndex === -1 ? 'yearsList__item--selected' : '',
					)}
					type="button"
					onClick={() => props.onSelectYear(-1)}
				>
					All
				</button>
				{yearsList.map((year, index) => (
					<button
						key={index}
						className={concatClasses(
							classes,
							'yearsList__item',
							props.selectedYearIndex === index ? 'yearsList__item--selected' : '',
						)}
						type="button"
						onClick={() => props.onSelectYear(index)}
					>
						{year}
					</button>
				))}
			</div>
		</section>
	);
};

ArtworkView.displayName = 'ArtworkView';
ArtworkView.defaultProps = {};

export default React.memo(ArtworkView);
