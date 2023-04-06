import React from 'react';
import type { NextPage } from 'next';

import Header from '@/layout/Header';
import About from '@/containers/About';

const AboutPage: NextPage = () => {
	return (
		<>
			<Header theme="dark" />
			<About />
		</>
	);
};

AboutPage.displayName = 'AboutPage';
AboutPage.defaultProps = {};

export default AboutPage;
