import { contact } from '../../../content/copy.js';
import ExternalLink from '../../ui/ExternalLink.jsx';
import Icon from '../../ui/Icon.jsx';
import Section from '../../ui/Section.jsx';
import './Contact.scss';

export default function Contact() {
	const { label, heading, links } = contact;

	return (
		<Section name="contact" label={label} heading={heading}>
			<ul className="contact__list">
				{links.map((link) => (
					<li key={link.label} className="contact__item">
						{link.newTab ? (
							<ExternalLink className="contact__link icon-link" href={link.href} label={link.label}>
								{link.icon && <Icon name={link.icon} className="icon-link__icon contact__icon" />}
								{link.label}
								<Icon name="arrow-up-right" className="icon-link__icon contact__icon" />
							</ExternalLink>
						) : (
							<a className="contact__link icon-link" href={link.href}>
								{link.icon && <Icon name={link.icon} className="icon-link__icon contact__icon" />}
								{link.label}
								<Icon name="arrow-up-right" className="icon-link__icon contact__icon" />
							</a>
						)}
					</li>
				))}
			</ul>
		</Section>
	);
}
