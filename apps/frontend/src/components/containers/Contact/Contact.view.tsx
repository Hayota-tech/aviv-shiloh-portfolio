import React from 'react';

import Header from '@/layout/Header';
import type { IContact } from '@/interfaces/responses';
import { socialMedia } from '../../../data/social-media';

import classes from './Contact.module.scss';

interface IProps {
	readonly onSocialNavigate: (url: string) => void;
	readonly contactData: IContact | undefined;
}

const ContactView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const address = props.contactData?.attributes.address;
	const city = props.contactData?.attributes.city;
	const country = props.contactData?.attributes.country;
	const email = props.contactData?.attributes.email;

	const placeText = [{ name: 'Aviv Shiloh' }, { name: address }, { name: city }, { name: country }];

	return (
		<section className={classes['container']}>
			<Header theme="light" />

			<div className={classes['innerContainer']}>
				<h3 className={classes['innerContainer__title']}>CONTACT</h3>
				<div className={classes['contactContainer']}>
					<div className={classes['leftSide']}>
						<span className={classes['leftSide__title']}>WHERE</span>
						{placeText.map((element, i) => (
							<span key={i} className={classes['leftSide__adressText']}>
								{element.name}
							</span>
						))}
						<div className={classes['mailWeb']}>
							<span className={classes['mailWeb__title']}>MAIL</span>
							<a className={classes['mailWeb__mail']} href={`mailto:${email}`}>
								{email}
							</a>
						</div>
					</div>
					<div className={classes['rightSide']}>
						<span className={classes['rightSide__title']}>SOCIAL</span>
						{socialMedia.map((element, i) => (
							<button
								key={i}
								className={classes['rightSide__socialButton']}
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
			</div>
		</section>
	);
};

ContactView.displayName = 'ContactView';
ContactView.defaultProps = {};

export default React.memo(ContactView);
