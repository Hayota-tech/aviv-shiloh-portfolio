import React from 'react';
import Image from 'next/image';

import NavLink from './NavLink';
import { navList } from '../../../data/nav-list';

import classes from './NavMenu.module.scss';
import Header from '../Header';

interface IProps {
	readonly selectedLinkIndex: number | null;
	readonly randomImage: string | null;
	readonly onLinkHover: (index: number) => void;
	readonly onToggleMenu: () => void;
	readonly onCloseMenu: (linkName: string) => void;
}

const NavMenuView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<Header theme="light" />

			<div className={classes['innerContainer']}>
				<div className={classes['linksContainer']}>
					{navList.map((navItem, index) => (
						<NavLink
							key={navItem.title}
							index={index}
							selectedLinkIndex={props.selectedLinkIndex}
							title={navItem.title}
							url={navItem.url}
							randomImage={props.randomImage}
							onHover={props.onLinkHover}
							onToggleMenu={props.onToggleMenu}
							onCloseMenu={props.onCloseMenu}
						/>
					))}
				</div>
				<Image
					className={classes['innerContainer__mobileImage']}
					src={props.randomImage ?? '/images/placeholder.png'}
					width={326}
					height={184}
					alt="Navigtion Menu"
				/>
			</div>
		</section>
	);
};

NavMenuView.displayName = 'NavMenuView';
NavMenuView.defaultProps = {};

export default React.memo(NavMenuView);
