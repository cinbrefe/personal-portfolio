import { useCallback, useEffect, useRef, useState } from 'react';

// Open/close state for the mobile menu: a toggle button that shows and hides a panel.
// The panel closes on Escape, outside click, focus leaving it, or the toggle being hidden by CSS.
export default function useMobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleRef = useRef(null);
	const panelRef = useRef(null);

	const toggle = useCallback(() => setIsOpen((open) => !open), []);
	const close = useCallback(() => setIsOpen(false), []);

	const isInsideMenu = (node) =>
		panelRef.current?.contains(node) || toggleRef.current?.contains(node);

	// Escape closes the menu and returns focus to the toggle
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event) => {
			if (event.key !== 'Escape') return;
			close();
			toggleRef.current?.focus();
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, close]);

	// Clicking or tapping anywhere outside the toggle and panel closes the menu
	useEffect(() => {
		if (!isOpen) return;

		const handlePointerDown = (event) => {
			if (!isInsideMenu(event.target)) close();
		};

		document.addEventListener('pointerdown', handlePointerDown);
		return () => document.removeEventListener('pointerdown', handlePointerDown);
	}, [isOpen, close]);

	// When CSS hides the toggle (desktop width), its size drops to 0 — close the menu.
	// Watching the toggle itself means the breakpoint only lives in Sass.
	useEffect(() => {
		if (!isOpen || !toggleRef.current) return;

		const observer = new ResizeObserver(([entry]) => {
			if (entry.contentRect.width > 0) return;
			// The toggle can no longer hold focus, so hand it to the first nav link
			if (document.activeElement === toggleRef.current || document.activeElement === document.body) {
				panelRef.current?.querySelector('a')?.focus();
			}
			close();
		});

		observer.observe(toggleRef.current);
		return () => observer.disconnect();
	}, [isOpen, close]);

	// Keyboard focus leaving both the toggle and panel closes the menu.
	// A null relatedTarget means a pointer interaction, which the outside-click effect handles.
	const handleBlur = (event) => {
		const next = event.relatedTarget;
		if (next && !isInsideMenu(next)) close();
	};

	return { isOpen, toggle, close, toggleRef, panelRef, handleBlur };
}
