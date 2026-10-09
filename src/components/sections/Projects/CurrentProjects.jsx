import { a11y } from '../../../content/copy.js';
import ArrowIcon from '../../ui/ArrowIcon.jsx';
import './CurrentProjects.scss';

export default function CurrentProjects({ heading, period, items }) {
	return (
		<div className="current-projects">
			<div className="current-projects__header">
				<h3 className="current-projects__title">{heading}</h3>
				<p className="current-projects__period">{period}</p>
			</div>
			<ul className="current-projects__items">
				{items.map((item) => (
					<li key={item.number} className="current-projects__item">
						<p className="current-projects__item-number">{item.number}</p>
						<div className="current-projects__item-content">
							<h4 className="current-projects__item-title">{item.title}</h4>
							<p className="current-projects__item-description">{item.description}</p>
						</div>
						<ul className="current-projects__item-stack">
							{item.stack.map((tech) => (
								<li key={tech} className="current-projects__item-tech">{tech}</li>
							))}
						</ul>

						<ul className="current-projects__item-links">
							{item.links.map((link) => (
								<li key={link.label}>
									<a
										className="current-projects__item-link icon-link"
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${link.label} ${a11y.newTab}`}
									>
										{link.label}
										<ArrowIcon direction="arrow-up-right" className="icon-link__icon" />
									</a>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
