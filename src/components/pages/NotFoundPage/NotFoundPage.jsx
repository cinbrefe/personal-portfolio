import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { notFoundPage } from '../../../content/copy.js';
import './NotFoundPage.scss';

// Shown for any URL that doesn't match a route (see the path="*" route in App)
export default function NotFoundPage() {
	const titleRef = useRef(null);

	// Same as ProjectPage: move keyboard and screen-reader focus to the title after navigating here
	useEffect(() => {
		titleRef.current?.focus();
	}, []);

	return (
		<section className="not-found-page container container--narrow" aria-labelledby="not-found-page-title">
			<title>{notFoundPage.documentTitle}</title>
			<h1 ref={titleRef} id="not-found-page-title" className="not-found-page__title" tabIndex={-1}>
				{notFoundPage.heading}
			</h1>
			<p className="not-found-page__message">{notFoundPage.message}</p>
			<Link className="not-found-page__link button button--primary" to="/">{notFoundPage.homeLink}</Link>
		</section>
	);
}
