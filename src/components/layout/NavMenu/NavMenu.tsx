'use client';

import React, { useState } from 'react';

import NavMenuView from './NavMenu.view';

interface IProps {}

const NavMenu: React.FC<IProps> = () => {
	const [animateState, setAnimateState] = useState<boolean>(false);
	const [linkHoverIndexState, setLinkHoverIndexState] = useState<number>(0);
	const [isVibisleState, setIsVisibleState] = useState<boolean>(false);

	const imageArrey = [
		'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/500px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
	];

	const randomIndex = Math.floor(Math.random() * imageArrey.length);

	const [selectedImageIndexState, setSelectedImageIndexState] = useState<number>(randomIndex);

	const onLinkHover = () => {
		setTimeout(() => {
			setSelectedImageIndexState((prev) => {
				if (prev === imageArrey.length - 1) {
					return 0;
				} else {
					return prev + 1;
				}
			});

			setAnimateState(() => true);
		}, 50);

		setAnimateState(() => false);
	};

	const onHomeLinkHover = () => {
		setTimeout(() => {
			setLinkHoverIndexState(() => 0);
			setIsVisibleState(() => true);
		}, 50);
		onLinkHover();
	};

	const onPortfolioLinkHover = () => {
		setTimeout(() => {
			setLinkHoverIndexState(() => 1);
			setIsVisibleState(() => true);
		}, 50);
		onLinkHover();
	};

	const onAboutLinkHover = () => {
		setTimeout(() => {
			setLinkHoverIndexState(() => 2);
			setIsVisibleState(() => true);
		}, 50);
		onLinkHover();
	};

	const onContactLinkHover = () => {
		setTimeout(() => {
			setLinkHoverIndexState(() => 3);
			setIsVisibleState(() => true);
		}, 50);
		onLinkHover();
	};

	const onLinkHoverLeaveState = () => {
		setIsVisibleState(() => false);
	};

	return (
		<NavMenuView
			selectedImageIndex={selectedImageIndexState}
			animate={animateState}
			linkHoverIndex={linkHoverIndexState}
			isVisible={isVibisleState}
			onContactLinkHover={onContactLinkHover}
			onAboutLinkHover={onAboutLinkHover}
			onPortfolioLinkHover={onPortfolioLinkHover}
			onHomeLinkHover={onHomeLinkHover}
			onLinkHoverLeave={onLinkHoverLeaveState}
		/>
	);
};

NavMenu.displayName = 'NavMenu';
NavMenu.defaultProps = {};

export default React.memo(NavMenu);
