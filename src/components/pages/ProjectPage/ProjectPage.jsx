import { useParams } from 'react-router';
import { projects } from '../../../content/projects.js';
import ArrowIcon from '../../ui/ArrowIcon.jsx';
import './ProjectPage.scss';

export default function ProjectPage() {
	const { slug } = useParams();
	const { page } = projects;
	const { heading, items } = projects.agency;
	const project = items.find((item) => item.slug === slug);

	// Wrong or old URL: no project has this slug
	if (!project) {
		return (
			<article className="project-page" aria-labelledby="project-page-title">
				<title>{`${page.notFound} | ${page.titleSuffix}`}</title>
				<div className="container project-page__inner">
					<a className="project-page__back icon-link" href="/#projects">
						<ArrowIcon direction="arrow-left" className="icon-link__icon" />
						{page.back}
					</a>
					<h1 id="project-page-title" className="project-page__title">{page.notFound}</h1>
				</div>
			</article>
		);
	}

	// Next project, looping from the last back to the first
	const index = items.findIndex((item) => item.slug === slug);
	const next = items[(index + 1) % items.length];

	return (
		<article className="project-page" aria-labelledby="project-page-title">
			{/* React 19 moves this <title> into the page's <head> */}
			<title>{`${project.client} | ${page.titleSuffix}`}</title>
			<div className="container project-page__inner">
				<a className="project-page__back icon-link" href="/#projects">
					<ArrowIcon direction="arrow-left" className="icon-link__icon" />
					{page.back}
				</a>
				<header className="project-page__header">
					<ul className="project-page__meta">
						<li>{heading}</li>
						<li>{project.agency}</li>
						<li>{project.period}</li>
					</ul>
					<h1 id="project-page-title" className="project-page__title">{project.client}</h1>
				</header>
				<div className="project-page__content">
					<p className="project-page__intro">{project.intro}</p>
					<ul className="project-page__contributions">
						{project.contributions.map((contribution) => (
							<li key={contribution}>{contribution}</li>
						))}
					</ul>
					<div className="project-page__stack">
						<h2 className="project-page__stack-label">{page.stackLabel}</h2>
						<ul className="project-page__stack-list">
							{project.stack.map((tech) => (
								<li key={tech}>{tech}</li>
							))}
						</ul>
					</div>
				</div>
				{/* Carousel goes here (last step) */}
				<nav className="project-page__next" aria-label={page.navLabel}>
					<a className="project-page__next-link" href={`/projects/${next.slug}`}>
						<span className="project-page__next-text">
							<span className="project-page__next-label">{page.nextLabel}</span>{' '}
							<span className="project-page__next-client">{next.client}</span>
						</span>
						<ArrowIcon direction="arrow-right" className="project-page__next-icon" />
					</a>
				</nav>
			</div>
		</article>
	);
}