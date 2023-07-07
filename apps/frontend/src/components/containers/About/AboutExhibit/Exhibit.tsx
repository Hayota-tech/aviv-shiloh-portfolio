import React from 'react';

import ExhibitView from './Exhibit.view';

interface IProps {
	readonly title: string | undefined;
	readonly location: string | undefined;
	readonly link: string | undefined;
	readonly startDate: Date | undefined;
	readonly endDate?: Date | undefined;
}

const Exhibit: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<ExhibitView
			title={props.title}
			location={props.location}
			link={props.link}
			startDate={props.startDate}
			endDate={props.endDate}
		/>
	);
};

Exhibit.displayName = 'Exhibit';
Exhibit.defaultProps = {};

export default React.memo(Exhibit);
