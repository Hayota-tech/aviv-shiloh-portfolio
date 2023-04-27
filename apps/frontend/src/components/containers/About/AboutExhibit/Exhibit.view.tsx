import React from 'react';

import classes from './Exhibit.module.scss';

interface IProps {
	readonly title: string;
	readonly exhibition: string;
	readonly startDate: string;
	readonly endDate?: string;
}

const ExhibitView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let endDateWithSpace = '';

	props.endDate ? (endDateWithSpace = ' - ' + props.endDate) : '';

	return (
		<div className={classes['container']}>
			<span className={classes['container__title']}>{props.title}</span>
			<span className={classes['container__exhibition']}>{props.exhibition}</span>
			<div className={classes['dateContainer']}>
				<span className={classes['dateContainer__date']}>{props.startDate}</span>
				<span className={classes['dateContainer__date']}>{endDateWithSpace}</span>
			</div>
		</div>
	);
};

ExhibitView.displayName = 'ExhibitView';
ExhibitView.defaultProps = {};

export default React.memo(ExhibitView);
