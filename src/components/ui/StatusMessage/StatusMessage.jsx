import { Link } from 'react-router';
import useFocusOnMount from '../../../hooks/useFocusOnMount.js';
import './StatusMessage.scss';

// Full-page message for the not-found and error views. noindex: the server answers 200 for any URL,
// so these pages stay out of search results. reload: a plain <a> restarts the whole site (after a crash).
export default function StatusMessage({ copy, reload = false }) {
	const titleRef = useFocusOnMount();
	const linkClassName = 'status-message__link button button--primary';

	return (
		<section className="status-message" aria-labelledby="status-message-title">
			<title>{copy.documentTitle}</title>
			<meta name="robots" content="noindex" />
			<div className="container container--narrow status-message__inner">
				<h1 ref={titleRef} id="status-message-title" className="status-message__title" tabIndex={-1}>
					{copy.heading}
				</h1>
				<p className="status-message__message">{copy.message}</p>
				{reload ? (
					<a className={linkClassName} href={copy.link.href}>{copy.link.label}</a>
				) : (
					<Link className={linkClassName} to={copy.link.href}>{copy.link.label}</Link>
				)}
			</div>
		</section>
	);
}
