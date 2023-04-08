import React from 'react';
import type { NextPage } from 'next';

import Header from '@/layout/Header';
import Contact from '@/containers/Contact';

const ContactPage: NextPage = () => {
	return (
		<>
			<Header theme="light" />
			<Contact />
		</>
	);
};

ContactPage.displayName = 'ContactPage';
ContactPage.defaultProps = {};

export default ContactPage;
