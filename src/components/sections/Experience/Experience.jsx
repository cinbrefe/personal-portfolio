import { experience } from '../../../content/copy.js';
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import './Experience.scss';

export default function Experience() {
	const { label, heading, companies } = experience;

	return (
		<section id="experience" className="experience page-section" aria-labelledby="experience-title">
			<div className="container experience__inner">
				<SectionHeader name="experience" label={label} heading={heading} />
				<div className="experience__companies">
					{companies.map((company) => (
						<div key={company.name} className="experience__company">
							<div className="experience__company-info">
								<h3 className="experience__company-name">{company.name}</h3>
								<p className="experience__company-note">{company.note}</p>
								<p className="experience__company-period">{company.period}</p>
							</div>
							<ul className="experience__roles">
								{company.roles.map((role) => (
									<li key={role.title} className="experience__role">
										<div className="experience__role-header">
											<h4 className="experience__role-title">{role.title}</h4>
											<p className="experience__role-period">{role.period}</p>
										</div>
										<ul className="experience__bullets">
											{role.bullets.map((bullet) => (
												<li key={bullet} className="experience__bullet">{bullet}</li>
											))}
										</ul>
										<ul className="experience__tags">
											{role.tags.map((tag) => (
												<li key={tag} className="experience__tag">{tag}</li>
											))}
										</ul>
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
