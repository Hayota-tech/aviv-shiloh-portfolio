import React from 'react';
import Image from 'next/image';

import portrait from '../../../../public/images/aviv-portrait.png';

import classes from './About.module.scss';
import AboutExhibit from './AboutExhibit';
import { IVAboutText } from 'src/interfaces/responses';

interface IProps {
	readonly lastExhibionPosition: number;
	readonly textList: IVAboutText | undefined;
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

	const style = {
		WebkitMaskImage: `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${
			100 - props.lastExhibionPosition + '%'
		})`,
	};

	let lastExhibionPosition = props.lastExhibionPosition;

	return (
		<section className={classes['container']}>
			<Image className={classes['container__image']} src={portrait} alt="Aviv Shiloh" />

			<div className={classes['innerContainer']}>
				<div className={classes['infoContainer']}>
					<h1 className={classes['infoContainer__title']}>{props.textList?.attributes.title}</h1>

					<p className={classes['infoContainer__text']}>{props.textList?.attributes.description}</p>
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
