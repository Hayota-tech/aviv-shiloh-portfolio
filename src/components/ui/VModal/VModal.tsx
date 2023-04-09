import React from 'react';

import VModalView from './VModal.view';

interface IProps {
	readonly onCloseModal: () => void;
	readonly url: string;
}

const VModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <VModalView onCloseModal={props.onCloseModal} url={props.url} />;
};

VModal.displayName = 'VModal';
VModal.defaultProps = {};

export default React.memo(VModal);
