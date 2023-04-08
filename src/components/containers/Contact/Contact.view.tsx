import React from 'react';

import { socialMedia } from '../../../data/social-media';
import { address } from '../../../data/address';

import classes from './Contact.module.scss';

interface IProps {
	readonly onSocialNavigate: (_: string) => void;
}

const ContactView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<span className={classes['container__title']}>CONTACT</span>
			<div className={classes['innerContainer']}>
				<div className={classes['leftContainer']}>
					<span className={classes['leftContainer__title']}>WHERE</span>
					{address.map((element, i) => (
						<span key={i} className={classes['leftContainer__adressText']}>
							{element.name}
						</span>
					))}
					<div className={classes['mailDesktop']}>
						<span className={classes['mailDesktop__title']}>MAIL</span>
						<a className={classes['mailDesktop__mail']} href="mailto:aviv.shiloh@gmail.com">
							aviv.shiloh@gmail.com
						</a>
					</div>
				</div>
				<div className={classes['rightContainer']}>
					<span className={classes['rightContainer__title']}>SOCIAL</span>
					{socialMedia.map((element, i) => (
						<button
							key={i}
							className={classes['rightContainer__socialButton']}
							type="button"
							onClick={() => props.onSocialNavigate(element.url)}
						>
							{element.name}
						</button>
					))}
				</div>
			</div>
			<div className={classes['mailMobile']}>
				<span className={classes['mailMobile__title']}>MAIL</span>
				<a className={classes['mailMobile__mail']} href="mailto:aviv.shiloh@gmail.com">
					aviv.shiloh@gmail.com
				</a>

				<span className={classes['mobileSignature']}>©2023 AVIV SHILOH</span>
			</div>
		</section>
	);
};

ContactView.displayName = 'ContactView';
ContactView.defaultProps = {};

export default React.memo(ContactView);
