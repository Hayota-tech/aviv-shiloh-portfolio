import React, { useState, useEffect } from 'react';

import type { AxiosResponse } from 'axios';
import type { IVAboutText } from 'src/interfaces/responses';
import { backendApi } from '@/utils/http';

import AboutView from './About.view';

interface IProps {}

const About: React.FC<IProps> = () => {
	const [lastExhibionPositionState, setLastExhibionPositionState] = useState<number>(0);
	const [textListState, setTextListState] = useState<IVAboutText | undefined>();

	const handleScroll = (e: React.UIEvent<HTMLElement>) => {
		const target = e.target as HTMLElement;
		const lastExhibionPosition = (target.scrollTop / target.scrollHeight) * 200;

		setLastExhibionPositionState(() => lastExhibionPosition);
	};

	useEffect(() => {
		document.body?.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		backendApi
			.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/about?fields[0]=title&fields[1]=description`)
			.then((response: AxiosResponse) => {
				setTextListState(() => response.data.data);
			});
	}, [backendApi]);

	return (
		<AboutView
			handleScroll={handleScroll}
			lastExhibionPosition={lastExhibionPositionState}
			textList={textListState}
		/>
	);
};

About.displayName = 'About';
About.defaultProps = {};

export default React.memo(About);
