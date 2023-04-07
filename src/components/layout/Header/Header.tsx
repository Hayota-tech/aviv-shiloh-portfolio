import React, { useState } from 'react';

import HeaderView from './Header.view';

interface IProps {
	readonly theme?: string;
	readonly float?: boolean;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isMenuOpenState, setIsMenuOpenState] = useState<boolean>(false);

	const onToggleMenu = () => setIsMenuOpenState((prev) => !prev);

	return (
		<HeaderView
			isMenuOpen={isMenuOpenState}
			theme={props.theme}
			float={props.float}
			onToggleMenu={onToggleMenu}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
