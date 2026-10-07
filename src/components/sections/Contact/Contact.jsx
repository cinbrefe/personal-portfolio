import { contact } from '../../../content/copy.js';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import './Contact.scss';

export default function Contact() {
	const { label, heading } = contact;

	return (
		<section id="contact" className="contact page-section" aria-labelledby="contact-title">
			<div className="container contact__inner">
				<SectionHeader name="contact" label={label} heading={heading} />
				{/* Contact content goes here */}
			</div>
		</section>
	);
}
