import React from 'react';

import type { IImage } from 'src/interfaces/image';
import VModalView from './VModal.view';

interface IProps {
	readonly image: IImage | null;
	readonly onToggleModal: () => void;
}

const VModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <VModalView image={props.image} onCloseModal={props.onToggleModal} />;
};

VModal.displayName = 'VModal';
VModal.defaultProps = {};

export default React.memo(VModal);
