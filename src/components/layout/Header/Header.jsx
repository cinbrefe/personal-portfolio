import { useEffect, useRef, useState } from 'react';
import { a11y, brand } from '../../../content/copy.js';
import Navigation from '../Navigation/Navigation.jsx';
import './Header.scss';

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const headerRef = useRef(null);

	// Header turns solid after a few pixels of scroll. `passive` tells the browser this listener never blocks scrolling.
	useEffect(() => {
		const updateScrolledState = () => setIsScrolled(window.scrollY > 8);

		updateScrolledState();
		window.addEventListener('scroll', updateScrolledState, { passive: true });
		return () => window.removeEventListener('scroll', updateScrolledState);
	}, []);

	// Shares the header's real height with CSS (--site-header-height), so scroll-padding keeps
	// focused links and anchor targets out from under it, even when the nav wraps to two rows.
	useEffect(() => {
		const observer = new ResizeObserver(([entry]) => {
			document.documentElement.style.setProperty('--site-header-height', `${entry.borderBoxSize[0].blockSize}px`);
		});

		observer.observe(headerRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={headerRef}
			className={`site-header page-section page-section--compact${isScrolled ? ' site-header--scrolled' : ''}`}
		>
			<div className="container site-header__inner">
				<a className="site-header__brand" href="/" aria-label={`${brand.name}${brand.suffix} ${a11y.homeLink}`}>
					{brand.name}<span className="site-header__brand-suffix">{brand.suffix}</span>
				</a>
				<Navigation />
			</div>
		</header>
	);
}
