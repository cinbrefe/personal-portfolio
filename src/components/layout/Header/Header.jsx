import { useEffect, useState } from 'react';
import { a11y, brand } from '../../../content/copy.js';
import Navigation from '../Navigation/Navigation.jsx';
import './Header.scss';

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const updateScrolledState = () => setIsScrolled(window.scrollY > 8);

		updateScrolledState();
		window.addEventListener('scroll', updateScrolledState, { passive: true });
		return () => window.removeEventListener('scroll', updateScrolledState);
	}, []);

	return (
		<header
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
