
import Navigation from '../Navigation/Navigation.jsx';
import { brand } from '../../../content/copy.js';
import './Header.scss';

export default function Header() {
	return (
		<header id="top" className="site-header page-section page-section--compact">
			<div className="container site-header__inner">
				<a className="site-header__brand" href="#top" aria-label={brand.name + brand.suffix + ' home'}>
					{brand.name}<span className="site-header__brand-suffix">{brand.suffix}</span>
				</a>
				<Navigation />
			</div>
		</header>
	);
}