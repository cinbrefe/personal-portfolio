import { education } from '../../../content/copy.js';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import './Education.scss';

export default function Education() {
	const { label, heading, groups } = education;

	return (
		<section id="education" className="education page-section" aria-labelledby="education-title">
			<div className="container education__inner">
				<SectionHeader name="education" label={label} heading={heading} />
				<div className="education__groups">
					{groups.map((group) => (
						<div key={group.heading} className="education__group">
							<h3 className="education__group-name">{group.heading}</h3>
							<ul className="education__items">
								{group.items.map((item) => (
									<li key={item.title} className="education__item">
										<div className="education__item-content">
											<h4 className="education__item-title">{item.title}</h4>
											<p className="education__item-institution">{item.institution}</p>
										</div>
										<p className="education__item-period">{item.period}</p>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
