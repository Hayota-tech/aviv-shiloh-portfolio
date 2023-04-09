import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';

import { IProject } from 'src/interfaces/responses';
import { backendApi } from '@/utils/http';
import ArtworkView from './Artwork.view';
import { IYear } from './interfaces/year';

interface IProps {}

const Artwork: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IProject[]>([]);
	const [selectedYearsState, setSelectedYearsState] = useState<IYear[]>([]);

	const onSelectYear = (year: IYear) => {
		if (selectedYearsState.includes(year)) {
			setSelectedYearsState((prev) => prev.filter((prevYear) => prevYear.year !== year.year));
		} else {
			setSelectedYearsState((prev) => [...prev, year]);
		}
	};

	const onSelectAllYears = () => {
		setSelectedYearsState(() => []);
	};

	useEffect(() => {
		backendApi
			.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?fields[1]=name&fields[2]=date&fields[3]=country&fields[4]=city&populate[0]=media`,
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);
	return (
		<ArtworkView
			projectsList={projectsListState}
			selectedYears={selectedYearsState}
			onSelectYear={onSelectYear}
			onSelectAllYears={onSelectAllYears}
		/>
	);
};

Artwork.displayName = 'Artwork';
Artwork.defaultProps = {};

export default React.memo(Artwork);
