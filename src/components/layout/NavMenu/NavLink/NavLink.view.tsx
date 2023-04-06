import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { concatClasses } from '@/utils/component';

import classes from './NavLink.module.scss';

interface IProps {
	readonly index: number;
	readonly selectedLinkIndex: number | null;
	readonly title: string;
	readonly randomImage: string | null;
	readonly onHover: (index: number) => void;
}

const NavLinkView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const isImageVisible = props.index === props.selectedLinkIndex;
	const imageClasses = concatClasses(
		classes,
		'container__image',
		isImageVisible ? 'container__image--visible' : 'container__image--hidden',
	);

	return (
		<div className={classes['container']}>
			{isImageVisible && (
				<Image
					className={imageClasses}
					src={props.randomImage ?? '/images/placeholder.png'}
					width={257}
					height={144}
					alt="Navigtion Menu"
				/>
			)}
			<Link
				className={classes['container__link']}
				href="/about"
				onMouseEnter={() => props.onHover(props.index)}
				onMouseLeave={() => props.onHover(-1)}
			>
				{props.title}
			</Link>
		</div>
	);
};

NavLinkView.displayName = 'NavLinkView';
NavLinkView.defaultProps = {};

export default React.memo(NavLinkView);
