import React from 'react';

import ContactView from './Contact.view';

interface IProps {}

const Contact: React.FC<IProps> = () => {
	const onSocialNavigate = (url: string) => {
		window.open(url, '_blank');
	};
	return <ContactView onSocialNavigate={onSocialNavigate} />;
};

Contact.displayName = 'Contact';
Contact.defaultProps = {};

export default React.memo(Contact);
