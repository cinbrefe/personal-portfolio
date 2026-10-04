// Mouse pointer icon (path from Lucide's "mouse-pointer-2", ISC license).
// Decorative only, so it's hidden from screen readers.
export default function CursorIcon({ className = '' }) {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" focusable="false">
			<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
		</svg>
	);
}
