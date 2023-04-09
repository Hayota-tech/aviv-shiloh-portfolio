import React from 'react';
import Image from 'next/image';

import classes from './VModal.module.scss';

interface IProps {
	readonly onCloseModal: () => void;
	readonly url: string;
}

const VModalView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['backdrop']} onClick={props.onCloseModal}>
			<Image
				width={100}
				height={100}
				className={classes['modal']}
				src={props.url}
				alt={''}
				onClick={(e) => e.stopPropagation()}
			/>
		</div>
	);
};

VModalView.displayName = 'VModalView';
VModalView.defaultProps = {};

export default React.memo(VModalView);
