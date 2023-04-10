import React from 'react';
import Link from 'next/link';

import classes from './Project.module.scss';
import { IProject } from 'src/interfaces/responses';
import SSvg from '@/ui/SSvg';
import ProjectCarousel from './ProjectCarousel';

interface IProps {
	readonly projectInfo: IProject | undefined;
}

const ProjectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const projectName = props.projectInfo?.attributes.name;
	const projectDate = props.projectInfo?.attributes.date.split('-')[0] ?? '';
	const projectDescription = props.projectInfo?.attributes.description;

	return (
		<section className={classes['container']}>
			<div className={classes['infoContainer']}>
				<div className={classes['backButtonContainer']}>
					<SSvg className={classes['backButtonContainer__icon']} name="arrowLeft" />
					<Link className={classes['backButtonContainer__text']} href={'/'}>
						Back
					</Link>
				</div>
				<h2 className={classes['infoContainer__name']}>{projectName}</h2>
				<span className={classes['infoContainer__date']}>{projectDate}</span>
				<p className={classes['infoContainer__description']}>{projectDescription}</p>
				<div className={classes['scrollContainer']}>
					<span className={classes['scrollContainer__text']}>Scroll</span>
					<SSvg className={classes['scrollContainer__icon']} name="arrow" />
				</div>
			</div>
			<div className={classes['imageSlideContainer']}>
				<ProjectCarousel imagesList={props.projectInfo?.attributes?.media?.data ?? []} />
			</div>
		</section>
	);
};

ProjectView.displayName = 'ProjectView';
ProjectView.defaultProps = {};

export default React.memo(ProjectView);
