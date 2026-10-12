import { projects } from '../../../content/projects.js';
import Section from '../../ui/Section.jsx';
import AgencyProjects from './AgencyProjects.jsx';
import CurrentProjects from './CurrentProjects.jsx';
import './Projects.scss';

export default function Projects() {
	const { label, heading, current, agency } = projects;

	return (
		<Section name="projects" label={label} heading={heading}>
			<div className="projects__lists">
				<CurrentProjects heading={current.heading} period={current.period} items={current.items} />
				<AgencyProjects heading={agency.heading} items={agency.items} otherClients={agency.otherClients} />
			</div>
		</Section>
	);
}
