//use client side rendering
'use client';

import React from 'react';
import { useEffect } from 'react';

import AboutView from './About.view';

interface IProps {}

const About: React.FC<IProps> = () => {
	useEffect(() => {
		document.body?.scrollTo(0, 0);
	}, []);

	return <AboutView />;
};

About.displayName = 'About';
About.defaultProps = {};

export default React.memo(About);
