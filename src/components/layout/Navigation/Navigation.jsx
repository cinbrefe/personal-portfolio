import { Link } from 'react-router';
import { a11y, nav } from '../../../content/copy.js';
import useMobileMenu from '../../../hooks/useMobileMenu.js';
import Icon from '../../ui/Icon.jsx';
import './Navigation.scss';

function getLinkClassName(item) {
	if (!item.variant) return 'site-navigation__link';

	return `site-navigation__link button button--${item.variant} button--sm`;
}

export default function Navigation() {
	const { isOpen, toggle, close, toggleRef, panelRef, handleBlur } = useMobileMenu();

	return (
		// The toggle sits inside <nav>, so the "Main" navigation landmark exists even while the menu is closed.
		// Only the list is the dropdown panel that shows and hides.
		<nav className="site-navigation" aria-label={a11y.mainNav}>
			<button
				ref={toggleRef}
				className={`site-navigation__toggle${isOpen ? ' site-navigation__toggle--open' : ''}`}
				type="button"
				aria-controls="site-navigation-links"
				aria-expanded={isOpen}
				aria-label={a11y.menuButton}
				onClick={toggle}
				onBlur={handleBlur}
			>
				<span className="site-navigation__bar site-navigation__bar--top" aria-hidden="true" />
				<span className="site-navigation__bar site-navigation__bar--bottom" aria-hidden="true" />
			</button>
			{/* onBlur only listens for focus leaving the links inside (it bubbles up here); it's not a click handler */}
			{/* oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
			<ul
				ref={panelRef}
				id="site-navigation-links"
				className={`site-navigation__list${isOpen ? ' site-navigation__list--open' : ''}`}
				onBlur={handleBlur}
			>
				{nav.map((item) => (
					<li key={item.href}>
						{/* Files that open in a new tab (the resume) stay plain <a>; site pages use <Link>,
						    so moving between pages doesn't reload the whole app */}
						{item.newTab ? (
							<a
								className={getLinkClassName(item)}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${item.label} ${a11y.newTab}`}
								onClick={close}
							>
								{item.label}
								{item.icon && <Icon name={item.icon} className="button__icon" />}
							</a>
						) : (
							<Link className={getLinkClassName(item)} to={item.href} onClick={close}>
								{item.label}
								{item.icon && <Icon name={item.icon} className="button__icon" />}
								{/* Plain links get an arrow; CSS only shows it on mobile */}
								{!item.variant && <Icon name="arrow-right" className="site-navigation__arrow" />}
							</Link>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}
