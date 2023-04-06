import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NavMenu from '@/layout/NavMenu';
import classes from './Main.module.scss';

import intro from '../../../../public/images/intro.png';

interface IProps {}

const MainView: React.FC<IProps> = () => {
	return (
		<main className={classes['container']}>
			<Image className={classes['container__image']} src={intro} alt="Intro image" />
			<div className={classes['bioContainer']}>
				<span className={classes['bioContainer__bio']}>Bio</span>
				<p className={classes['bioContainer__description']}>
					Aviv Shiloh is a photographer focusing on the humane
					<br />
					aspects of social and cultural issues.
				</p>
				<Link className={classes['bioContainer__readMore']} href="/about">
					Read More
				</Link>
			</div>
		</main>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
