// Every icon used on the site. Each entry only holds what's unique to it (size, shapes and a few
// optional differences); the shared <svg> below adds the viewBox, colour and accessibility.
// Mail, LinkedIn, GitHub and cursor paths are from Lucide (ISC license).
const icons = {
	'arrow-left': { size: 18, shapes: <path d="M19 12H5M11 6l-6 6 6 6" /> },
	'arrow-right': { size: 18, shapes: <path d="M5 12h14M13 6l6 6-6 6" /> },
	'arrow-up-right': { size: 16, shapes: <path d="M7 17L17 7M8 7h9v9" /> },
	'chevron-left': { size: 22, strokeWidth: 2.4, shapes: <path d="M15 5l-7 7 7 7" /> },
	'chevron-right': { size: 22, strokeWidth: 2.4, shapes: <path d="M9 5l7 7-7 7" /> },
	// Filled shape; its outline colour comes from CSS (see .hero__cursor)
	cursor: {
		size: 24,
		filled: true,
		strokeWidth: 1.5,
		shapes: <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />,
	},
	github: {
		size: 20,
		shapes: (
			<>
				<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
				<path d="M9 18c-4.51 2-5-2-7-2" />
			</>
		),
	},
	linkedin: {
		size: 20,
		shapes: (
			<>
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
				<rect width="4" height="12" x="2" y="9" />
				<circle cx="4" cy="4" r="2" />
			</>
		),
	},
	mail: {
		size: 20,
		shapes: (
			<>
				<rect width="20" height="16" x="2" y="4" rx="2" />
				<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
			</>
		),
	},
};

// Decorative only: the text next to each icon already says what it means, so icons are hidden from
// screen readers. Colour follows the surrounding text (currentColor); size can be changed with CSS.
export default function Icon({ name, className = '' }) {
	const icon = icons[name];
	if (!icon) return null;

	return (
		<svg
			className={className}
			width={icon.size}
			height={icon.size}
			viewBox="0 0 24 24"
			fill={icon.filled ? 'currentColor' : 'none'}
			stroke="currentColor"
			strokeWidth={icon.strokeWidth ?? 2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
		>
			{icon.shapes}
		</svg>
	);
}
