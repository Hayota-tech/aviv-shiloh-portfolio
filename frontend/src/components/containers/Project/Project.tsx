import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import type { AxiosResponse } from 'axios';

import { IProject } from 'src/interfaces/responses';
import ProjectView from './Project.view';
import { backendApi } from '@/utils/http';

interface IProps {}

const Project: React.FC<IProps> = () => {
	const router = useRouter();
	const { projectId } = router.query;
	const [projectsListState, setProjectsListState] = useState<IProject[]>([]);
	const [projectInfoState, setProjectInfoState] = useState<IProject | undefined>(undefined);

	const onNavigateBack = () => router.back();

	useEffect(() => {
		backendApi
			.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?fields[0]=name&fields[1]=description&fields[3]=date&&fields[4]=country&fields[5]=city&populate[0]=media`,
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	useEffect(() => {
		if (projectsListState && projectId) {
			const projectInfo = projectsListState.find((project) => project.id.toString() === projectId);
			setProjectInfoState(() => projectInfo);
		}
	}, [projectsListState]);

	return <ProjectView projectInfo={projectInfoState} onNavigateBack={onNavigateBack} />;
};

Project.displayName = 'Project';
Project.defaultProps = {};

export default React.memo(Project);
