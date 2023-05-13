import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';

import type { IProject } from 'src/interfaces/responses';
import { backendApi } from '@/utils/http';
import MainView from './Main.view';
// import { getFromSessionStorage } from '../../../utils/session-storage';

interface IProps {}

const Main: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IProject[]>([]);
	if (typeof sessionStorage !== 'undefined') {
		// Access sessionStorage here

		const [sessionData, setSessionData] = useState<string | null>(sessionStorage.getItem('isMenuOpen'));

		useEffect(() => {
			const onStorageChange = (event: StorageEvent) => {
				if (event.storageArea === sessionStorage && event.key === 'isMenuOpen') {
					setSessionData(event.newValue);
				}
			};
			window.addEventListener('storage', onStorageChange);
			console.log(sessionData);
			return () => window.removeEventListener('storage', onStorageChange);
		}, []);
	}
	useEffect(() => {
		backendApi
			.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?fields[0]=name&fields[1]=description&&fields[3]=date&&fields[4]=country&fields[5]=city&populate[0]=media`,
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	return <MainView projectsList={projectsListState} />;
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
