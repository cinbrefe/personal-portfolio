import Icon from '../../ui/Icon.jsx';
import './AgencyProjects.scss';

export default function AgencyProjects({ heading, items, otherClients }) {
	return (
		<div className="agency-projects">
			<h3 className="agency-projects__title">{heading}</h3>
			<ul className="agency-projects__items">
				{items.map((item) => (
					<li key={item.client} className="agency-projects__item">
						<div className="agency-projects__item-media">
							<img
								className="agency-projects__item-image"
								src={item.image.src}
								alt={item.image.alt}
								loading="lazy"
								height="157"
								width="252"
							/>
						</div>
						<div className="agency-projects__item-content">
							<div className="agency-projects__item-header">
								<h4 className="agency-projects__item-client">
									<a className="agency-projects__item-link" href={`/projects/${item.slug}`}>
										{item.client}
									</a>
								</h4>
								<Icon name="arrow-right" className="agency-projects__item-icon" />
							</div>
							<ul className="agency-projects__item-meta">
								<li>{item.agency}</li>
								<li>{item.period}</li>
							</ul>
							<p className="agency-projects__item-description">{item.description}</p>
						</div>
					</li>
				))}
			</ul>
			<div className="agency-projects__other-clients">
				<p className="agency-projects__other-clients-label">{otherClients.label}</p>
				<ul className="agency-projects__other-clients-list">
					{otherClients.names.map((name) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}