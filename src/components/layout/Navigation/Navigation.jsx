import { nav } from '../../../content/copy.js';
import useMobileMenu from '../../../hooks/useMobileMenu.js';
import ArrowIcon from '../../ui/ArrowIcon.jsx';
import './Navigation.scss';

// Plain links get the nav style; items with a variant render as small buttons
function getLinkClassName(item) {
	if (!item.variant) return 'site-navigation__link';

	return `site-navigation__link button button--${item.variant} button--sm`;
}

export default function Navigation() {
	const { isOpen, toggle, close, toggleRef, panelRef, handleBlur } = useMobileMenu();

	return (
		<>
			<button
				ref={toggleRef}
				className={`site-navigation__toggle${isOpen ? ' site-navigation__toggle--open' : ''}`}
				type="button"
				aria-controls="site-navigation-links"
				aria-expanded={isOpen}
				aria-label="Menu"
				onClick={toggle}
				onBlur={handleBlur}
			>
				<span className="site-navigation__bar site-navigation__bar--top" aria-hidden="true" />
				<span className="site-navigation__bar site-navigation__bar--bottom" aria-hidden="true" />
			</button>
			<nav
				ref={panelRef}
				id="site-navigation-links"
				className={`site-navigation${isOpen ? ' site-navigation--open' : ''}`}
				aria-label="Main"
				onBlur={handleBlur}
			>
				<ul className="site-navigation__list">
					{nav.map((item) => (
						<li key={item.href}>
							<a
								className={getLinkClassName(item)}
								href={item.href}
								target={item.newTab ? '_blank' : undefined}
								rel={item.newTab ? 'noopener noreferrer' : undefined}
								aria-label={item.newTab ? `${item.label} (opens in new tab)` : undefined}
								onClick={close}
							>
								{item.label}
								{item.icon && <ArrowIcon direction={item.icon} className="button__icon" />}
								{/* Plain links get an arrow; CSS only shows it on mobile */}
								{!item.variant && <ArrowIcon direction="arrow-right" className="site-navigation__arrow" />}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
