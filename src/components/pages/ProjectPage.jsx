import { useParams } from 'react-router';
import { projects } from '../../content/projects.js';

export default function ProjectPage() {
	const { slug } = useParams();
	const project = projects.agency.items.find((item) => item.slug === slug);

	// Wrong or old URL: no project has this slug
	if (!project) {
		return <h1>Project not found</h1>;
	}

	return <h1>{project.client}</h1>;
}
