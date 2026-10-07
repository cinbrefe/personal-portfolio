import { experience } from '../../../content/copy.js';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import './Experience.scss';

export default function Experience() {
	const { label, heading } = experience;

	return (
		<section id="experience" className="experience page-section" aria-labelledby="experience-title">
			<div className="container experience__inner">
				<SectionHeader name="experience" label={label} heading={heading} />
			{/* Experience content goes here */}
			</div>
		</section>
	);
}