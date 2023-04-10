import React from 'react';
import Image from 'next/image';

import { imageUrl } from '@/utils/image-url';
import type { IImage } from 'src/interfaces/image';

import classes from './VModal.module.scss';

interface IProps {
	readonly image: IImage | null;
	readonly onCloseModal: () => void;
}

const VModalView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['backdrop']} onClick={props.onCloseModal}>
			<Image
				width={100}
				height={100}
				className={classes['modal']}
				src={props.image ? imageUrl(props.image.attributes.url) : 'public/images/placeholder.png'}
				alt={props.image ? props.image.attributes.caption : 'Project Image'}
				onClick={(e) => e.stopPropagation()}
			/>
		</div>
	);
};

VModalView.displayName = 'VModalView';
VModalView.defaultProps = {};

export default React.memo(VModalView);
