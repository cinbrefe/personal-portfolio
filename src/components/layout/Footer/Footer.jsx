import { footer } from '../../../content/copy.js';
import Icon from '../../ui/Icon.jsx';
import './Footer.scss';

export default function Footer() {
	const { text, credit, backToTop } = footer;

	return (
		<footer className="site-footer">
			<div className="container site-footer__inner">
				<p className="site-footer__text">{text}</p>
				<div className="site-footer__meta">
					<p className="site-footer__credit">{credit}</p>
					<a className="site-footer__top-link icon-link" href={backToTop.href}>
						{backToTop.label}
						<Icon name="arrow-up" className="icon-link__icon" />
					</a>
				</div>
			</div>
		</footer>
	);
}
