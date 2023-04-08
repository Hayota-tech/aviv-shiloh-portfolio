import React from 'react';

import ExhibitView from './Exhibit.view';

interface IProps {
	readonly title: string;
	readonly exhibition: string;
	readonly startDate: string;
	readonly endDate?: string;
}

const Exhibit: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<ExhibitView
			title={props.title}
			exhibition={props.exhibition}
			startDate={props.startDate}
			endDate={props.endDate}
		/>
	);
};

Exhibit.displayName = 'Exhibit';
Exhibit.defaultProps = {};

export default React.memo(Exhibit);
