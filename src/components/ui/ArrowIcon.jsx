export default function ArrowIcon({ direction, className = '' }) {
	if (direction === 'arrow-up-right') {
		return (
			<svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
				<path d="M7 17L17 7M8 7h9v9" />
			</svg>
		);
	}

	if (direction === 'arrow-right') {
		return (
			<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
				<path d="M5 12h14M13 6l6 6-6 6" />
			</svg>
		);
	}

	return null;
}
