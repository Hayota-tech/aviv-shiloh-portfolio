import React from 'react';
import type { NextPage } from 'next';

import About from '@/containers/About';

const AboutPage: NextPage = () => {
	return <About />;
};

AboutPage.displayName = 'AboutPage';
AboutPage.defaultProps = {};

export default AboutPage;
