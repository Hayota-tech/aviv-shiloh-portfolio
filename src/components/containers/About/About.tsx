//use client side rendering
'use client';

import React, { useState, useEffect } from 'react';

import AboutView from './About.view';

interface IProps {}

const About: React.FC<IProps> = () => {
	const [lastExhibionPositionState, setLastExhibionPositionState] = useState<number>(0);
	const handleScroll = (e: React.UIEvent<HTMLElement>) => {
		const target = e.target as HTMLElement;
		const lastExhibionPosition = (target.scrollTop / target.scrollHeight) * 200;
		setLastExhibionPositionState(() => lastExhibionPosition);
	};

	useEffect(() => {
		document.body?.scrollTo(0, 0);
	}, []);

	return <AboutView handleScroll={handleScroll} lastExhibionPosition={lastExhibionPositionState} />;
};

About.displayName = 'About';
About.defaultProps = {};

export default React.memo(About);
