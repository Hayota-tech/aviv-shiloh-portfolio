import React from 'react';

import NavLinkView from './NavLink.view';

interface IProps {
	readonly selectedImageIndex?: number;
	readonly isVisible?: boolean;
	readonly linkHoverIndex?: number;
	readonly linkNumber?: number;
	readonly onMouseLeave?: () => void;
	readonly onMouseEnter?: () => void;
	readonly animate?: boolean;
}

const NavLink: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<NavLinkView
			selectedImageIndex={props.selectedImageIndex}
			isVisible={props.isVisible}
			linkNumber={props.linkNumber}
			animate={props.animate}
			linkHoverIndex={props.linkHoverIndex}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
		>
			{props.children}
		</NavLinkView>
	);
};

NavLink.displayName = 'NavLink';
NavLink.defaultProps = {};

export default React.memo(NavLink);
