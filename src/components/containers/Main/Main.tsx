import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import MainView from './Main.view';
import { backendApi } from '@/utils/http';
import { IProject } from 'src/interfaces/responses';

interface IProps {}

const Main: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IProject[]>([]);
	useEffect(() => {
		backendApi
			.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects?fields[0]=name&fields[1]=description&&fields[3]=date&&fields[4]=country&&fields[5]=city&populate[0]=media`,
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	console.log(projectsListState, 'projectsListState');
	return <MainView />;
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
