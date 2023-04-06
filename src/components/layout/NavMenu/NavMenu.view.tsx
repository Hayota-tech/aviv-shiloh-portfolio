'use client';

import React from 'react';
import Image from 'next/image';

import classes from './NavMenu.module.scss';
import NavLink from './NavLink';

interface IProps {
	readonly selectedImageIndex: number;
	readonly onHomeLinkHover: () => void;
	readonly onAboutLinkHover: () => void;
	readonly onContactLinkHover: () => void;
	readonly onPortfolioLinkHover: () => void;
	readonly onLinkHoverLeave: () => void;

	readonly isVisible: boolean;
	readonly linkHoverIndex: number;
	readonly animate: boolean;
}

const NavMenuView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const imageArrey = [
		'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/500px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
	];

	return (
		<section className={classes['container']}>
			<div className={classes['innerContainer']}>
				<div className={classes['linksContainer']}>
					<NavLink
						selectedImageIndex={props.selectedImageIndex}
						isVisible={props.isVisible}
						linkNumber={0}
						animate={props.animate}
						linkHoverIndex={props.linkHoverIndex}
						onMouseEnter={props.onHomeLinkHover}
						onMouseLeave={props.onLinkHoverLeave}
					>
						HOME
					</NavLink>

					<NavLink
						selectedImageIndex={props.selectedImageIndex}
						isVisible={props.isVisible}
						linkNumber={1}
						animate={props.animate}
						linkHoverIndex={props.linkHoverIndex}
						onMouseEnter={props.onPortfolioLinkHover}
						onMouseLeave={props.onLinkHoverLeave}
					>
						PORTFOLIO
					</NavLink>

					<NavLink
						selectedImageIndex={props.selectedImageIndex}
						isVisible={props.isVisible}
						linkNumber={2}
						animate={props.animate}
						linkHoverIndex={props.linkHoverIndex}
						onMouseEnter={props.onAboutLinkHover}
						onMouseLeave={props.onLinkHoverLeave}
					>
						ABOUT
					</NavLink>

					<NavLink
						selectedImageIndex={props.selectedImageIndex}
						isVisible={props.isVisible}
						linkNumber={3}
						animate={props.animate}
						linkHoverIndex={props.linkHoverIndex}
						onMouseEnter={props.onContactLinkHover}
						onMouseLeave={props.onLinkHoverLeave}
					>
						CONTACT
					</NavLink>

					<Image
						className={`${classes['linksContainer__mobileImage']} ${classes['animateImage']}`}
						src={imageArrey[props.selectedImageIndex ?? 0]}
						width={257}
						height={144}
						alt="Navigtion Menu"
					/>
				</div>
			</div>
		</section>
	);
};

NavMenuView.displayName = 'NavMenuView';
NavMenuView.defaultProps = {};

export default React.memo(NavMenuView);
