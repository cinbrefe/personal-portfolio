import { hero } from '../../content/copy.js';
import ArrowIcon from '../ui/ArrowIcon.jsx';
import CursorIcon from '../ui/CursorIcon.jsx';
import InspectTip from '../ui/InspectTip/InspectTip.jsx';
import './Hero.scss';

export default function Hero() {
	const { availability, greeting, name, role, location, inspectTip, body, primaryCta, secondaryCta } = hero;

	return (
		<section className="hero page-section page-section--hero" aria-labelledby="hero-title">
			<div className="container hero__inner">
				<div className="hero__header">
					<p className="hero__availability">{availability}</p>
					<h1 id="hero-title" className="hero__title">
						{greeting}{' '}
						<span className="hero__name">
							{name}
							<CursorIcon className="hero__cursor" />
						</span>
					</h1>
				</div>

				<InspectTip
					tag={inspectTip.tag}
					selectorClass={inspectTip.selectorClass}
					size={inspectTip.size}
					font={inspectTip.font}
					role={role}
					location={location}
				/>

				<p className="hero__intro">{body}</p>

				<div className="hero__actions">
					<a className="button button--primary" href={primaryCta.href}>
						{primaryCta.label}
						{primaryCta.icon && <ArrowIcon direction={primaryCta.icon} className="button__icon" />}
					</a>
					<a className="button button--ghost" href={secondaryCta.href} download>
						{secondaryCta.label}
					</a>
				</div>
			</div>
		</section>
	);
}
