import { Link } from 'react-router';
import { notFoundPage } from '../../../content/copy.js';
import useFocusOnMount from '../../../hooks/useFocusOnMount.js';
import './NotFoundPage.scss';

export default function NotFoundPage() {
	const titleRef = useFocusOnMount();

	return (
		<section className="not-found-page" aria-labelledby="not-found-page-title">
			<title>{notFoundPage.documentTitle}</title>
			{/* The server answers 200 for any URL, so keep this page out of search results */}
			<meta name="robots" content="noindex" />
			<div className="container container--narrow not-found-page__inner">
				<h1 ref={titleRef} id="not-found-page-title" className="not-found-page__title" tabIndex={-1}>
					{notFoundPage.heading}
				</h1>
				<p className="not-found-page__message">{notFoundPage.message}</p>
				<Link className="not-found-page__link button button--primary" to="/">{notFoundPage.homeLink}</Link>
			</div>
		</section>
	);
}
