import { about } from '../../../content/copy.js';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import './About.scss';

export default function About() {
	const { label, heading, lead, body, currently } = about;

	return (
		<section id="about" className="about page-section" aria-labelledby="about-title">
			<div className="container about__inner">
				<SectionHeader name="about" label={label} heading={heading} />
				<div className="about__content">
					<div className="about__intro">
						<p className="about__lead">{lead}</p>
						{body.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
					<div className="about__currently">
						<h3 className="about__currently-title">{currently.heading}</h3>
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
			</div>
		</section>
	);
}
