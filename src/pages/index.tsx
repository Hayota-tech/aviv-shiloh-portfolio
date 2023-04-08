'use client';

import React from 'react';
import type { NextPage } from 'next';

import Header from '@/layout/Header';
import Main from '@/containers/Main';

const MainPage: NextPage = () => {
	return (
		<>
			<Header theme="light" />
			<Main />
		</>
	);
};

MainPage.displayName = 'MainPage';
MainPage.defaultProps = {};

export default MainPage;
