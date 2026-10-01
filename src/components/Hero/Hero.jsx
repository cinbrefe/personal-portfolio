import { hero } from '../../content/copy.js';
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
			<div>
				<a href={primaryCta.href}>{primaryCta.label}</a>
				<a href={secondaryCta.href}>{secondaryCta.label}</a>
			</div>
			</div>
		</section>
	);
}