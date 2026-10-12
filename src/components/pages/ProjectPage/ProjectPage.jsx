import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router';
import { site } from '../../../content/copy.js';
import { projects } from '../../../content/projects.js';
import Carousel from '../../ui/Carousel/Carousel.jsx';
import Icon from '../../ui/Icon.jsx';
import './ProjectPage.scss';

export default function ProjectPage() {
	const { slug } = useParams();
	const { page } = projects;
	const { heading, items } = projects.agency;

	const index = items.findIndex((item) => item.slug === slug);
	const project = items[index]; // undefined when no project has this slug (index is -1)
	const next = items[(index + 1) % items.length]; // loops from the last back to the first

	const titleRef = useRef(null);

	// After navigating here (or to another project), move keyboard and screen-reader focus to the page title.
	// Hooks must run on every render, so this sits above the early return below.
	useEffect(() => {
		titleRef.current?.focus();
	}, [slug]);

	if (!project) {
		return (
			<article className="project-page" aria-labelledby="project-page-title">
				<title>{`${page.notFound} | ${page.titleSuffix}`}</title>
				{/* The server answers 200 for any URL, so keep this page out of search results */}
				<meta name="robots" content="noindex" />
				<div className="container container--narrow project-page__inner">
					<Link className="project-page__back icon-link" to="/#agency-projects">
						<Icon name="arrow-left" className="icon-link__icon" />
						{page.back}
					</Link>
					<h1 ref={titleRef} id="project-page-title" className="project-page__title" tabIndex={-1}>
						{page.notFound}
					</h1>
				</div>
			</article>
		);
	}

	return (
		<article className="project-page" aria-labelledby="project-page-title">
			{/* React 19 moves <title> and <link> into the page's <head> */}
			<title>{`${project.client} | ${page.titleSuffix}`}</title>
			<link rel="canonical" href={`${site.url}/projects/${project.slug}`} />
			<div className="container container--narrow project-page__inner">
				<Link className="project-page__back icon-link" to="/#agency-projects">
					<Icon name="arrow-left" className="icon-link__icon" />
					{page.back}
				</Link>
				{/* Meta comes after the <h1> so screen readers read it after the focused title; CSS shows it above */}
				<header className="project-page__header">
					<h1
						ref={titleRef}
						id="project-page-title"
						className="project-page__title"
						tabIndex={-1}
					>
						{project.client}
					</h1>
					<ul className="project-page__meta">
						<li>{heading}</li>
						<li>{project.agency}</li>
						<li>{project.period}</li>
					</ul>
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
			</div>
			{/* key: a new project gets a fresh carousel, starting at slide 1 */}
			<Carousel key={project.slug} slides={project.gallery} label={page.galleryLabel} />
			<div className="container container--narrow">
				<nav className="project-page__next" aria-label={page.navLabel}>
					<Link className="project-page__next-link" to={`/projects/${next.slug}`}>
						<span className="project-page__next-text">
							<span className="project-page__next-label">{page.nextLabel}</span>{' '}
							<span className="project-page__next-client">{next.client}</span>
						</span>
						<Icon name="arrow-right" className="project-page__next-icon" />
					</Link>
				</nav>
			</div>
		</article>
	);
}
