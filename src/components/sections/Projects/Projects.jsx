import { projects } from '../../../content/projects.js';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import './Projects.scss';

export default function Projects() {
	const { label, heading } = projects;

	return (
		<section id="projects" className="projects page-section" aria-labelledby="projects-title">
			<div className="container projects__inner">
				<SectionHeader name="projects" label={label} heading={heading} />
				{/* Project content goes here */}
			</div>
		</section>
	);
}
