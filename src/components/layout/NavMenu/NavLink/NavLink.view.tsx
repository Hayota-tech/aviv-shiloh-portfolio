import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './NavLink.module.scss';

interface IProps {
	readonly selectedImageIndex?: number;
	readonly isVisible?: boolean;
	readonly linkHoverIndex?: number;
	readonly linkNumber?: number;
	readonly onMouseLeave?: () => void;
	readonly onMouseEnter?: () => void;
	readonly animate?: boolean;
}

const NavLinkView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const completedClass = props.animate ? classes['animateImage'] : '';

	const imageArrey = [
		'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/500px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
	];

	return (
		<div className={classes['linkContainer']}>
			{props.isVisible && props.linkHoverIndex === props.linkNumber ? (
				<Image
					className={`${classes['linkContainer__image']} ${completedClass}  `}
					src={imageArrey[props.selectedImageIndex ?? 0]}
					width={257}
					height={144}
					alt="Navigtion Menu"
				/>
			) : null}
			<Link
				href="/about"
				className={classes['linkContainer__link']}
				onMouseEnter={props.onMouseEnter}
				onMouseLeave={props.onMouseLeave}
			>
				{props.children}
			</Link>
		</div>
	);
};

NavLinkView.displayName = 'NavLinkView';
NavLinkView.defaultProps = {};

export default React.memo(NavLinkView);
