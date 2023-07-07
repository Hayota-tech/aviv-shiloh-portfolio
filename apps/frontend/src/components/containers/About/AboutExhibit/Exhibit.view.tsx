import React from 'react';

import classes from './Exhibit.module.scss';

interface IProps {
	readonly title: string | undefined;
	readonly location: string | undefined;
	readonly link: string | undefined;
	readonly startDate: Date | undefined;
	readonly endDate?: Date | undefined;
}

const ExhibitView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let formattedEndtDate;
	let formattedStartDate;
	const startDate = new Date(props.startDate ? props.startDate : '');
	const endDate = new Date(props.endDate ? props.endDate : '');

	const months = [
		'JANUARY',
		'FEBRUARY',
		'MARCH',
		'APRIL',
		'MAY',
		'JUNE',
		'JULY',
		'AUGUST',
		'SEPTEMBER',
		'OCTOBER',
		'NOVEMBER',
		'DECEMBER',
	];

	props.startDate
		? (formattedStartDate = `${
			months[startDate.getMonth()]
		  } ${startDate.getDate()} - ${startDate.getFullYear()}`)
		: null;

	props.endDate
		? (formattedEndtDate = `${
			months[endDate?.getMonth()]
		  } ${endDate?.getDate()} - ${endDate?.getFullYear()}`)
		: null;

	props.endDate ? (formattedEndtDate = '\b' + '-' + '\b' + formattedEndtDate) : '';

	return (
		<div className={classes['container']}>
			<span className={classes['container__title']}>{props.title}</span>
			<a href={props.link} className={classes['container__exhibition']}>
				{props.location}
			</a>
			<div className={classes['dateContainer']}>
				<span className={classes['dateContainer__date']}>{formattedStartDate}</span>
				<span className={classes['dateContainer__date']}>{formattedEndtDate}</span>
			</div>
		</div>
	);
};

ExhibitView.displayName = 'ExhibitView';
ExhibitView.defaultProps = {};

export default React.memo(ExhibitView);
