import { hero } from '../../content/copy.js';
import ArrowIcon from '../ui/ArrowIcon.jsx';
import './Hero.scss';

export default function Hero() {
	const { availability, greeting, name, role, location, body, primaryCta, secondaryCta } = hero;

	return (
		<section className="hero page-section page-section--hero" aria-labelledby="hero-title">
			<div className="container">
			<p>{availability}</p>
			<p>{greeting}</p>
			<h1 id="hero-title">{name}</h1>
			<p>{role} · {location}</p>
			<p>{body}</p>
			<div className="hero__actions">
				<a className={`button button--primary${primaryCta.icon ? ` button--${primaryCta.icon}` : ''}`} href={primaryCta.href}>
					{primaryCta.label}
					{primaryCta.icon && <ArrowIcon direction={primaryCta.icon} className="button__icon" />}
				</a>
				<a className="button button--ghost" href={secondaryCta.href}>
					{secondaryCta.label}
					{secondaryCta.icon && <ArrowIcon direction={secondaryCta.icon} className="button__icon" />}
				</a>
			</div>
			</div>
		</section>
	);
}