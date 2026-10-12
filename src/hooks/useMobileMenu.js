import { useEffect, useRef, useState } from 'react';

// True when the node is inside any of the given elements. Lives outside the hook because it uses
// no state or props, so effects can call it without listing it as a dependency.
function isInside(node, ...refs) {
	return refs.some((ref) => ref.current?.contains(node));
}

// Open/close state for the mobile menu: a toggle button that shows and hides a panel.
// The panel closes on Escape, outside click, focus leaving it, or the toggle being hidden by CSS.
export default function useMobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleRef = useRef(null);
	const panelRef = useRef(null);

	// Plain functions: they're only passed to DOM elements, so they don't need useCallback.
	// The effects below call setIsOpen directly, because React keeps setIsOpen the same on every render.
	const toggle = () => setIsOpen((open) => !open);
	const close = () => setIsOpen(false);

	// Escape closes the menu and returns focus to the toggle
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event) => {
			if (event.key !== 'Escape') return;
			setIsOpen(false);
			toggleRef.current?.focus();
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen]);

	// Clicking or tapping anywhere outside the toggle and panel closes the menu
	useEffect(() => {
		if (!isOpen) return;

		const handlePointerDown = (event) => {
			if (!isInside(event.target, panelRef, toggleRef)) setIsOpen(false);
		};

		document.addEventListener('pointerdown', handlePointerDown);
		return () => document.removeEventListener('pointerdown', handlePointerDown);
	}, [isOpen]);

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
			setIsOpen(false);
		});

		observer.observe(toggleRef.current);
		return () => observer.disconnect();
	}, [isOpen]);

	// Keyboard focus leaving both the toggle and panel closes the menu.
	// A null relatedTarget means a pointer interaction, which the outside-click effect handles.
	const handleBlur = (event) => {
		const next = event.relatedTarget;
		if (next && !isInside(next, panelRef, toggleRef)) close();
	};

	return { isOpen, toggle, close, toggleRef, panelRef, handleBlur };
}
