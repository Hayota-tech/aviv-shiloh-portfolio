import React from 'react';
import type { NextPage } from 'next';

import Main from '@/containers/Main';

const MainPage: NextPage = () => {
	return <Main />;
};

MainPage.displayName = 'MainPage';
MainPage.defaultProps = {};

export default MainPage;
