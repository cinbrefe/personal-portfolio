import { nav } from '../../../content/copy.js';
import './Navigation.scss';

export default function Navigation() {
	return (
		<nav aria-label="Main navigation" className="site-navigation">
			<ul className="site-navigation__list">
				{nav.map((item) => (
					<li key={item.label}>
						<a href={item.href}>{item.label}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}