import { a11y } from '../../content/copy.js';

// rel stops the new tab from controlling this page; the accessible name ends with "(opens in new tab)".
// label: the start of that name (the visible text, plus any context).
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
