import React from 'react';
import Link from 'next/link';

import classes from './Header.module.scss';
import { concatClasses } from '@/utils/component';
import SSvg from '@/ui/SSvg';
import NavMenu from '../NavMenu';

interface IProps {
	readonly isMenuOpen: boolean;
	readonly isMenuVisible: boolean;
	readonly theme?: string;
	readonly onToggleMenu: () => void;
	readonly onCloseMenu: (linkName: string) => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const containerClass = concatClasses(classes, 'container', props.isMenuOpen ? 'container--slideUp' : '');

	const menuClass = concatClasses(
		classes,
		'container__menu',
		props.isMenuOpen ? 'container__menu--active' : '',
		props.theme === 'dark' ? 'container__menu--dark' : 'container__menu--light',
	);

	const logoClass = concatClasses(
		classes,
		'container__logo',
		props.theme === 'dark' ? 'container__logo--dark' : 'container__logo--light',
		props.isMenuOpen ? 'container__logo--inMenu' : '',
	);

	const textClass = concatClasses(
		classes,
		'container__text',
		props.theme === 'dark' ? 'container__text--dark' : 'container__text--light',
		props.isMenuOpen ? 'container__text--inMenu' : '',
	);

	const mobileBurgerClass = concatClasses(
		classes,
		'mobileBurger__icon',
		props.theme === 'dark' ? 'mobileBurger__icon--dark' : 'mobileBurger__icon--light',
	);

	return (
		<header className={containerClass}>
			<div className={classes['mobileBurger']}>
				<button
					className={classes['mobileBurger__button']}
					type="button"
					onClick={props.onToggleMenu}
				>
					<SSvg name="humburger" className={mobileBurgerClass} />
				</button>
			</div>
			<button className={menuClass} type="button" onClick={props.onToggleMenu}>
				MENU
			</button>
			<Link
				className={logoClass}
				href="/"
				onClick={() => (props.isMenuOpen ? props.onCloseMenu('home') : null)}
			>
				Aviv Shiloh
			</Link>
			<span className={textClass}>©2023</span>
			{props.isMenuOpen && (
				<NavMenu
					isMenuVisible={props.isMenuVisible}
					onToggleMenu={props.onToggleMenu}
					onCloseMenu={props.onCloseMenu}
				/>
			)}
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
