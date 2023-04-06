import React from 'react';
import Link from 'next/link';

import classes from './Header.module.scss';
import { concatClasses } from '@/utils/component';

interface IProps {
	readonly theme?: string;
	readonly float?: boolean;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const containerClass = concatClasses(classes, 'container', props.float ? 'container--float' : '');

	const linkClass = concatClasses(
		classes,
		'container__link',
		props.theme === 'dark' ? 'container__link--dark' : 'container__link--light',
	);

	const textClass = concatClasses(
		classes,
		'container__text',
		props.theme === 'dark' ? 'container__text--dark' : 'container__text--light',
	);

	return (
		<header className={containerClass}>
			<Link className={linkClass} href="/about">
				MENU
			</Link>
			<Link className={linkClass} href="/">
				Aviv Shiloh
			</Link>
			<span className={textClass}>©2023</span>
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
