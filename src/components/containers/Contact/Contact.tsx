import React from 'react';

import ContactView from './Contact.view';

interface IProps {}

const Contact: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <ContactView />;
};

Contact.displayName = 'Contact';
Contact.defaultProps = {};

export default React.memo(Contact);
