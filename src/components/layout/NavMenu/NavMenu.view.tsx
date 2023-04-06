import React from 'react';

import Header from '../Header';
import NavLink from './NavLink';
import { navList } from '../../../data/nav-list';

import classes from './NavMenu.module.scss';

interface IProps {
	readonly selectedLinkIndex: number | null;
	readonly randomImage: string | null;
	readonly onLinkHover: (index: number) => void;
}

const NavMenuView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<Header theme="light" />
			<div className={classes['innerContainer']}>
				<div className={classes['linksContainer']}>
					{navList.map((navItem, index) => (
						<NavLink
							key={navItem}
							index={index}
							selectedLinkIndex={props.selectedLinkIndex}
							title={navItem}
							randomImage={props.randomImage}
							onHover={props.onLinkHover}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

NavMenuView.displayName = 'NavMenuView';
NavMenuView.defaultProps = {};

export default React.memo(NavMenuView);
