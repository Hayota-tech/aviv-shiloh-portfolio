import React from 'react';

import NavLinkView from './NavLink.view';

interface IProps {
	readonly index: number;
	readonly selectedLinkIndex: number | null;
	readonly title: string;
	readonly randomImage: string | null;
	readonly onHover: (index: number) => void;
}

const NavLink: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<NavLinkView
			index={props.index}
			selectedLinkIndex={props.selectedLinkIndex}
			title={props.title}
			randomImage={props.randomImage}
			onHover={props.onHover}
		/>
	);
};

NavLink.displayName = 'NavLink';
NavLink.defaultProps = {};

export default React.memo(NavLink);
