import { a11y } from '../../content/copy.js';

// A link that opens in a new tab. rel="noopener noreferrer" stops the new page from controlling this one,
// and the accessible name ends with "(opens in new tab)" so screen-reader users aren't surprised.
// label: the start of that accessible name (usually the visible text, plus any context).
export default function ExternalLink({ className, href, label, onClick, children }) {
	return (
		<a
			className={className}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${label} ${a11y.newTab}`}
			onClick={onClick}
		>
			{children}
		</a>
	);
}
