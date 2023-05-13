import React, { useState } from 'react';
import { useRouter } from 'next/router';

import HeaderView from './Header.view';

import { addToSessionStorage, getFromSessionStorage } from '../../../utils/session-storage';

interface IProps {
	readonly theme?: string;
	readonly float?: boolean;
	readonly fromNavMenu?: boolean;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { route } = useRouter();
	const [isMenuOpenState, setIsMenuOpenState] = useState<boolean>(false);
	const [isMenuVisibleState, setIsMenuVisibleState] = useState<boolean>(false);

	const onToggleMenu = () => {
		if (isMenuOpenState) {
			addToSessionStorage('isMenuOpen', false);
			setIsMenuVisibleState(() => getFromSessionStorage('isMenuOpen'));
			setTimeout(() => setIsMenuOpenState(getFromSessionStorage('isMenuOpen')), 500);
		} else {
			addToSessionStorage('isMenuOpen', true);
			setTimeout(() => document.body?.scrollTo(0, 0), 1000);
			setIsMenuOpenState(() => getFromSessionStorage('isMenuOpen'));
			setIsMenuVisibleState(() => getFromSessionStorage('isMenuOpen'));
		}
	};

	const onCloseMenu = (linkName: string) => {
		const lowerCaseLinkName = linkName.toLowerCase();

		if (route.includes(lowerCaseLinkName)) {
			onToggleMenu();
		}

		if (lowerCaseLinkName === 'home' && route === '/') {
			onToggleMenu();
		}
	};

	return (
		<HeaderView
			isMenuOpen={isMenuOpenState}
			isMenuVisible={isMenuVisibleState}
			theme={props.theme}
			float={props.float}
			fromNavMenu={props.fromNavMenu}
			onToggleMenu={onToggleMenu}
			onCloseMenu={onCloseMenu}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
