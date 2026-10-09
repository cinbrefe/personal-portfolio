import { a11y, contact } from '../../../content/copy.js';
import ArrowIcon from '../../ui/ArrowIcon.jsx';
import ContactIcon from '../../ui/ContactIcon.jsx';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import './Contact.scss';

export default function Contact() {
	const { label, heading, links } = contact;

	return (
		<section id="contact" className="contact page-section" aria-labelledby="contact-title">
			<div className="container contact__inner">
				<SectionHeader name="contact" label={label} heading={heading} />
				<ul className="contact__list">
					{links.map((link) => (
						<li key={link.label} className="contact__item">
							<a
								className="contact__link icon-link"
								href={link.href}
								target={link.newTab ? '_blank' : undefined}
								rel={link.newTab ? 'noopener noreferrer' : undefined}
								aria-label={link.newTab ? `${link.label} ${a11y.newTab}` : undefined}
							>
								{link.icon && <ContactIcon name={link.icon} className="icon-link__icon contact__icon" />}
								{link.label}
								<ArrowIcon direction="arrow-up-right" className="icon-link__icon contact__icon" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
