import { projects } from '../../../content/projects.js';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import CurrentProjects from './CurrentProjects.jsx';
import './Projects.scss';

export default function Projects() {
	const { label, heading, current } = projects;

	return (
		<section id="projects" className="projects page-section" aria-labelledby="projects-title">
			<div className="container projects__inner">
				<SectionHeader name="projects" label={label} heading={heading} />
				<CurrentProjects heading={current.heading} period={current.period} items={current.items} />
			</div>
		</section>
	);
}
