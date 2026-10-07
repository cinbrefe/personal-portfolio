import { education } from '../../../content/copy.js';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import './Education.scss';

export default function Education() {
	const { label, heading } = education;

	return (
		<section id="education" className="education page-section" aria-labelledby="education-title">
			<div className="container education__inner">
				<SectionHeader name="education" label={label} heading={heading} />
				{/* Education content goes here */}
			</div>
		</section>
	);
}
