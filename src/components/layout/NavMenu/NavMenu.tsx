'use client';

import React, { useState } from 'react';

import NavMenuView from './NavMenu.view';

interface IProps {}

const NavMenu: React.FC<IProps> = () => {
	const imageArrey = [
		'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/500px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
	];

	const randomIndex = Math.floor(Math.random() * imageArrey.length);

	const [selectedImageIndexState, setSelectedImageIndexState] = useState<number>(randomIndex);
	const [selectedLinkIndexState, setSelectedLinkIndexState] = useState<number | null>(null);
	const [randomImageState, setRandomImageState] = useState<string | null>(null);

	const onLinkHover = (index: number) => {
		if (index !== -1) {
			setSelectedLinkIndexState(() => index);
			setSelectedImageIndexState((prev) => {
				if (prev === imageArrey.length - 1) {
					return 0;
				} else {
					return prev + 1;
				}
			});
			setRandomImageState(() => imageArrey[selectedImageIndexState] ?? null);
		} else {
			setSelectedLinkIndexState(null);
		}
	};

	return (
		<NavMenuView
			selectedImageIndex={selectedImageIndexState}
			selectedLinkIndex={selectedLinkIndexState}
			randomImage={randomImageState}
			onLinkHover={onLinkHover}
		/>
	);
};

NavMenu.displayName = 'NavMenu';
NavMenu.defaultProps = {};

export default React.memo(NavMenu);
