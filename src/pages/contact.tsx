import React from 'react';
import type { NextPage } from 'next';

import Contact from '@/containers/Contact';

const ContactPage: NextPage = () => {
	return <Contact />;
};

ContactPage.displayName = 'ContactPage';
ContactPage.defaultProps = {};

export default ContactPage;
