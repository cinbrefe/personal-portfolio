import { projects } from '../../../content/projects.js';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import CurrentProjects from './CurrentProjects.jsx';
import AgencyProjects from './AgencyProjects.jsx';
import './Projects.scss';

export default function Projects() {
	const { label, heading, current, agency } = projects;

	return (
		<section id="projects" className="projects page-section" aria-labelledby="projects-title">
			<div className="container projects__inner">
				<SectionHeader name="projects" label={label} heading={heading} />
				<div className="projects__lists">
					<CurrentProjects heading={current.heading} period={current.period} items={current.items} />
					<AgencyProjects heading={agency.heading} items={agency.items} otherClients={agency.otherClients} />
				</div>
			</div>
		</section>
	);
}
