import ExternalLink from '../../ui/ExternalLink.jsx';
import Icon from '../../ui/Icon.jsx';
import './CurrentProjects.scss';

export default function CurrentProjects({ heading, period, items }) {
	return (
		<div className="current-projects">
			<div className="current-projects__header">
				<h3 className="current-projects__title">{heading}</h3>
				<p className="current-projects__period">{period}</p>
			</div>
			<ul className="current-projects__items">
				{items.map((item, index) => (
					<li key={item.title} className="current-projects__item">
						<p className="current-projects__item-number">{String(index + 1).padStart(2, '0')}</p>
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
									<ExternalLink
										className="current-projects__item-link icon-link"
										href={link.href}
										label={`${link.label}: ${item.title}`}
									>
										{link.label}
										<Icon name="arrow-up-right" className="icon-link__icon" />
									</ExternalLink>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
