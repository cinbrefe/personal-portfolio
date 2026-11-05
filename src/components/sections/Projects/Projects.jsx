import { projects } from '@/content/projects.js';
import AgencyProjects from '@/components/sections/Projects/AgencyProjects.jsx';
import CurrentProjects from '@/components/sections/Projects/CurrentProjects.jsx';
import Section from '@/components/ui/Section.jsx';
import '@/components/sections/Projects/Projects.scss';

export default function Projects() {
	const { label, heading, current, agency } = projects;

	return (
		<Section name='projects' label={label} heading={heading}>
			<div className='projects__lists'>
				<CurrentProjects heading={current.heading} period={current.period} items={current.items} />
				<AgencyProjects heading={agency.heading} items={agency.items} otherClients={agency.otherClients} />
			</div>
		</Section>
	);
}
