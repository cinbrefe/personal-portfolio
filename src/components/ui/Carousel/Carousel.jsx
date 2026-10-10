import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import { a11y } from '../../../content/copy.js';
import Icon from '../Icon.jsx';
import './Carousel.scss';

// People who ask for less motion get an instant jump instead of the sliding animation.
// Checked on each click, so it follows the setting even if it changes while the page is open.
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Carousel({ slides, label }) {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
			breakpoints: {
				// Keep in sync with $breakpoint-md in _variables.scss
				'(min-width: 768px)': { align: 'center' },
			},
		},
		[ClassNames()],
	);
	const [selectedIndex, setSelectedIndex] = useState(0);

	// When Embla changes slide (swipe, arrows, dots, looping), remember which one is active
	useEffect(() => {
		if (!emblaApi) return;

		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on('select', onSelect);
		return () => emblaApi.off('select', onSelect);
	}, [emblaApi]);

	return (
		<section className="carousel" aria-label={label}>
			<div className="carousel__viewport" ref={emblaRef}>
				<ul className="carousel__track">
					{slides.map((slide) => (
						<li key={slide.src} className="carousel__slide">
							<figure className="carousel__figure">
								<img
									className="carousel__image"
									alt={slide.alt}
									height="1000"
									loading="lazy"
									src={slide.src}
									width="1600"
								/>
								<figcaption className="carousel__caption">{slide.title}</figcaption>
							</figure>
						</li>
					))}
				</ul>
			</div>
			<div className="carousel__controls">
				<button
					type="button"
					className="carousel__button"
					aria-label={a11y.carouselPrevious}
					onClick={() => emblaApi?.scrollPrev(prefersReducedMotion())}
				>
					<Icon name="chevron-left" className="carousel__button-icon" />
				</button>
				<button
					type="button"
					className="carousel__button"
					aria-label={a11y.carouselNext}
					onClick={() => emblaApi?.scrollNext(prefersReducedMotion())}
				>
					<Icon name="chevron-right" className="carousel__button-icon" />
				</button>
			</div>
			<div className="carousel__dots">
				{slides.map((slide, index) => (
					<button
						key={slide.src}
						type="button"
						className="carousel__dot"
						aria-label={`${a11y.carouselGoTo} ${index + 1}: ${slide.title}`}
						aria-current={index === selectedIndex ? 'true' : undefined}
						onClick={() => emblaApi?.scrollTo(index, prefersReducedMotion())}
					/>
				))}
			</div>
		</section>
	);
}
