'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './NavMenu.module.scss';

interface IProps {
	readonly selectedImageIndex: number;
	readonly onLinkHover: () => void;
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
					<Link
						href="/about"
						className={classes['linksContainer__link']}
						onMouseEnter={props.onLinkHover}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={classes['linksContainer__link']}
						onMouseEnter={props.onLinkHover}
					>
						Portfolio
					</Link>
					<Link
						href="/about"
						className={classes['linksContainer__link']}
						onMouseEnter={props.onLinkHover}
					>
						About
					</Link>
					<Link
						href="/about"
						className={classes['linksContainer__link']}
						onMouseEnter={props.onLinkHover}
					>
						Contact
					</Link>
				</div>

				<Image
					className={classes['innerContainer__image']}
					src={imageArrey[props.selectedImageIndex ?? 0]}
					width={257}
					height={144}
					alt="Navigtion Menu"
				/>
			</div>
		</section>
	);
};

NavMenuView.displayName = 'NavMenuView';
NavMenuView.defaultProps = {};

export default React.memo(NavMenuView);
