import React, { useState } from 'react';
import { useRouter } from 'next/router';

import HeaderView from './Header.view';

interface IProps {
	readonly theme?: string;
	readonly float?: boolean;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { route } = useRouter();
	const [isMenuOpenState, setIsMenuOpenState] = useState<boolean>(false);
	const [isMenuVisibleState, setIsMenuVisibleState] = useState<boolean>(false);

	const onToggleMenu = () => {
		if (isMenuOpenState) {
			setIsMenuVisibleState(() => false);
			setTimeout(() => setIsMenuOpenState(false), 500);
		} else {
			setIsMenuOpenState(() => true);
			setIsMenuVisibleState(() => true);
		}
	};

	const onCloseMenu = (linkName: string) => {
		const lowerCaseLinkName = linkName.toLowerCase();

		if (route.includes(lowerCaseLinkName)) onToggleMenu();

		if (lowerCaseLinkName === 'home' && route === '/') onToggleMenu();
	};

	return (
		<HeaderView
			isMenuOpen={isMenuOpenState}
			isMenuVisible={isMenuVisibleState}
			theme={props.theme}
			float={props.float}
			onToggleMenu={onToggleMenu}
			onCloseMenu={onCloseMenu}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
