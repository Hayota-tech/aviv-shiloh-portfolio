import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';

import { IProject } from 'src/interfaces/responses';
import { backendApi } from '@/utils/http';
import ArtworkView from './Artwork.view';

interface IProps {}

const Artwork: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IProject[]>([]);
	useEffect(() => {
		backendApi
			.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?fields[0]=name&fields[2]=date&fields[3]=country&fields[4]=city&populate[0]=media`,
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);
	return <ArtworkView />;
};

Artwork.displayName = 'Artwork';
Artwork.defaultProps = {};

export default React.memo(Artwork);
