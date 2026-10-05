import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx';
import { skills } from '../../../content/copy.js';
import './Skills.scss';

export default function Skills() {
	const { label, heading, groups } = skills;

	return (
		<section id="skills" className="skills page-section" aria-labelledby="skills-title">
			<div className="container skills__inner">
				<SectionHeader name="skills" label={label} heading={heading} />
				<div className="skills__groups">
					{groups.map((group) => (
						<div key={group.name} className="skills__group">
							<h3 className="skills__group-name">{group.name}</h3>
							<ul className="skills__tags">
								{group.items.map((item) => (
									<li key={item} className="skills__tag">{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}