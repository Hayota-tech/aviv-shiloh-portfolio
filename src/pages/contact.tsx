import React from 'react';
import type { NextPage } from 'next';

import Header from '@/layout/Header';
import Contact from '@/containers/Contact';

const ContactPage: NextPage = () => {
	return (
		<>
			<Header theme="light" />
			<Contact />
			<style jsx global>
				{`
					body {
						background: #268741;
					}
				`}
			</style>
		</>
	);
};

ContactPage.displayName = 'ContactPage';
ContactPage.defaultProps = {};

export default ContactPage;
