import React, { useState } from 'react';
import { useRouter } from 'next/router';

import HeaderView from './Header.view';

interface IProps {
	readonly theme?: string;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { route } = useRouter();
	const [isMenuOpenState, setIsMenuOpenState] = useState<boolean>(false);

	const onToggleMenu = () => setIsMenuOpenState((prev) => !prev);

	const onCloseMenu = (linkName: string) => {
		const lowerCaseLinkName = linkName.toLowerCase();

		if (route.includes(lowerCaseLinkName)) onToggleMenu();

		if (lowerCaseLinkName === 'home' && route === '/') onToggleMenu();
	};

	return (
		<HeaderView
			isMenuOpen={isMenuOpenState}
			theme={props.theme}
			onToggleMenu={onToggleMenu}
			onCloseMenu={onCloseMenu}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
