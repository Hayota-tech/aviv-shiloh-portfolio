import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';

import type { IProject } from 'src/interfaces/responses';
import { backendApi } from '@/utils/http';
import ArtworkView from './Artwork.view';
import type { IYear } from './interfaces/year';

interface IProps {}

const Artwork: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IProject[]>([]);
	const [selectedYearsState, setSelectedYearsState] = useState<IYear[]>([]);
	const [isMenuOpenState, setIsMenuOpenState] = useState<boolean>(false);
	const [isMenuVisibleState, setIsMenuVisibleState] = useState<boolean>(false);

	const onToggleMenu = () => {
		if (isMenuOpenState) {
			setIsMenuVisibleState(() => false);
			setTimeout(() => setIsMenuOpenState(false), 500);
		} else {
			setIsMenuOpenState(() => true);
			setIsMenuVisibleState(() => true);
		}
	};

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
			isMenuOpen={isMenuOpenState}
			isMenuVisible={isMenuVisibleState}
			onSelectYear={onSelectYear}
			onSelectAllYears={onSelectAllYears}
			onToggleMenu={onToggleMenu}
		/>
	);
};

Artwork.displayName = 'Artwork';
Artwork.defaultProps = {};

export default React.memo(Artwork);
