import React from 'react';

import HeaderView from './Header.view';

interface IProps {
	readonly theme?: string;
	readonly float?: boolean;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <HeaderView theme={props.theme} float={props.float} />;
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
