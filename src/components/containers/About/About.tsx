//use client side rendering
'use client';

import React, { useState, useEffect } from 'react';

import AboutView from './About.view';

interface IProps {}

const About: React.FC<IProps> = () => {
	const [bottomExhibionsPrecentState, setBottomExhibionsPrecentState] = useState<number>(0);
	const handleScroll = (e: React.UIEvent<HTMLElement>) => {
		const target = e.target as HTMLElement;
		const bottomPrecent = (target.scrollTop / target.scrollHeight) * 200;
		setBottomExhibionsPrecentState(bottomPrecent);
	};

	useEffect(() => {
		document.body?.scrollTo(0, 0);
	}, []);

	return <AboutView handleScroll={handleScroll} bottomExhibionsPrecent={bottomExhibionsPrecentState} />;
};

About.displayName = 'About';
About.defaultProps = {};

export default React.memo(About);
