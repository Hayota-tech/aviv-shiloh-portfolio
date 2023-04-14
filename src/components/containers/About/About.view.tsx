import React from 'react';
import Image from 'next/image';

import portrait from '../../../../public/images/aviv-portrait.png';

import classes from './About.module.scss';
import AboutExhibit from './AboutExhibit';

interface IProps {
	readonly lastExhibionPosition: number;
	readonly handleScroll: (e: React.UIEvent<HTMLElement>) => void;
}

const AboutView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const dummyData = [
		{
			title: 'Big Apple',
			exhibition: 'International Photography Festival',
			startDate: 'NOVEMBER 28 - 2019',
			endDate: 'DECEMBER 7 - 2019',
		},
		{
			title: 'Big Apple',
			exhibition: 'International Photography Festival',
			startDate: 'NOVEMBER 28 - 2019',
			endDate: 'DECEMBER 7 - 2019',
		},
		{
			title: 'Big Apple',
			exhibition: 'International Photography Festival',
			startDate: 'NOVEMBER 28 - 2019',
		},
		{
			title: 'Big Apple',
			exhibition: 'International Photography Festival',
			startDate: 'NOVEMBER 28 - 2019',
			endDate: 'DECEMBER 7 - 2019',
		},
		{
			title: 'Big Apple',
			exhibition: 'International Photography Festival',
			startDate: 'NOVEMBER 28 - 2019',
			endDate: 'DECEMBER 7 - 2019',
		},
		{
			title: 'Big Apple',
			exhibition: 'International Photography Festival',
			startDate: 'NOVEMBER 28 - 2019',
			endDate: 'DECEMBER 7 - 2019',
		},
		{
			title: 'Big Apple',
			exhibition: 'International Photography Festival',
			startDate: 'NOVEMBER 28 - 2019',
			endDate: 'DECEMBER 7 - 2019',
		},
	];

	const dummyText = [
		{
			text: 'He studied at the School of Photography at the Israel',
		},
		{
			text: 'Institute of Technology (Technion) and at the Faculty of Arts film school at Beit Berl Collage.',
		},
		{
			text: 'Shiloh is currently based in Tel-Aviv and works around the world as a commercial photographer and cinematographer, shooting ads, music videos and live shows both as a cameraman and as a video producer.',
		},
		{
			text: 'Traveling the world in an ongoing journey, Shiloh observes and documents human behaviour and relationships and brings his own emotions into his work.',
		},
	];

	const style = {
		WebkitMaskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${
			100 - props.lastExhibionPosition + '%'
		})`,
	};

	return (
		<section className={classes['container']}>
			<Image className={classes['container__image']} src={portrait} alt="Aviv Shiloh" />

			<div className={classes['innerContainer']}>
				<div className={classes['infoContainer']}>
					<h1 className={classes['infoContainer__title']}>
						Aviv Shiloh is a photographer focusing on the humane aspects of social and cultural
						issues.
					</h1>

					{dummyText.map((textItem, key) => (
						<p key={key} className={classes['infoContainer__text']}>
							{textItem.text}
						</p>
					))}
				</div>
				<hr className={classes['divider']} />
				<div className={classes['exhibitionsContainer']}>
					<h1 className={classes['exhibitionsContainer__title']}>Exhibitions</h1>

					<div className={classes['innerExihitions']} style={style} onScroll={props.handleScroll}>
						{dummyData.map((exhibition, key) => (
							<AboutExhibit
								key={key}
								title={exhibition.title}
								exhibition={exhibition.exhibition}
								startDate={exhibition.startDate}
								endDate={exhibition.endDate}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

AboutView.displayName = 'AboutView';
AboutView.defaultProps = {};

export default React.memo(AboutView);
