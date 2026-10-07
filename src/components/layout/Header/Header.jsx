import { useEffect, useState } from 'react';
import { brand } from '../../../content/copy.js';
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
			id="top"
			className={`site-header page-section page-section--compact${isScrolled ? ' site-header--scrolled' : ''}`}
		>
			<div className="container site-header__inner">
				<a className="site-header__brand" href="#top" aria-label={brand.name + brand.suffix + ' home'}>
					{brand.name}<span className="site-header__brand-suffix">{brand.suffix}</span>
				</a>
				<Navigation />
			</div>
		</header>
	);
}