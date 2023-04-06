import React from 'react';

import classes from './Main.module.scss';
import Image from 'next/image';

import intro from '../../../../public/images/intro.png';

interface IProps {}

const MainView: React.FC<IProps> = () => {
	return (
		<main className={classes['container']}>
			<Image
				src={intro}
				alt="Aviv Shiloh"
				width={685}
				height={685}
				style={{
					width: '100%',
					height: '100%',
					objectPosition: 'center',
					objectFit: 'cover',
				}}
			/>
		</main>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
