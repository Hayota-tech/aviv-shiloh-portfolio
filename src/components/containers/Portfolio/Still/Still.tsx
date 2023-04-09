import React from 'react';

import StillView from './Still.view';

interface IProps {}

const Still: React.FC<IProps> = () => {
	return <StillView />;
};

Still.displayName = 'Still';
Still.defaultProps = {};

export default React.memo(Still);
