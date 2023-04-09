import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';

import StillView from './Still.view';
import { backendApi } from '@/utils/http';
import type { IStillCategory, IStillProject } from 'src/interfaces/responses';

interface IProps {}

const Still: React.FC<IProps> = () => {
	const [projectsListState, setProjectsListState] = useState<IStillProject[]>([]);
	const [categoriesListState, setCategoriesListState] = useState<IStillCategory[]>([]);
	const [selectedCategoriesState, setSelectedCategoriesState] = useState<IStillCategory[]>([]);

	const onSelectCategory = (category: IStillCategory) => {
		if (selectedCategoriesState.includes(category)) {
			setSelectedCategoriesState((prev) => prev.filter((prevType) => prevType.id !== category.id));
		} else {
			setSelectedCategoriesState((prev) => [...prev, category]);
		}
	};

	const onSelectAllCategoris = () => {
		setSelectedCategoriesState(() => []);
	};

	useEffect(() => {
		backendApi
			.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stills?populate[1]=categories&populate[0]=media`)
			.then((response: AxiosResponse) => {
				setProjectsListState(() => response.data.data);
			});
	}, [backendApi]);

	useEffect(() => {
		backendApi
			.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/still-categories`)
			.then((response: AxiosResponse) => {
				setCategoriesListState(() => response.data.data);
			});
	}, [backendApi]);

	return (
		<StillView
			projectsList={projectsListState}
			categoriesList={categoriesListState}
			selectedCategories={selectedCategoriesState}
			onSelectAllCategoris={onSelectAllCategoris}
			onSelectCategory={onSelectCategory}
		/>
	);
};

Still.displayName = 'Still';
Still.defaultProps = {};

export default React.memo(Still);
