import React from 'react';

import LoaderView from './Loader.view';

interface IProps {}

const Loader: React.FC<IProps> = () => {
	return <LoaderView />;
};

Loader.displayName = 'Loader';
Loader.defaultProps = {};

export default React.memo(Loader);
