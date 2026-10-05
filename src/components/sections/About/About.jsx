import { about } from '../../../content/copy.js';
import './About.scss';

export default function About() {
	const { label, heading, lead, body, currently } = about;

	return (
		<section id="about" className="about page-section" aria-labelledby="about-title">
			<div className="container about__inner">
				<div className="about__header">
					<p className="page-section__label">{label}</p>
					<h2 id="about-title">{heading}</h2>
				</div>
				<div className="about__intro">
					<p className="about__lead">{lead}</p>
					{body.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>
				<div className="about__currently">
					<h3 className="page-section__label">{currently.heading}</h3>
					<dl className="about__list">
						{currently.items.map((item) => (
							<div key={item.term} className="about__item">
								<dt className="about__term">{item.term}</dt>
								<dd className="about__value">{item.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
