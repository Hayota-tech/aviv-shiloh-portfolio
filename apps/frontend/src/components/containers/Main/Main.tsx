import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';
import { connect } from 'react-redux';

import type { IProject } from 'src/interfaces/responses';
import { backendApi } from '@/utils/http';
import type * as fromApp from '../../../store/app';

import MainView from './Main.view';

interface IPropsFromState {
	readonly isMenuOpen: boolean;
}

interface IProps extends IPropsFromState {}

const Main: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [projectsListState, setProjectsListState] = useState<IProject[]>([]);
	const [isMenuVisibleState, setIsMenuVisibleState] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => setIsMenuVisibleState(() => false), 500);
	}, [props.isMenuOpen]);

	useEffect(() => {
		backendApi
			.get(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?fields[0]=name&fields[1]=description&&fields[3]=date&&fields[4]=country&fields[5]=city&populate[0]=media`,
			)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	return <MainView projectsList={projectsListState} isMenuOpen={isMenuVisibleState} />;
};

Main.displayName = 'Main';
Main.defaultProps = {};

const mapStateToProps = (state: fromApp.RootState) => {
	return {
		isMenuOpen: state.user.isMenuOpen,
	};
};

export default connect(mapStateToProps)(React.memo(Main));
